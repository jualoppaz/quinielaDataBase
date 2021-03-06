var db, tickets, accounts, teams, seasons, competitions;

var ObjectID = require("mongodb").ObjectID;

var DBM = require("./init-data-base-manager");

DBM.getDatabaseInstance(function(err, res) {
    if (err) {
        console.log(err);
        return;
    }

    db = res;

    accounts = db.collection("accounts");
    tickets = db.collection("quiniela_tickets");
    teams = db.collection("quiniela_teams");
    seasons = db.collection("quiniela_seasons");
    competitions = db.collection("quiniela_competitions");
});

var resultadosPleno = [
    "0-0",
    "0-1",
    "0-2",
    "0-M",
    "1-0",
    "1-1",
    "1-2",
    "1-M",
    "2-0",
    "2-1",
    "2-2",
    "2-M",
    "M-0",
    "M-1",
    "M-2",
    "M-M"
];

exports.addNewTicket = function(ticket, callback) {
    var trozos = ticket.fecha.split("/");

    var fecha = trozos[2] + "-" + trozos[1] + "-" + trozos[0];

    tickets.insert(
        {
            modalidad: ticket.modalidad,
            temporada: ticket.temporada,
            jornada: Number(ticket.jornada),
            fecha: new Date(fecha),
            precio: Number(ticket.precio),
            premio: Number(ticket.premio),
            partidos: ticket.partidos
        },
        {
            w: 1
        },
        function(e, res) {
            if (e) {
                callback(e);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.editTicket = function(ticket, callback) {
    var trozos = ticket.fecha.split("/");

    var fecha = trozos[2] + "-" + trozos[1] + "-" + trozos[0];

    tickets.update(
        {
            _id: getObjectId(ticket._id)
        },
        {
            modalidad: ticket.modalidad,
            temporada: ticket.temporada,
            jornada: Number(ticket.jornada),
            fecha: new Date(fecha),
            precio: Number(ticket.precio),
            premio: Number(ticket.premio),
            partidos: ticket.partidos
        },
        {
            w: 1
        },
        function(e, res) {
            if (e || res == 0) {
                console.log("not-updated");
                callback("not-updated");
            } else {
                callback(null, res);
            }
        }
    );
};

var getObjectId = function(id) {
    return ObjectID(id);
};

// CONSULTAS QUINIELA DATA BASE

exports.getTicketsBySeasonAndDay = function(season, day, callback) {
    console.log("Temporada recibida: " + season);
    console.log("Jornada recibida: " + day);

    tickets.findOne(
        {
            temporada: season,
            $or: [
                {
                    jornada: day
                },
                {
                    jornada: Number(day)
                }
            ]
        },
        function(e, res) {
            if (e) {
                console.log(e);
                callback(e);
            } else {
                callback(null, res);
            }
        }
    );
};

// API REST: /api/historical

exports.getTicketsGroupedByRes = function(filtros, callback) {
    var filters = {
        "partidos.fila": 15,
        "partidos.resultadoConGoles": {
            $ne: null
        }
    };

    if (filtros.competition) {
        filters["partidos.competicion"] = filtros.competition;
    }

    if (filtros.season) {
        filters["temporada"] = filtros.season;
    }

    if (filtros.localTeam) {
        filters["partidos.local"] = filtros.localTeam;
    }

    if (filtros.visitorTeam) {
        filters["partidos.visitante"] = filtros.visitorTeam;
    }

    var query = [];

    query.push({
        $unwind: "$partidos"
    });

    query.push({
        $match: filters
    });

    query.push({
        $group: {
            _id: "$partidos.resultadoConGoles",
            total: {
                $sum: 1
            }
        }
    });

    tickets.aggregate(query, function(e, res) {
        if (e) {
            callback(e);
        } else {
            callback(null, res);
        }
    });
};

exports.getAllTickets = function(filters, callback) {
    var parsedFilters = {};

    if (filters.season) {
        parsedFilters.temporada = filters.season;
    }

    var limit = filters.perPage;
    var page = filters.page;
    var skip = (page - 1) * limit;
    var sort = filters.sort;
    var type = filters.type;

    var options = {
        sort: [[sort, type]],
        limit: limit,
        skip: skip
    };

    tickets.count(parsedFilters, function(err, total) {
        if (err) {
            callback(err);
        } else {
            tickets.find(parsedFilters, options).toArray(function(err, res) {
                if (err) {
                    callback(err);
                } else {
                    var result = {
                        page: page,
                        perPage: limit,
                        total: total,
                        data: res
                    };

                    callback(null, result);
                }
            });
        }
    });
};

exports.getAllAppearedResults = function(filtros, callback) {
    var limit = filtros.perPage;
    var page = filtros.page;
    var skip = (page - 1) * limit;
    var sort = filtros.sort;
    var type = filtros.type;

    var sort_property = sort === "result" ? "resultAsString" : "occurrences";
    var sort_type = type === "asc" ? 1 : -1;

    var query = [];

    query.push({
        $addFields: {
            resultAsString: {
                $concat: [
                    {
                        $reduce: {
                            input: "$partidos",
                            initialValue: "",
                            in: {
                                $concat: [
                                    "$$value",
                                    {
                                        $cond: {
                                            if: {
                                                $and: [
                                                    {
                                                        $eq: ["$$this.fila", 15]
                                                    },
                                                    {
                                                        $gte: [
                                                            "$$this.temporada",
                                                            "2014-2015"
                                                        ]
                                                    }
                                                ]
                                            },
                                            then: "$$this.resultadoConGoles",
                                            else: "$$this.resultado"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    });

    query.push({
        $unwind: "$partidos"
    });

    query.push({
        $group: {
            _id: {
                jornada: "$jornada",
                temporada: "$temporada"
            },
            results: {
                $push: {
                    $cond: {
                        if: {
                            $and: [
                                {
                                    $eq: ["$partidos.fila", 15]
                                },
                                {
                                    $gte: ["$partidos.temporada", "2014-2015"]
                                }
                            ]
                        },
                        then: "$partidos.resultadoConGoles",
                        else: "$partidos.resultado"
                    }
                }
            },
            resultAsString: {
                $first: "$resultAsString"
            }
        }
    });

    query.push({
        $project: {
            _id: 0,
            resultAsString: "$resultAsString",
            results: 1
        }
    });

    query.push({
        $group: {
            _id: "$resultAsString",
            occurrences: {
                $sum: 1
            },
            results: {
                $first: "$results"
            }
        }
    });

    query.push({
        $project: {
            _id: 0,
            resultAsString: "$_id",
            occurrences: 1,
            results: 1
        }
    });

    tickets.aggregate(query, function(err, res) {
        if (err) {
            callback(err);
        } else {
            var result = {
                page: page,
                perPage: limit,
                total: res.length
            };

            var sortConfig = {};
            sortConfig[sort_property] = sort_type;

            // Añadimos ordenación alternativa
            if (sort_property === "occurrences") {
                sortConfig["resultAsString"] = sort_type;
            } else {
                sortConfig["occurrences"] = sort_type;
            }

            query.push({
                $sort: sortConfig
            });

            query.push({
                $skip: skip
            });

            query.push({
                $limit: limit
            });

            tickets.aggregate(query, function(e, res) {
                if (e) {
                    callback(e);
                } else {
                    result.data = res;
                    callback(null, result);
                }
            });
        }
    });
};

exports.getAllTeams = function(filtros, callback) {
    var type = filtros.type;

    var sort_type = type === "asc" ? 1 : -1;

    teams
        .find({})
        .sort({
            name: sort_type
        })
        .toArray(function(err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        });
};

exports.getAllCompetitions = function(filtros, callback) {
    var type = filtros.type;

    var sort_type = type === "asc" ? 1 : -1;

    competitions
        .find({})
        .sort({
            name: sort_type
        })
        .toArray(function(err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        });
};

exports.getAllSeasons = function(filtros, callback) {
    var type = filtros.type;

    var sort_type = type === "asc" ? 1 : -1;

    seasons
        .find({})
        .sort({
            name: sort_type
        })
        .toArray(function(err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        });
};

exports.addNewTeam = function(name, callback) {
    teams.insert(
        {
            name: name,
            value: name
        },
        {
            w: 1
        },
        function(e, res) {
            if (e) {
                callback(e);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.addNewCompetition = function(name, callback) {
    competitions.insert(
        {
            name: name,
            value: name
        },
        {
            w: 1
        },
        function(e, res) {
            if (e) {
                callback(e);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.addNewSeason = function(name, callback) {
    seasons.insert(
        {
            name: name,
            value: name
        },
        {
            w: 1
        },
        function(e, res) {
            if (e) {
                callback(e);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.getTeamByName = function(name, callback) {
    teams.findOne(
        {
            name: name
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.getCompetitionByName = function(name, callback) {
    competitions.findOne(
        {
            name: name
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.getSeasonByName = function(name, callback) {
    seasons.findOne(
        {
            name: name
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                res = res || {};
                callback(null, res);
            }
        }
    );
};

exports.deleteTeamByName = function(name, callback) {
    teams.remove(
        {
            name: name
        },
        function(e, res) {
            if (e || !res) {
                callback("team-not-deleted");
            } else {
                callback(null, res);
            }
        }
    );
};

exports.deleteTeamById = function(id, callback) {
    teams.remove(
        {
            _id: getObjectId(id)
        },
        function(e, res) {
            if (e || !res) {
                callback("team-not-deleted");
            } else {
                callback(null, res);
            }
        }
    );
};

exports.deleteCompetitionByName = function(name, callback) {
    competitions.remove(
        {
            name: name
        },
        function(e, res) {
            if (e || !res) {
                callback("competition-not-deleted");
            } else {
                callback(null, res);
            }
        }
    );
};

exports.deleteCompetitionById = function(id, callback) {
    competitions.remove(
        {
            _id: getObjectId(id)
        },
        function(e, res) {
            if (e || !res) {
                callback("competition-not-deleted");
            } else {
                callback(null, res);
            }
        }
    );
};

exports.deleteSeasonByName = function(name, callback) {
    seasons.remove(
        {
            name: name
        },
        function(e, res) {
            if (e || !res) {
                callback("season-not-deleted");
            } else {
                callback(null, res);
            }
        }
    );
};

exports.deleteSeasonById = function(id, callback) {
    seasons.remove(
        {
            _id: getObjectId(id)
        },
        function(e, res) {
            if (e || !res) {
                callback("season-not-deleted");
            } else {
                callback(null, res);
            }
        }
    );
};

exports.getTeamById = function(id, callback) {
    teams.findOne(
        {
            _id: getObjectId(id)
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.getCompetitionById = function(id, callback) {
    competitions.findOne(
        {
            _id: getObjectId(id)
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.getSeasonById = function(id, callback) {
    seasons.findOne(
        {
            _id: getObjectId(id)
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.editTeamById = function(id, name, callback) {
    teams.findOne(
        {
            _id: getObjectId(id)
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                res.name = name;

                teams.save(res, { safe: true }, function(err) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, res);
                    }
                });
            }
        }
    );
};

exports.editCompetitionById = function(id, name, callback) {
    competitions.findOne(
        {
            _id: getObjectId(id)
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                res.name = name;

                competitions.save(res, { safe: true }, function(err) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, res);
                    }
                });
            }
        }
    );
};

exports.editSeasonById = function(id, name, callback) {
    seasons.findOne(
        {
            _id: getObjectId(id)
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                res.name = name;

                seasons.save(res, { safe: true }, function(err) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, res);
                    }
                });
            }
        }
    );
};

exports.getEconomicBalanceBySeason = function(callback) {
    tickets.aggregate(
        {
            $group: {
                _id: "$temporada",
                invertido: {
                    $sum: "$precio"
                },
                ganado: {
                    $sum: "$premio"
                }
            }
        },
        function(err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        }
    );
};

exports.getTicketsGroupedByRow = function(filtros, callback) {
    var filters = {};

    if (filtros.competition) {
        filters["partidos.competicion"] = filtros.competition;
    }

    if (filtros.season) {
        filters["temporada"] = filtros.season;
    }

    if (filtros.localTeam) {
        filters["partidos.local"] = filtros.localTeam;
    }

    if (filtros.visitorTeam) {
        filters["partidos.visitante"] = filtros.visitorTeam;
    }

    var query = [];

    query.push({
        $unwind: "$partidos"
    });

    query.push({
        $match: filters
    });

    query.push({
        $group: {
            _id: "$partidos.fila",
            victoriasLocales: {
                $sum: {
                    $cond: [
                        {
                            $eq: ["$partidos.resultado", "1"]
                        },
                        1,
                        0
                    ]
                }
            },
            empates: {
                $sum: {
                    $cond: [
                        {
                            $eq: ["$partidos.resultado", "X"]
                        },
                        1,
                        0
                    ]
                }
            },
            victoriasVisitantes: {
                $sum: {
                    $cond: [
                        {
                            $eq: ["$partidos.resultado", "2"]
                        },
                        1,
                        0
                    ]
                }
            }
        }
    });

    query.push({
        $project: {
            _id: 0,
            fila: "$_id",
            victoriasLocales: 1,
            empates: 1,
            victoriasVisitantes: 1
        }
    });

    /*query.push({
        $sort: {
            fila: 1
        }
    });*/

    tickets.aggregate(query, function(err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};
