module.exports = function(app){

    var middlewares = require('../../middlewares');
    var ROL = require('../../roles');

    var PRI_DBM = require('../../modules/primitiva-data-base-manager');

    var filtrarInformacion = function(result){
        var json = JSON.parse(JSON.stringify(result));
        json = borrarPronosticos(json);
        json = borrarPrecio(json);
        json = borrarPremio(json);
        return json;
    };

    var borrarPronosticos = function(aux){

        var json = aux;

        if(json['apuestas'] != null){
            delete json['apuestas'];
        }

        return json;
    };

    var borrarPrecio = function(aux){
        var json = aux;

        if(json['precio'] != null){
            delete json['precio'];
        }

        return json;
    };

    var borrarPremio = function(aux){
        var json = aux;

        if(json['premio'] != null){
            delete json['premio'];
        }

        return json;
    };

    var primitiva_api_tickets = function(req, res){
        PRI_DBM.getAllTickets(function(err, result){
            if(err){
                res.status(400).send(err);
            }

            res.status(200).send(result);
        });
    };

    var primitiva_api_ticketsPorAnyo = function(req, res){
        var anyo = req.params.anyo;
        PRI_DBM.getTicketsByAnyo(anyo, function(err, result){
            if(err){
                res.status(400).send(err);
            }

            var finalRes = [];
            for(var i=0; i<result.length;i++){
                var json;
                if(req.session.user == null){
                    json = filtrarInformacion(result[i]);
                }else{
                    if(req.session.user.role == "privileged"){
                        json = result[i];
                    }else{
                        json = filtrarInformacion(result[i]);
                    }
                }
                finalRes.push(json);
            }
            res.status(200).send(finalRes);
        });
    };

    var primitiva_api_ticketPorAnyoYSorteo = function(req, res){
        var anyo = req.params.anyo;
        var sorteo = req.params.sorteo;

        PRI_DBM.getTicketsByAnyoAndRaffle(anyo, sorteo, function(err, result){
            if(err){
                res.status(400).send(err);
            }else{
                if(req.session.user == null){
                    var json = filtrarInformacion(result);
                }else{
                    if(req.session.user.role == "privileged"){
                        json = result;
                    }else{
                        var json = filtrarInformacion(result);
                    }
                }
                res.status(200).send(json);
            }
        });
    };

    var primitiva_api_nuevoTicket = function(req, res){
        var ticket = {};

        var anyo = req.param('anyo');
        var fecha = req.param('fecha');
        var sorteo = req.param('sorteo');
        var precio = req.param('precio');
        var premio = req.param('premio');
        var apuestas = req.param('apuestas');
        var resultado = req.param('resultado');

        ticket.anyo = anyo;
        ticket.fecha = fecha;
        ticket.sorteo = sorteo;
        ticket.precio = precio;
        ticket.premio = premio;
        ticket.apuestas = apuestas;
        ticket.resultado = resultado;

        PRI_DBM.addNewTicket(ticket, function(err, result){
            if(err){
                res.status(400).send(err);
            }

            res.status(200).send(result);
        });
    };

    var primitiva_api_editarTicket = function(req, res){
        var ticket = req.body;

        PRI_DBM.getTicketById(ticket._id, function(err, result){
            if(err){
                res.status(400).send(err);
            }else{
                if(result == null){
                    res.status(400).send('not-found');
                }

                PRI_DBM.editTicket(ticket, function(err, result){
                    if(err){
                        res.status(400).send(err);
                    }

                    res.status(200).send(result);
                });
            }
        });
    };

    var primitiva_api_borrarTicket = function(req, res){
        var id = req.params.id;

        PRI_DBM.getTicketById(id, function(err, result){
            if(err){
                res.status(400).send(err);
            }else if(result == null){
                res.status(400).send('not-found');
            }

            PRI_DBM.deleteTicketById(id, function(err2){
                if(err){
                    res.status(400).send(err2);
                }

                PRI_DBM.getAllTickets(function(err3, result3){
                    if(err){
                        res.status(400).send(err3);
                    }

                    res.status(200).send(result3);
                });
            });
        });
    };

    var primitiva_api_historicoDeAparicionesPorNumero = function(req, res){
        PRI_DBM.getOcurrencesByNumber(function(err, result){
            if(err){
                res.status(400).send(err);
            }

            var response = [];

            for(var i=0; i<result.length; i++){
                var json = {
                    numero: result[i]._id,
                    apariciones: result[i].apariciones
                };

                response.push(json);
            }

            res.status(200).send(JSON.stringify(response, null, 4));
        });
    };

    var primitiva_api_historicoDeAparicionesPorReintegro = function(req, res){
        PRI_DBM.getOcurrencesByReimbursement(function(err, result){
            if(err){
                res.status(400).send(err);
            }

            var response = [];

            for(var i=0; i<result.length; i++){
                var json = {
                    reintegro: result[i]._id,
                    apariciones: result[i].apariciones
                };

                response.push(json);
            }
            res.status(200).send(JSON.stringify(response, null, 4));
        });

    };

    var primitiva_api_historicoDeResultadosGlobales = function(req, res){
        PRI_DBM.getOcurrencesByResultWithoutReimbursement(function(err, tickets){
            if(err){
                res.status(400).send(err);
            }

            var response = [];

            for(var i=0; i<tickets.length; i++){
                var json = {};
                json.numeros = tickets[i]._id;
                json.apariciones = tickets[i].apariciones;
                response.push(json);
            }

            res.status(200).send(response);
        });
    };

    var primitiva_api_historicoDeResultadosGlobalesConReintegro = function(req, res){
        PRI_DBM.getOcurrencesByResultWithReimbursement(function(err, tickets){
            if(err){
                res.status(400).send(err);
            }

            var response = [];

            for(var i=0; i<tickets.length; i++){
                var json = {};
                json.numeros = tickets[i].resultado;
                json.reintegro = tickets[i].reintegro;
                json.apariciones = tickets[i].apariciones;
                response.push(json);
            }
            res.status(200).send(response);
        });
    };

    var primitiva_api_years = function(req, res){
        PRI_DBM.getAllYears(function(err, result){
            if(err){
                res.status(400).send(err);
            }

            res.status(200).send(result);
        });
    };

    var primitiva_api_year = function(req, res){
        var id = req.params.id;

        PRI_DBM.getYearById(id, function(err, result){
            if(err){
                res.status(400).send(err);
            }

            res.status(200).send(result);
        });
    };

    var primitiva_api_deleteYear = function(req, res){
        var id = req.params.id;

        PRI_DBM.deleteYearById(id, function(err){
            if(err){
                res.status(400).send(err);
            }

            PRI_DBM.getAllYears(function(err2, result2){
                if(err){
                    res.status(400).send(err2);
                }

                res.status(200).send(result2);
            });
        });
    };

    var primitiva_api_addNewYear = function(req, res){
        var year = {};
        var name = req.param('name');
        year.name = name;

        PRI_DBM.getYearByName(name, function(err, result){
            if(err){
                res.status(400).send(name);
            }else if(JSON.stringify(result) === "{}"){ // No existe aun
                PRI_DBM.addNewYear(year, function(err, result){
                    if(err){
                        res.status(400).send(err);
                    }

                    res.status(200).send(result);
                });
            }else{ // Ya hay uno con ese nombre
                res.status(400).send('year-already-exists');
            }
        });
    };

    var primitiva_api_editYear = function(req, res){
        var body = req.body;
        var id = req.param('_id');
        var year = {};
        year.name = body.name;

        PRI_DBM.getYearById(id, function(err, result){
            if(err){
                res.status(400).send(err);
            }else if(result == null){
                res.status(400).send('not-found');
            }

            PRI_DBM.editYear(year, function(err, result){
                if(err){
                    res.status(400).send(err);
                }

                res.status(200).send(result);
            });
        });
    };

    var primitiva_api_ticketPorId = function(req, res){
        var id = req.params.id;

        PRI_DBM.getTicketById(id, function(err, result){
            if(err){
                res.status(400).send(err);
            }else{
                if(req.session.user == null){
                    var json = filtrarInformacion(result);
                }else{
                    if(req.session.user.role == "privileged" || req.session.user.role == "admin"){
                        json = result;
                    }else{
                        var json = filtrarInformacion(result);
                    }
                }
                res.status(200).send(json);
            }
        });
    };

    /* Tickets de Primitiva */
    app.get('/api/primitiva/tickets', primitiva_api_tickets);
    app.get('/api/primitiva/tickets/anyo/:anyo', primitiva_api_ticketsPorAnyo);
    app.get('/api/primitiva/tickets/anyo/:anyo/sorteo/:sorteo', primitiva_api_ticketPorAnyoYSorteo);
    app.get('/api/primitiva/tickets/:id', primitiva_api_ticketPorId);
    app.post('/api/primitiva/tickets', middlewares.isLogged_api, middlewares.isAuthorized_api([ROL.ADMIN]), primitiva_api_nuevoTicket);
    app.put('/api/primitiva/tickets', middlewares.isLogged_api, middlewares.isAuthorized_api([ROL.ADMIN]), primitiva_api_editarTicket);
    app.delete('/api/primitiva/tickets/:id', middlewares.isLogged_api, middlewares.isAuthorized_api([ROL.ADMIN]), primitiva_api_borrarTicket);

    /* Anyos */
    app.get('/api/primitiva/years', primitiva_api_years);
    app.get('/api/primitiva/years/:id', primitiva_api_year);
    app.post('/api/primitiva/years', middlewares.isLogged_api, middlewares.isAuthorized_api([ROL.ADMIN]), primitiva_api_addNewYear);
    app.put('/api/primitiva/years', middlewares.isLogged_api, middlewares.isAuthorized_api([ROL.ADMIN]), primitiva_api_editYear);
    app.delete('/api/primitiva/years/:id', middlewares.isLogged_api, middlewares.isAuthorized_api([ROL.ADMIN]), primitiva_api_deleteYear);

    /* Consultas: Estandar */
    app.get('/api/primitiva/historical/aparicionesPorResultado', primitiva_api_historicoDeResultadosGlobales);
    app.get('/api/primitiva/historical/aparicionesPorResultadoConReintegro', primitiva_api_historicoDeResultadosGlobalesConReintegro);
    app.get('/api/primitiva/historical/aparicionesPorNumero', primitiva_api_historicoDeAparicionesPorNumero);
    app.get('/api/primitiva/historical/aparicionesPorReintegro', primitiva_api_historicoDeAparicionesPorReintegro);
};