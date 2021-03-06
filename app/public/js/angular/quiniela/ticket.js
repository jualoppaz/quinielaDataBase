var app = angular.module('qdb');

app.controller('TicketController', Controller);

Controller.$inject = ['$scope', '$http', '$window', 'quiniela'];

function Controller ($scope, $http, $window, quiniela) {

    $scope.ticket = {};

    $scope.aciertos = [];

    var url = $window.location.href;

    var fragmentos = url.split("/");
    var season = fragmentos[5];
    var day = fragmentos[6];

    quiniela.getTicketBySeasonAndDay(season, day)
        .then(function(data){
            $scope.ticket = data;

            for(var i=0; i<data.partidos.length; i++){ // Recorremos los partidos

                if(data.partidos[i].pronosticos == null){ // Para que no se queje cuando no mostremos los pronosticos
                    data.partidos[i].pronosticos = [];
                }

                for(var j=0; j<data.partidos[i].pronosticos.length || 0; j++){ // Recorremos las apuestas
                    if(data.partidos[i].pronosticos[j].signo == data.partidos[i].resultado){
                        if(data.partidos[i].fila != 15){
                            $scope.aciertos[j] = $scope.aciertos[j] + 1 || 1; // Por si aun no se ha inicializado
                        }
                    }
                }
            }

            // Este ultimo for es por si no hay ningun acierto, para poner la variable a 0 en las columnas

            for(i=0; i<data.partidos[0].pronosticos.length; i++){
                $scope.aciertos[i] = $scope.aciertos[i] || 0;
            }
        })
        .catch(function(err){
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        });
}