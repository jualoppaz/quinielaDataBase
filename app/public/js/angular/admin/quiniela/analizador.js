var app = angular.module('dashboard');

app.controller('AnalizadorController', Controller);

Controller.$inject = ['$scope', '$q', '$window', 'quiniela', '$sce'];

function Controller($scope, $q, $window, quiniela, $sce) {

    quiniela
        .getAllTeams()
        .then(function (data) {
            $scope.equipos = data;
        })
        .catch(function (err) {
            console.log(err);
        });

    quiniela
        .getAllCompetitions()
        .then(function (data) {
            $scope.competiciones = data;
        })
        .catch(function (err) {
            console.log(err);
        });

    $scope.sumaDeVictoriasLocalesComoLocal = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasLocal.length; i++) {
            suma = suma + $scope.filasLocal[i].victoriasLocales || 0;
        }
        return suma;
    };

    $scope.sumaDeEmpatesComoLocal = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasLocal.length; i++) {
            suma = suma + $scope.filasLocal[i].empates || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasVisitantesComoLocal = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasLocal.length; i++) {
            suma = suma + $scope.filasLocal[i].victoriasVisitantes || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasLocalesComoLocalEnCompeticion = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasLocalYCompeticion.length; i++) {
            suma = suma + $scope.filasLocalYCompeticion[i].victoriasLocales || 0;
        }
        return suma;
    };

    $scope.sumaDeEmpatesComoLocalEnCompeticion = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasLocalYCompeticion.length; i++) {
            suma = suma + $scope.filasLocalYCompeticion[i].empates || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasVisitantesComoLocalEnCompeticion = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasLocalYCompeticion.length; i++) {
            suma = suma + $scope.filasLocalYCompeticion[i].victoriasVisitantes || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasLocalesComoVisitante = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasVisitante.length; i++) {
            suma = suma + $scope.filasVisitante[i].victoriasLocales || 0;
        }
        return suma;
    };

    $scope.sumaDeEmpatesComoVisitante = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasVisitante.length; i++) {
            suma = suma + $scope.filasVisitante[i].empates || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasVisitantesComoVisitante = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasVisitante.length; i++) {
            suma = suma + $scope.filasVisitante[i].victoriasVisitantes || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasLocalesComoVisitanteEnCompeticion = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasVisitanteYCompeticion.length; i++) {
            suma = suma + $scope.filasVisitanteYCompeticion[i].victoriasLocales || 0;
        }
        return suma;
    };

    $scope.sumaDeEmpatesComoVisitanteEnCompeticion = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasVisitanteYCompeticion.length; i++) {
            suma = suma + $scope.filasVisitanteYCompeticion[i].empates || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasVisitantesComoVisitanteEnCompeticion = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasVisitanteYCompeticion.length; i++) {
            suma = suma + $scope.filasVisitanteYCompeticion[i].victoriasVisitantes || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasLocalesEnPartido = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasPartido.length; i++) {
            suma = suma + $scope.filasPartido[i].victoriasLocales || 0;
        }
        return suma;
    };

    $scope.sumaDeEmpatesEnPartido = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasPartido.length; i++) {
            suma = suma + $scope.filasPartido[i].empates || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasVisitantesEnPartido = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasPartido.length; i++) {
            suma = suma + $scope.filasPartido[i].victoriasVisitantes || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasLocalesEnPartidoYCompeticion = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasPartidoYCompeticion.length; i++) {
            suma = suma + $scope.filasPartidoYCompeticion[i].victoriasLocales || 0;
        }
        return suma;
    };

    $scope.sumaDeEmpatesEnPartidoYCompeticion = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasPartidoYCompeticion.length; i++) {
            suma = suma + $scope.filasPartidoYCompeticion[i].empates || 0;
        }
        return suma;
    };

    $scope.sumaDeVictoriasVisitantesEnPartidoYCompeticion = function () {
        var suma = 0;
        for (var i = 0; i < $scope.filasPartidoYCompeticion.length; i++) {
            suma = suma + $scope.filasPartidoYCompeticion[i].victoriasVisitantes || 0;
        }
        return suma;
    };

    $scope.validateForm = function (form) {
        var equipoLocal = form.equipoLocal;
        var equipoVisitante = form.equipoVisitante;
        var fila = parseInt(form.fila);
        var competicion = form.competicion;

        if (equipoLocal == "" || equipoLocal == null) return 'Debes introducir el equipo local';
        if (equipoVisitante == "" || equipoVisitante == null) return 'Debes introducir el equipo visitante';
        if (isNaN(fila) || fila == "" || fila == null || fila < 0 || fila > 15) return 'Debes introducir una fila válida';
        if (competicion == "" || competicion == null) return 'Debes introducir la competición';
        return false;
    };

    $scope.analizar = function () {
        $scope.consultando = true;
        $scope.reset();

        var competicion = $scope.form.competicion;
        var equipoLocal = $scope.form.equipoLocal;
        var equipoVisitante = $scope.form.equipoVisitante;

        var validationResult = $scope.validateForm($scope.form);

        if (validationResult) {
            alert(validationResult);
            $scope.consultando = false;
            return;
        }

        $q.all([
            quiniela
                .getHistorical({
                    local_team: equipoLocal,
                }),
            quiniela
                .getHistorical({
                    local_team: equipoLocal,
                    competition: competicion,
                }),
            quiniela
                .getHistorical({
                    visitor_team: equipoVisitante,
                }),
            quiniela
                .getHistorical({
                    visitor_team: equipoVisitante,
                    competition: competicion,
                }),
            quiniela
                .getHistorical({
                    local_team: equipoLocal,
                    visitor_team: equipoVisitante,
                }),
            quiniela
                .getHistorical({
                    local_team: equipoLocal,
                    visitor_team: equipoVisitante,
                    competition: competicion,
                }),
        ])
            .then(function (data) {
                $scope.realizarAnalisis(data);
                $scope.mostrar = true;
            })
            .catch(function (err) {
                $scope.mostrar = false;
            })
            .finally(function () {
                $scope.consultando = false;
            });
    };

    $scope.realizarAnalisis = function (data) {
        $scope.filasLocal = data[0].filas;
        $scope.filasLocalYCompeticion = data[1].filas;

        $scope.filasVisitante = data[2].filas;
        $scope.filasVisitanteYCompeticion = data[3].filas;

        $scope.filasPartido = data[4].filas;
        $scope.filasPartidoYCompeticion = data[5].filas;

        // Equipo local
        $scope.realizarAnalisisEquipoLocal();
        $scope.realizarAnalisisEquipoLocalYFila();

        $scope.realizarAnalisisEquipoLocalYCompeticion();
        $scope.realizarAnalisisEquipoLocalCompeticionYFila();

        // Equipo visitante
        $scope.realizarAnalisisEquipoVisitante();
        $scope.realizarAnalisisEquipoVisitanteYFila();

        $scope.realizarAnalisisEquipoVisitanteYCompeticion();
        $scope.realizarAnalisisEquipoVisitanteCompeticionYFila();

        // Partido
        $scope.realizarAnalisisPartido();
        $scope.realizarAnalisisPartidoYFila();

        $scope.realizarAnalisisPartidoYCompeticion();
        $scope.realizarAnalisisPartidoCompeticionYFila();
    };

    $scope.realizarAnalisisEquipoLocal = function () {
        var message = quiniela.ANALYZER_MESSAGES.LOCAL.HISTORICAL;

        var sumaDeVictoriasLocalesComoLocal = $scope.sumaDeVictoriasLocalesComoLocal();
        var sumaDeEmpatesComoLocal = $scope.sumaDeEmpatesComoLocal();
        var sumaDeVictoriasVisitantesComoLocal = $scope.sumaDeVictoriasVisitantesComoLocal();

        var totalPartidosComoLocal =
            sumaDeVictoriasLocalesComoLocal + sumaDeEmpatesComoLocal +
            sumaDeVictoriasVisitantesComoLocal;

        var porcentajeDeVictoriasLocalesComoLocal = sumaDeVictoriasLocalesComoLocal * 100 / totalPartidosComoLocal;
        var porcentajeDeEmpatesComoLocal = sumaDeEmpatesComoLocal * 100 / totalPartidosComoLocal;
        var porcentajeDeVictoriasVisitantesComoLocal = sumaDeVictoriasVisitantesComoLocal * 100 / totalPartidosComoLocal;

        porcentajeDeVictoriasLocalesComoLocal = Math.round(porcentajeDeVictoriasLocalesComoLocal * 100) / 100;
        porcentajeDeEmpatesComoLocal = Math.round(porcentajeDeEmpatesComoLocal * 100) / 100;
        porcentajeDeVictoriasVisitantesComoLocal = Math.round(porcentajeDeVictoriasVisitantesComoLocal * 100) / 100;

        message = $scope.getCustomMessage(message, {
            "{localTeam}": $scope.form.equipoLocal,
            '{numWins}': sumaDeVictoriasLocalesComoLocal,
            '{numDraws}': sumaDeEmpatesComoLocal,
            '{numLoses}': sumaDeVictoriasVisitantesComoLocal,
            '{perWins}': porcentajeDeVictoriasLocalesComoLocal,
            '{perDraws}': porcentajeDeEmpatesComoLocal,
            '{perLoses}': porcentajeDeVictoriasVisitantesComoLocal,
        });

        $scope.localTeamMessages.push(message);
    };

    $scope.realizarAnalisisEquipoLocalYFila = function () {
        var message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.NO_DATA;

        var fila = $scope.filasLocal.find(function (row) {
            return row.fila === parseInt($scope.form.fila);
        }) || {};

        var sumaDeVictoriasLocalesComoLocalEnFila = fila.victoriasLocales;
        var sumaDeEmpatesComoLocalEnFila = fila.empates;
        var sumaDeVictoriasVisitantesComoLocalEnFila = fila.victoriasVisitantes;

        var totalPartidosComoLocalEnFila =
            sumaDeVictoriasLocalesComoLocalEnFila + sumaDeEmpatesComoLocalEnFila +
            sumaDeVictoriasVisitantesComoLocalEnFila;

        var porcentajeDeVictoriasLocalesComoLocalEnFila = sumaDeVictoriasLocalesComoLocalEnFila * 100 / totalPartidosComoLocalEnFila;
        var porcentajeDeEmpatesComoLocalEnFila = sumaDeEmpatesComoLocalEnFila * 100 / totalPartidosComoLocalEnFila;
        var porcentajeDeVictoriasVisitantesComoLocalEnFila = sumaDeVictoriasVisitantesComoLocalEnFila * 100 / totalPartidosComoLocalEnFila;

        porcentajeDeVictoriasLocalesComoLocalEnFila = Math.round(porcentajeDeVictoriasLocalesComoLocalEnFila * 100) / 100;
        porcentajeDeEmpatesComoLocalEnFila = Math.round(porcentajeDeEmpatesComoLocalEnFila * 100) / 100;
        porcentajeDeVictoriasVisitantesComoLocalEnFila = Math.round(porcentajeDeVictoriasVisitantesComoLocalEnFila * 100) / 100;

        if (!fila.victoriasLocales && !fila.empates && !fila.victoriasVisitantes) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.ONLY_WINS;

        if (fila.victoriasLocales > 0 && fila.empates === 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.ONLY_DRAWS;

        if (fila.victoriasLocales === 0 && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.ONLY_LOSES;

        if (fila.victoriasLocales === 0 && fila.empates === 0 && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.MORE_WINS_THAN_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.SAME;

        if (fila.victoriasLocales === fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.MORE_DRAWS_THAN_WINS;

        if (fila.victoriasLocales > 0 && fila.victoriasLocales < fila.empates && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.MORE_WINS_THAN_LOSES;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.SAME;

        if (fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.MORE_LOSES_THAN_WINS;

        if (fila.victoriasLocales < fila.victoriasVisitantes && fila.victoriasLocales > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.MORE_DRAWS_THAN_LOSES;

        if (fila.victoriasLocales === 0 && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.SAME;

        if (fila.victoriasLocales === 0 && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.MORE_LOSES_THAN_DRAWS;

        if (fila.victoriasLocales === 0 && fila.empates < fila.victoriasVisitantes && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.MORE_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.SAME;

        if (fila.victoriasLocales > fila.empates && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.MORE_LOSES;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.MORE_WINS;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.SAME;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.MORE_LOSES;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.MORE_WINS;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.SAME;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales === fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.MORE_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.SAME_WINS_AND_DRAWS;

        if (fila.victoriasLocales === fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.SAME_WINS_AND_LOSES;

        if (fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.SAME_DRAWS_AND_LOSES;

        if (fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.ROW.WINS_DRAWS_AND_LOSES.SAME;

        if (fila.victoriasLocales === fila.empates && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnFila,
            });

            $scope.localTeamMessages.push(message);
        }
    };

    $scope.realizarAnalisisEquipoLocalYCompeticion = function () {
        var message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.HISTORICAL;

        var sumaDeVictoriasLocalesComoLocalEnCompeticion = $scope.sumaDeVictoriasLocalesComoLocalEnCompeticion();
        var sumaDeEmpatesComoLocalEnCompeticion = $scope.sumaDeEmpatesComoLocalEnCompeticion();
        var sumaDeVictoriasVisitantesComoLocalEnCompeticion = $scope.sumaDeVictoriasVisitantesComoLocalEnCompeticion();

        var totalPartidosComoLocalEnCompeticion =
            sumaDeVictoriasLocalesComoLocalEnCompeticion + sumaDeEmpatesComoLocalEnCompeticion +
            sumaDeVictoriasVisitantesComoLocalEnCompeticion;

        var porcentajeDeVictoriasLocalesComoLocalEnCompeticion = sumaDeVictoriasLocalesComoLocalEnCompeticion * 100 / totalPartidosComoLocalEnCompeticion;
        var porcentajeDeEmpatesComoLocalEnCompeticion = sumaDeEmpatesComoLocalEnCompeticion * 100 / totalPartidosComoLocalEnCompeticion;
        var porcentajeDeVictoriasVisitantesComoLocalEnCompeticion = sumaDeVictoriasVisitantesComoLocalEnCompeticion * 100 / totalPartidosComoLocalEnCompeticion;

        porcentajeDeVictoriasLocalesComoLocalEnCompeticion = Math.round(porcentajeDeVictoriasLocalesComoLocalEnCompeticion * 100) / 100;
        porcentajeDeEmpatesComoLocalEnCompeticion = Math.round(porcentajeDeEmpatesComoLocalEnCompeticion * 100) / 100;
        porcentajeDeVictoriasVisitantesComoLocalEnCompeticion = Math.round(porcentajeDeVictoriasVisitantesComoLocalEnCompeticion * 100) / 100;

        message = $scope.getCustomMessage(message, {
            "{localTeam}": $scope.form.equipoLocal,
            "{competition}": $scope.form.competicion,
            '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticion,
            '{numDraws}': sumaDeEmpatesComoLocalEnCompeticion,
            '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticion,
            '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticion,
            '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticion,
            '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticion,
        });

        $scope.localTeamMessages.push(message);
    };

    $scope.realizarAnalisisEquipoLocalCompeticionYFila = function () {
        var message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.NO_DATA;

        var fila = $scope.filasLocalYCompeticion.find(function (row) {
            return row.fila === parseInt($scope.form.fila);
        }) || {};

        var sumaDeVictoriasLocalesComoLocalEnCompeticionYFila = fila.victoriasLocales;
        var sumaDeEmpatesComoLocalEnCompeticionYFila = fila.empates;
        var sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila = fila.victoriasVisitantes;

        var totalPartidosComoLocalEnCompeticionYFila =
            sumaDeVictoriasLocalesComoLocalEnCompeticionYFila + sumaDeEmpatesComoLocalEnCompeticionYFila +
            sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila;

        var porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila = sumaDeVictoriasLocalesComoLocalEnCompeticionYFila * 100 / totalPartidosComoLocalEnCompeticionYFila;
        var porcentajeDeEmpatesComoLocalEnCompeticionYFila = sumaDeEmpatesComoLocalEnCompeticionYFila * 100 / totalPartidosComoLocalEnCompeticionYFila;
        var porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila = sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila * 100 / totalPartidosComoLocalEnCompeticionYFila;

        porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila = Math.round(porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila * 100) / 100;
        porcentajeDeEmpatesComoLocalEnCompeticionYFila = Math.round(porcentajeDeEmpatesComoLocalEnCompeticionYFila * 100) / 100;
        porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila = Math.round(porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila * 100) / 100;

        if (!fila.victoriasLocales && !fila.empates && !fila.victoriasVisitantes) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.ONLY_WINS;

        if (fila.victoriasLocales > 0 && fila.empates === 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.ONLY_DRAWS;

        if (fila.victoriasLocales === 0 && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.ONLY_LOSES;

        if (fila.victoriasLocales === 0 && fila.empates === 0 && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.MORE_WINS_THAN_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.SAME;

        if (fila.victoriasLocales === fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.MORE_DRAWS_THAN_WINS;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.MORE_WINS_THAN_LOSES;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.SAME;

        if (fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.MORE_LOSES_THAN_WINS;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.MORE_DRAWS_THAN_LOSES;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.SAME;

        if (fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.MORE_LOSES_THAN_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.MORE_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.SAME;

        if (fila.victoriasLocales > fila.empates && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.MORE_LOSES;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.MORE_WINS;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.SAME;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.MORE_LOSES;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.MORE_WINS;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.SAME;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales === fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.MORE_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.SAME_WINS_AND_DRAWS;

        if (fila.victoriasLocales === fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.SAME_WINS_AND_LOSES;

        if (fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.SAME_DRAWS_AND_LOSES;

        if (fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.LOCAL.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.SAME;

        if (fila.victoriasLocales === fila.empates && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoLocalEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasVisitantesComoLocalEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasLocalesComoLocalEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoLocalEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasVisitantesComoLocalEnCompeticionYFila,
            });

            $scope.localTeamMessages.push(message);
        }
    };

    $scope.realizarAnalisisEquipoVisitante = function () {
        var message = quiniela.ANALYZER_MESSAGES.VISITOR.HISTORICAL;

        var sumaDeVictoriasLocalesComoVisitante = $scope.sumaDeVictoriasLocalesComoVisitante();
        var sumaDeEmpatesComoVisitante = $scope.sumaDeEmpatesComoVisitante();
        var sumaDeVictoriasVisitantesComoVisitante = $scope.sumaDeVictoriasVisitantesComoVisitante();

        var totalPartidosComoVisitante =
            sumaDeVictoriasLocalesComoVisitante + sumaDeEmpatesComoVisitante +
            sumaDeVictoriasVisitantesComoVisitante;

        var porcentajeDeVictoriasLocalesComoVisitante = sumaDeVictoriasLocalesComoVisitante * 100 / totalPartidosComoVisitante;
        var porcentajeDeEmpatesComoVisitante = sumaDeEmpatesComoVisitante * 100 / totalPartidosComoVisitante;
        var porcentajeDeVictoriasVisitantesComoVisitante = sumaDeVictoriasVisitantesComoVisitante * 100 / totalPartidosComoVisitante;

        porcentajeDeVictoriasLocalesComoVisitante = Math.round(porcentajeDeVictoriasLocalesComoVisitante * 100) / 100;
        porcentajeDeEmpatesComoVisitante = Math.round(porcentajeDeEmpatesComoVisitante * 100) / 100;
        porcentajeDeVictoriasVisitantesComoVisitante = Math.round(porcentajeDeVictoriasVisitantesComoVisitante * 100) / 100;

        message = $scope.getCustomMessage(message, {
            "{visitorTeam}": $scope.form.equipoVisitante,
            '{numWins}': sumaDeVictoriasVisitantesComoVisitante,
            '{numDraws}': sumaDeEmpatesComoVisitante,
            '{numLoses}': sumaDeVictoriasLocalesComoVisitante,
            '{perWins}': porcentajeDeVictoriasVisitantesComoVisitante,
            '{perDraws}': porcentajeDeEmpatesComoVisitante,
            '{perLoses}': porcentajeDeVictoriasLocalesComoVisitante,
        });

        $scope.visitorTeamMessages.push(message);
    };

    $scope.realizarAnalisisEquipoVisitanteYFila = function () {
        var message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.NO_DATA;

        var fila = $scope.filasVisitante.find(function (row) {
            return row.fila === parseInt($scope.form.fila);
        }) || {};

        var sumaDeVictoriasLocalesComoVisitanteEnFila = fila.victoriasLocales;
        var sumaDeEmpatesComoVisitanteEnFila = fila.empates;
        var sumaDeVictoriasVisitantesComoVisitanteEnFila = fila.victoriasVisitantes;

        var totalPartidosComoVisitanteEnFila =
            sumaDeVictoriasLocalesComoVisitanteEnFila + sumaDeEmpatesComoVisitanteEnFila +
            sumaDeVictoriasVisitantesComoVisitanteEnFila;

        var porcentajeDeVictoriasLocalesComoVisitanteEnFila = sumaDeVictoriasLocalesComoVisitanteEnFila * 100 / totalPartidosComoVisitanteEnFila;
        var porcentajeDeEmpatesComoVisitanteEnFila = sumaDeEmpatesComoVisitanteEnFila * 100 / totalPartidosComoVisitanteEnFila;
        var porcentajeDeVictoriasVisitantesComoVisitanteEnFila = sumaDeVictoriasVisitantesComoVisitanteEnFila * 100 / totalPartidosComoVisitanteEnFila;

        porcentajeDeVictoriasLocalesComoVisitanteEnFila = Math.round(porcentajeDeVictoriasLocalesComoVisitanteEnFila * 100) / 100;
        porcentajeDeEmpatesComoVisitanteEnFila = Math.round(porcentajeDeEmpatesComoVisitanteEnFila * 100) / 100;
        porcentajeDeVictoriasVisitantesComoVisitanteEnFila = Math.round(porcentajeDeVictoriasVisitantesComoVisitanteEnFila * 100) / 100;

        if (!fila.victoriasLocales && !fila.empates && !fila.victoriasVisitantes) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.ONLY_WINS;

        if (fila.victoriasVisitantes > 0 && fila.empates === 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.ONLY_DRAWS;

        if (fila.victoriasVisitantes === 0 && fila.empates > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.ONLY_LOSES;

        if (fila.victoriasVisitantes === 0 && fila.empates === 0 && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.MORE_WINS_THAN_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.SAME;

        if (fila.victoriasVisitantes === fila.empates && fila.empates > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.MORE_DRAWS_THAN_WINS;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.MORE_WINS_THAN_LOSES;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.SAME;

        if (fila.victoriasVisitantes === fila.victoriasLocales && fila.victoriasLocales > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.MORE_LOSES_THAN_WINS;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.MORE_DRAWS_THAN_LOSES;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.SAME;

        if (fila.empates === fila.victoriasLocales && fila.victoriasLocales > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.MORE_LOSES_THAN_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.MORE_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.SAME;

        if (fila.victoriasVisitantes > fila.empates && fila.empates === fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.MORE_LOSES;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.MORE_WINS;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.SAME;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes === fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.MORE_LOSES;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.MORE_WINS;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.SAME;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes === fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.MORE_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.SAME_WINS_AND_DRAWS;

        if (fila.victoriasVisitantes === fila.empates && fila.empates > fila.victoriasLocales && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.SAME_WINS_AND_LOSES;

        if (fila.victoriasVisitantes === fila.victoriasLocales && fila.victoriasLocales > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.SAME_DRAWS_AND_LOSES;

        if (fila.empates === fila.victoriasLocales && fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.ROW.WINS_DRAWS_AND_LOSES.SAME;

        if (fila.victoriasVisitantes === fila.empates && fila.empates === fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnFila,
            });

            $scope.visitorTeamMessages.push(message);
        }
    };

    $scope.realizarAnalisisEquipoVisitanteYCompeticion = function () {
        var message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.HISTORICAL;

        var sumaDeVictoriasLocalesComoVisitanteEnCompeticion = $scope.sumaDeVictoriasLocalesComoVisitanteEnCompeticion();
        var sumaDeEmpatesComoVisitanteEnCompeticion = $scope.sumaDeEmpatesComoVisitanteEnCompeticion();
        var sumaDeVictoriasVisitantesComoVisitanteEnCompeticion = $scope.sumaDeVictoriasVisitantesComoVisitanteEnCompeticion();

        var totalPartidosComoVisitanteEnCompeticion =
            sumaDeVictoriasLocalesComoVisitanteEnCompeticion + sumaDeEmpatesComoVisitanteEnCompeticion +
            sumaDeVictoriasVisitantesComoVisitanteEnCompeticion;

        var porcentajeDeVictoriasLocalesComoVisitanteEnCompeticion = sumaDeVictoriasLocalesComoVisitanteEnCompeticion * 100 / totalPartidosComoVisitanteEnCompeticion;
        var porcentajeDeEmpatesComoVisitanteEnCompeticion = sumaDeEmpatesComoVisitanteEnCompeticion * 100 / totalPartidosComoVisitanteEnCompeticion;
        var porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticion = sumaDeVictoriasVisitantesComoVisitanteEnCompeticion * 100 / totalPartidosComoVisitanteEnCompeticion;

        porcentajeDeVictoriasLocalesComoVisitanteEnCompeticion = Math.round(porcentajeDeVictoriasLocalesComoVisitanteEnCompeticion * 100) / 100;
        porcentajeDeEmpatesComoVisitanteEnCompeticion = Math.round(porcentajeDeEmpatesComoVisitanteEnCompeticion * 100) / 100;
        porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticion = Math.round(porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticion * 100) / 100;

        message = $scope.getCustomMessage(message, {
            "{visitorTeam}": $scope.form.equipoVisitante,
            "{competition}": $scope.form.competicion,
            '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticion,
            '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticion,
            '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticion,
            '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticion,
            '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticion,
            '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticion,
        });

        $scope.visitorTeamMessages.push(message);
    };

    $scope.realizarAnalisisEquipoVisitanteCompeticionYFila = function () {
        var message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.NO_DATA;

        var fila = $scope.filasVisitanteYCompeticion.find(function (row) {
            return row.fila === parseInt($scope.form.fila);
        }) || {};

        var sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila = fila.victoriasLocales;
        var sumaDeEmpatesComoVisitanteEnCompeticionYFila = fila.empates;
        var sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila = fila.victoriasVisitantes;

        var totalPartidosComoVisitanteEnCompeticionYFila =
            sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila + sumaDeEmpatesComoVisitanteEnCompeticionYFila +
            sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila;

        var porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila = sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila * 100 / totalPartidosComoVisitanteEnCompeticionYFila;
        var porcentajeDeEmpatesComoVisitanteEnCompeticionYFila = sumaDeEmpatesComoVisitanteEnCompeticionYFila * 100 / totalPartidosComoVisitanteEnCompeticionYFila;
        var porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila = sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila * 100 / totalPartidosComoVisitanteEnCompeticionYFila;

        porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila = Math.round(porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila * 100) / 100;
        porcentajeDeEmpatesComoVisitanteEnCompeticionYFila = Math.round(porcentajeDeEmpatesComoVisitanteEnCompeticionYFila * 100) / 100;
        porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila = Math.round(porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila * 100) / 100;

        if (!fila.victoriasVisitantes && !fila.empates && !fila.victoriasLocales) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.ONLY_WINS;

        if (fila.victoriasVisitantes > 0 && fila.empates === 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.ONLY_DRAWS;

        if (fila.victoriasVisitantes === 0 && fila.empates > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.ONLY_LOSES;

        if (fila.victoriasVisitantes === 0 && fila.empates === 0 && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.MORE_WINS_THAN_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.SAME;

        if (fila.victoriasVisitantes === fila.empates && fila.empates > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_AND_DRAWS_BUT_NO_LOSES.MORE_DRAWS_THAN_WINS;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.MORE_WINS_THAN_LOSES;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.SAME;

        if (fila.victoriasVisitantes === fila.victoriasLocales && fila.victoriasLocales > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_AND_LOSES_BUT_NO_DRAWS.MORE_LOSES_THAN_WINS;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.MORE_DRAWS_THAN_LOSES;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.SAME;

        if (fila.empates === fila.victoriasLocales && fila.victoriasLocales > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.DRAWS_AND_LOSES_BUT_NO_WINS.MORE_LOSES_THAN_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.MORE_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.SAME;

        if (fila.victoriasVisitantes > fila.empates && fila.empates === fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_WINS.MORE_LOSES;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.MORE_WINS;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.SAME;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_DRAWS.MORE_LOSES;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.MORE_WINS;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.SAME;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes === fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.MORE_LOSES.MORE_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.SAME_WINS_AND_DRAWS;

        if (fila.victoriasVisitantes === fila.empates && fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.SAME_WINS_AND_LOSES;

        if (fila.victoriasVisitantes === fila.victoriasLocales && fila.victoriasLocales > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.SAME_DRAWS_AND_LOSES;

        if (fila.empates === fila.victoriasLocales && fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.VISITOR.COMPETITION.ROW.WINS_DRAWS_AND_LOSES.SAME;

        if (fila.victoriasVisitantes === fila.empates && fila.empates === fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWins}': sumaDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{numDraws}': sumaDeEmpatesComoVisitanteEnCompeticionYFila,
                '{numLoses}': sumaDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
                '{perWins}': porcentajeDeVictoriasVisitantesComoVisitanteEnCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesComoVisitanteEnCompeticionYFila,
                '{perLoses}': porcentajeDeVictoriasLocalesComoVisitanteEnCompeticionYFila,
            });

            $scope.visitorTeamMessages.push(message);
        }
    };

    $scope.realizarAnalisisPartido = function () {
        var message = quiniela.ANALYZER_MESSAGES.MATCH.HISTORICAL;

        var sumaDeVictoriasLocalesEnPartido = $scope.sumaDeVictoriasLocalesEnPartido();
        var sumaDeEmpatesEnPartido = $scope.sumaDeEmpatesEnPartido();
        var sumaDeVictoriasVisitantesEnPartido = $scope.sumaDeVictoriasVisitantesEnPartido();

        var totalPartidos =
            sumaDeVictoriasLocalesEnPartido + sumaDeEmpatesEnPartido +
            sumaDeVictoriasVisitantesEnPartido;

        var porcentajeDeVictoriasLocalesEnPartido = sumaDeVictoriasLocalesEnPartido * 100 / totalPartidos;
        var porcentajeDeEmpatesEnPartido = sumaDeEmpatesEnPartido * 100 / totalPartidos;
        var porcentajeDeVictoriasVisitantesEnPartido = sumaDeVictoriasVisitantesEnPartido * 100 / totalPartidos;

        porcentajeDeVictoriasLocalesEnPartido = Math.round(porcentajeDeVictoriasLocalesEnPartido * 100) / 100;
        porcentajeDeEmpatesEnPartido = Math.round(porcentajeDeEmpatesEnPartido * 100) / 100;
        porcentajeDeVictoriasVisitantesEnPartido = Math.round(porcentajeDeVictoriasVisitantesEnPartido * 100) / 100;

        message = $scope.getCustomMessage(message, {
            "{localTeam}": $scope.form.equipoLocal,
            "{visitorTeam}": $scope.form.equipoVisitante,
            '{numWinsLocal}': sumaDeVictoriasLocalesEnPartido,
            '{numDraws}': sumaDeEmpatesEnPartido,
            '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartido,
            '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartido,
            '{perDraws}': porcentajeDeEmpatesEnPartido,
            '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartido,
        });

        $scope.matchMessages.push(message);
    };

    $scope.realizarAnalisisPartidoYFila = function () {
        var message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.NO_DATA;

        var fila = $scope.filasPartido.find(function (row) {
            return row.fila === parseInt($scope.form.fila);
        }) || {};

        var sumaDeVictoriasLocalesEnPartidoYFila = fila.victoriasLocales;
        var sumaDeEmpatesEnPartidoYFila = fila.empates;
        var sumaDeVictoriasVisitantesEnPartidoYFila = fila.victoriasVisitantes;

        var totalPartidosEnPartidoYFila =
            sumaDeVictoriasLocalesEnPartidoYFila + sumaDeEmpatesEnPartidoYFila +
            sumaDeVictoriasVisitantesEnPartidoYFila;

        var porcentajeDeVictoriasLocalesEnPartidoYFila = sumaDeVictoriasLocalesEnPartidoYFila * 100 / totalPartidosEnPartidoYFila;
        var porcentajeDeEmpatesEnPartidoYFila = sumaDeEmpatesEnPartidoYFila * 100 / totalPartidosEnPartidoYFila;
        var porcentajeDeVictoriasVisitantesEnPartidoYFila = sumaDeVictoriasVisitantesEnPartidoYFila * 100 / totalPartidosEnPartidoYFila;

        porcentajeDeVictoriasLocalesEnPartidoYFila = Math.round(porcentajeDeVictoriasLocalesEnPartidoYFila * 100) / 100;
        porcentajeDeEmpatesEnPartidoYFila = Math.round(porcentajeDeEmpatesEnPartidoYFila * 100) / 100;
        porcentajeDeVictoriasVisitantesEnPartidoYFila = Math.round(porcentajeDeVictoriasVisitantesEnPartidoYFila * 100) / 100;

        if (!fila.victoriasLocales && !fila.empates && !fila.victoriasVisitantes) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.ONLY_LOCAL_WINS;

        if (fila.victoriasLocales > 0 && fila.empates === 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.ONLY_DRAWS;

        if (fila.victoriasLocales === 0 && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.ONLY_VISITOR_WINS;

        if (fila.victoriasLocales === 0 && fila.empates === 0 && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_AND_DRAWS_BUT_NO_VISITOR_WINS.MORE_LOCAL_WINS_THAN_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_AND_DRAWS_BUT_NO_VISITOR_WINS.SAME;

        if (fila.victoriasLocales === fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_AND_DRAWS_BUT_NO_VISITOR_WINS.MORE_DRAWS_THAN_LOCAL_WINS;

        if (fila.victoriasLocales > 0 && fila.victoriasLocales < fila.empates && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_AND_VISITOR_WINS_BUT_NO_DRAWS.MORE_LOCAL_WINS_THAN_VISITOR_WINS;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_AND_VISITOR_WINS_BUT_NO_DRAWS.SAME;

        if (fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_AND_VISITOR_WINS_BUT_NO_DRAWS.MORE_VISITOR_WINS_THAN_LOCAL_WINS;

        if (fila.victoriasLocales < fila.victoriasVisitantes && fila.victoriasLocales > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.DRAWS_AND_VISITOR_WINS_BUT_NO_LOCAL_WINS.MORE_DRAWS_THAN_VISITOR_WINS;

        if (fila.victoriasLocales === 0 && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.DRAWS_AND_VISITOR_WINS_BUT_NO_LOCAL_WINS.SAME;

        if (fila.victoriasLocales === 0 && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.DRAWS_AND_VISITOR_WINS_BUT_NO_LOCAL_WINS.MORE_VISITOR_WINS_THAN_DRAWS;

        if (fila.victoriasLocales === 0 && fila.empates < fila.victoriasVisitantes && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_LOCAL_WINS.MORE_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_LOCAL_WINS.SAME;

        if (fila.victoriasLocales > fila.empates && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_LOCAL_WINS.MORE_VISITOR_WINS;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_DRAWS.MORE_LOCAL_WINS;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_DRAWS.SAME;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_DRAWS.MORE_VISITOR_WINS;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_VISITOR_WINS.MORE_LOCAL_WINS;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_VISITOR_WINS.SAME;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales === fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_VISITOR_WINS.MORE_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.SAME_LOCAL_WINS_AND_DRAWS;

        if (fila.victoriasLocales === fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.SAME_LOCAL_WINS_AND_VISITOR_WINS;

        if (fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.SAME_DRAWS_AND_VISITOR_WINS;

        if (fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.SAME;

        if (fila.victoriasLocales === fila.empates && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYFila,
            });

            $scope.matchMessages.push(message);
        }
    };

    $scope.realizarAnalisisPartidoYCompeticion = function () {
        var message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.HISTORICAL;

        var sumaDeVictoriasLocalesEnPartidoYCompeticion = $scope.sumaDeVictoriasLocalesEnPartidoYCompeticion();
        var sumaDeEmpatesEnPartidoYCompeticion = $scope.sumaDeEmpatesEnPartidoYCompeticion();
        var sumaDeVictoriasVisitantesEnPartidoYCompeticion = $scope.sumaDeVictoriasVisitantesEnPartidoYCompeticion();

        var totalPartidosEnCompeticion =
            sumaDeVictoriasLocalesEnPartidoYCompeticion + sumaDeEmpatesEnPartidoYCompeticion +
            sumaDeVictoriasVisitantesEnPartidoYCompeticion;

        var porcentajeDeVictoriasLocalesEnPartidoYCompeticion = sumaDeVictoriasLocalesEnPartidoYCompeticion * 100 / totalPartidosEnCompeticion;
        var porcentajeDeEmpatesEnPartidoYCompeticion = sumaDeEmpatesEnPartidoYCompeticion * 100 / totalPartidosEnCompeticion;
        var porcentajeDeVictoriasVisitantesEnPartidoYCompeticion = sumaDeVictoriasVisitantesEnPartidoYCompeticion * 100 / totalPartidosEnCompeticion;

        porcentajeDeVictoriasLocalesEnPartidoYCompeticion = Math.round(porcentajeDeVictoriasLocalesEnPartidoYCompeticion * 100) / 100;
        porcentajeDeEmpatesEnPartidoYCompeticion = Math.round(porcentajeDeEmpatesEnPartidoYCompeticion * 100) / 100;
        porcentajeDeVictoriasVisitantesEnPartidoYCompeticion = Math.round(porcentajeDeVictoriasVisitantesEnPartidoYCompeticion * 100) / 100;

        message = $scope.getCustomMessage(message, {
            "{localTeam}": $scope.form.equipoLocal,
            "{visitorTeam}": $scope.form.equipoVisitante,
            "{competition}": $scope.form.competicion,
            '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoYCompeticion,
            '{numDraws}': sumaDeEmpatesEnPartidoYCompeticion,
            '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoYCompeticion,
            '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoYCompeticion,
            '{perDraws}': porcentajeDeEmpatesEnPartidoYCompeticion,
            '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoYCompeticion,
        });

        $scope.matchMessages.push(message);
    };

    $scope.realizarAnalisisPartidoCompeticionYFila = function () {
        var message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.NO_DATA;

        var fila = $scope.filasPartidoYCompeticion.find(function (row) {
            return row.fila === parseInt($scope.form.fila);
        }) || {};

        var sumaDeVictoriasLocalesEnPartidoCompeticionYFila = fila.victoriasLocales;
        var sumaDeEmpatesEnPartidoCompeticionYFila = fila.empates;
        var sumaDeVictoriasVisitantesEnPartidoCompeticionYFila = fila.victoriasVisitantes;

        var totalPartidosEnCompeticionYFila =
            sumaDeVictoriasLocalesEnPartidoCompeticionYFila + sumaDeEmpatesEnPartidoCompeticionYFila +
            sumaDeVictoriasVisitantesEnPartidoCompeticionYFila;

        var porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila = sumaDeVictoriasLocalesEnPartidoCompeticionYFila * 100 / totalPartidosEnCompeticionYFila;
        var porcentajeDeEmpatesEnPartidoCompeticionYFila = sumaDeEmpatesEnPartidoCompeticionYFila * 100 / totalPartidosEnCompeticionYFila;
        var porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila = sumaDeVictoriasVisitantesEnPartidoCompeticionYFila * 100 / totalPartidosEnCompeticionYFila;

        porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila = Math.round(porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila * 100) / 100;
        porcentajeDeEmpatesEnPartidoCompeticionYFila = Math.round(porcentajeDeEmpatesEnPartidoCompeticionYFila * 100) / 100;
        porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila = Math.round(porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila * 100) / 100;

        if (!fila.victoriasLocales && !fila.empates && !fila.victoriasVisitantes) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.ONLY_LOCAL_WINS;

        if (fila.victoriasLocales > 0 && fila.empates === 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.ONLY_DRAWS;

        if (fila.victoriasLocales === 0 && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.ONLY_VISITOR_WINS;

        if (fila.victoriasLocales === 0 && fila.empates === 0 && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_AND_DRAWS_BUT_NO_VISITOR_WINS.MORE_LOCAL_WINS_THAN_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_AND_DRAWS_BUT_NO_VISITOR_WINS.SAME;

        if (fila.victoriasLocales === fila.empates && fila.empates > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_AND_DRAWS_BUT_NO_VISITOR_WINS.MORE_DRAWS_THAN_LOCAL_WINS;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0 && fila.victoriasVisitantes === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_AND_VISITOR_WINS_BUT_NO_DRAWS.MORE_LOCAL_WINS_THAN_VISITOR_WINS;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_AND_VISITOR_WINS_BUT_NO_DRAWS.SAME;

        if (fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_AND_VISITOR_WINS_BUT_NO_DRAWS.MORE_VISITOR_WINS_THAN_LOCAL_WINS;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0 && fila.empates === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }


        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.DRAWS_AND_VISITOR_WINS_BUT_NO_LOCAL_WINS.MORE_DRAWS_THAN_VISITOR_WINS;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.DRAWS_AND_VISITOR_WINS_BUT_NO_LOCAL_WINS.SAME;

        if (fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.DRAWS_AND_VISITOR_WINS_BUT_NO_LOCAL_WINS.MORE_VISITOR_WINS_THAN_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > 0 && fila.victoriasLocales === 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_LOCAL_WINS.MORE_DRAWS;

        if (fila.victoriasLocales > fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_LOCAL_WINS.SAME;

        if (fila.victoriasLocales > fila.empates && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_LOCAL_WINS.MORE_VISITOR_WINS;

        if (fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_DRAWS.MORE_LOCAL_WINS;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_DRAWS.SAME;

        if (fila.empates > fila.victoriasLocales && fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_DRAWS.MORE_VISITOR_WINS;

        if (fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_VISITOR_WINS.MORE_LOCAL_WINS;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_VISITOR_WINS.SAME;

        if (fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales === fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.MORE_VISITOR_WINS.MORE_DRAWS;

        if (fila.victoriasVisitantes > fila.empates && fila.empates > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.SAME_LOCAL_WINS_AND_DRAWS;

        if (fila.victoriasLocales === fila.empates && fila.empates > fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.SAME_LOCAL_WINS_AND_VISITOR_WINS;

        if (fila.victoriasLocales === fila.victoriasVisitantes && fila.victoriasVisitantes > fila.empates && fila.empates > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.SAME_DRAWS_AND_VISITOR_WINS;

        if (fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > fila.victoriasLocales && fila.victoriasLocales > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }

        message = quiniela.ANALYZER_MESSAGES.MATCH.COMPETITION.ROW.LOCAL_WINS_DRAWS_AND_VISITOR_WINS.SAME;

        if (fila.victoriasLocales === fila.empates && fila.empates === fila.victoriasVisitantes && fila.victoriasVisitantes > 0) {
            message = $scope.getCustomMessage(message, {
                "{localTeam}": $scope.form.equipoLocal,
                "{visitorTeam}": $scope.form.equipoVisitante,
                "{competition}": $scope.form.competicion,
                '{row}': $scope.form.fila,
                '{numWinsLocal}': sumaDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{numDraws}': sumaDeEmpatesEnPartidoCompeticionYFila,
                '{numWinsVisitor}': sumaDeVictoriasVisitantesEnPartidoCompeticionYFila,
                '{perWinsLocal}': porcentajeDeVictoriasLocalesEnPartidoCompeticionYFila,
                '{perDraws}': porcentajeDeEmpatesEnPartidoCompeticionYFila,
                '{perWinsVisitor}': porcentajeDeVictoriasVisitantesEnPartidoCompeticionYFila,
            });

            $scope.matchMessages.push(message);
        }
    };

    $scope.getCustomMessage = function (message, translations) {
        var res = angular.copy(message);

        angular.forEach(translations, function (value, key) {
            res = res.replace(new RegExp(key, "g"), value);
        });

        return res;
    };

    $scope.redirigir = function () {
        $window.location.href = "/admin/quiniela/equipos";
    };

    $scope.reset = function () {
        $scope.localTeamMessages = [];
        $scope.visitorTeamMessages = [];
        $scope.matchMessages = [];
    };

    $scope.init = function () {
        $scope.form = {
            equipoLocal: null,
            equipoVisitante: null,
            fila: null,
            competicion: null,
        };

        $scope.reset();
    };

    $scope.init();
}