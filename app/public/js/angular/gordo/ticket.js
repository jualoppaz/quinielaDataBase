var app = angular.module("qdb");

app.controller("TicketController", Controller);

Controller.$inject = ["$scope", "$http", "$window", "VariosService", "gordo"];

function Controller($scope, $http, $window, VariosService, gordo) {
    $scope.ticket = {};

    $scope.aciertos = [];

    $scope.consultaRealizada = false;

    var url = $window.location.href;

    var fragmentos = url.split("/");

    gordo
        .getTickets({
            year: fragmentos[5],
            raffle: fragmentos[6]
        })
        .then(function (data) {
            $scope.ticket = data.data[0];
            $scope.consultaRealizada = true;
        })
        .catch(function (err) {
            console.log(JSON.stringify(err));
            $scope.consultaRealizada = true;
        });

    $scope.numeroClaveAcertado = function (indice) {
        var resultado = $scope.ticket.resultado;

        if ($scope.ticket.apuestas.format === 'new') {
            return $scope.ticket.apuestas.numerosClave[indice].numeroClave === resultado.numeroClave;
        } else {
            return $scope.ticket.apuestas.numeroClave === resultado.numeroClave;
        }
    };

    $scope.determinarCategoriaPremio = function (combinacion, indice) {
        var res = "";

        var resultado = $scope.ticket.resultado;

        var numeroAciertos = 0;

        var numeroClaveAcertado = $scope.numeroClaveAcertado(indice);

        for (i = 0; i < combinacion.length; i++) {
            for (j = 0; j < resultado.bolas.length; j++) {
                if (combinacion[i].numero == resultado.bolas[j].numero) {
                    numeroAciertos += 1;
                }
            }
        }

        if (numeroAciertos == 5) {
            if (numeroClaveAcertado) {
                res = "1ª";
            } else {
                res = "2ª";
            }
        } else if (numeroAciertos == 4) {
            if (numeroClaveAcertado) {
                res = "3ª";
            } else {
                res = "4ª";
            }
        } else if (numeroAciertos == 3) {
            if (numeroClaveAcertado) {
                res = "5ª";
            } else {
                res = "6ª";
            }
        } else if (numeroAciertos == 2) {
            if (numeroClaveAcertado) {
                res = "7ª";
            } else {
                res = "8ª";
            }
        } else if (numeroClaveAcertado) {
            res = "Reintegro";
        } else {
            res = "-";
        }

        return res;
    };

    $scope.determinarNumeroAciertos = function (combinacion, indice) {
        var res = "";

        var resultado = $scope.ticket.resultado;

        var numeroAciertos = 0;

        var numeroClaveAcertado = $scope.numeroClaveAcertado(indice);

        for (i = 0; i < combinacion.length; i++) {
            for (j = 0; j < resultado.bolas.length; j++) {
                if (combinacion[i].numero == resultado.bolas[j].numero) {
                    numeroAciertos += 1;
                }
            }
        }

        if (numeroAciertos == 5) {
            if (numeroClaveAcertado) {
                res = "5 + R";
            } else {
                res = "5";
            }
        } else if (numeroAciertos == 4) {
            if (numeroClaveAcertado) {
                res = "4 + R";
            } else {
                res = "5";
            }
        } else if (numeroAciertos == 3) {
            if (numeroClaveAcertado) {
                res = "3 + R";
            } else {
                res = "3";
            }
        } else if (numeroAciertos == 2) {
            if (numeroClaveAcertado) {
                res = "2 + R";
            } else {
                res = "2";
            }
        } else if (numeroAciertos == 1) {
            res = "1";
        } else if (numeroClaveAcertado) {
            res = "R";
        } else {
            res = "0";
        }

        return res;
    };

    $scope.bolaHaSidoAcertada = function (bola) {
        var resultado = $scope.ticket.resultado;

        var res = false;

        for (var i = 0; i < resultado.bolas.length; i++) {
            if (bola.numero == resultado.bolas[i].numero) {
                res = true;
                break;
            }
        }

        return res;
    };

    $scope.bolaHaSidoAcertadaComoComplementario = function (bola) {
        var resultado = $scope.ticket.resultado;

        var res = false;

        res = bola.numero == resultado.complementario;

        return res;
    };

    $scope.ticketEstaVacio = function () {
        console.log("JSON: " + JSON.stringify($scope.ticket, null, 4));
        console.log($scope.consultaRealizada);
        return VariosService.jsonVacio($scope.ticket);
    };
}
