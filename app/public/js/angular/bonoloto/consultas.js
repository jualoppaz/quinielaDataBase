var app = angular.module("qdb");

app.controller("ConsultasController", Controller);

Controller.$inject = ["$scope", "$http", "$filter", "bonoloto"];

function Controller($scope, $http, $filter, bonoloto) {
    $scope.mostrar = {};
    $scope.mostrar.tablaAparicionesPorNumero = false;

    $scope.ordenAparicionesPorNumero = true;
    $scope.criterioOrdenacionAparicionesPorNumero = "occurrences";

    $scope.ordenAparicionesPorResultado = true;
    $scope.criterioOrdenacionAparicionesPorResultado = "occurrences";

    $scope.ordenAparicionesPorResultadoConReintegro = true;
    $scope.criterioOrdenacionAparicionesPorResultadoConReintegro =
        "occurrences";

    $scope.ordenAparicionesPorReintegro = true;
    $scope.criterioOrdenacionAparicionesPorReintegro = "occurrences";

    $scope.ordenUltimaAparicionPorNumero = false;
    $scope.criterioOrdenacionUltimaAparicionPorNumero = "date";

    $scope.ordenUltimaAparicionPorReintegro = false;
    $scope.criterioOrdenacionUltimaAparicionPorReintegro = "date";

    $scope.maxSize = 5;

    $scope.currentPage = 1;

    var ticketsPerPage_default = 20;
    $scope.ticketsPerPage = ticketsPerPage_default;

    $scope.form = {};

    $scope.form.opcionBusqueda = "general";

    $scope.form.opcionBusquedaEstandar = {
        name: "aparicionesPorNumero"
    };

    $scope.primeraPestana = true;

    $scope.segundaPestana = false;

    $scope.consultando = false;

    $scope.ayuda = {};

    $scope.ayudaTemporada =
        "Para buscar datos sobre todas las temporadas o sobre una única temporada.";

    $scope.ayudaCompeticion =
        "Para buscar datos sobre todas las competiciones o sobre una concreta.";

    $scope.ayudaBusqueda =
        "Para añadir un criterio adicional de búsqueda. " +
        "Se pueden buscar resultados en general, los datos de un equipo o " +
        "sólo los de un partido.";

    $scope.ayuda.aparicionesPorNumero =
        "Para consultar los números que han aparecido más veces entre los números premiados.";

    $scope.ayuda.aparicionesPorResultado =
        "Para consultar los resultados que se han dado en más ocasiones.";

    $scope.ayuda.aparicionesPorResultadoConReintegro =
        "Para consultar los resultados que se han dado en más ocasiones, incluyendo los reintegros de dichos resultados.";

    $scope.ayuda.aparicionesPorReintegro =
        "Para consultar los reintegros que se han dado en más ocasiones.";

    $scope.ayuda.ultimaAparicionPorNumero = "Para consultar la última fecha de aparición por número.";

    $scope.ayuda.ultimaAparicionPorReintegro = "Para consultar la última fecha de aparición por reintegro.";

    $scope.limpiarTablas = function () {
        $scope.mostrar = {};

        $scope.consultando = true;

        $scope.tickets = [];
    };

    $scope.aparicionesPorReintegro = [];

    $scope.aparicionesPorNumero = [];

    $scope.consultarEstandar = function () {
        $scope.limpiarTablas();

        var queryParameters;

        if (
            $scope.form.opcionBusquedaEstandar.name === "aparicionesPorNumero"
        ) {
            queryParameters = {
                page: $scope.currentPage,
                per_page: $scope.ticketsPerPage,
                sort_property: $scope.criterioOrdenacionAparicionesPorNumero,
                sort_type: $scope.ordenAparicionesPorNumero ? "desc" : "asc"
            };

            bonoloto
                .getOccurrencesByNumber(queryParameters)
                .then(function (data) {
                    $scope.aparicionesPorNumero = data.data;

                    $scope.actualizarPaginacion(
                        $scope.aparicionesPorNumero,
                        data.total,
                        data.perPage
                    );

                    $scope.mostrar.tablaAparicionesPorNumero = true;
                })
                .catch(function (err) { })
                .finally(function () {
                    $scope.consultando = false;
                });
        } else if (
            $scope.form.opcionBusquedaEstandar.name ===
            "aparicionesPorResultado"
        ) {
            queryParameters = {
                page: $scope.currentPage,
                per_page: $scope.ticketsPerPage,
                sort_property: $scope.criterioOrdenacionAparicionesPorResultado,
                sort_type: $scope.ordenAparicionesPorResultado ? "desc" : "asc"
            };

            bonoloto
                .getOccurrencesByResult(queryParameters)
                .then(function (data) {
                    $scope.aparicionesPorResultado = data.data;

                    $scope.actualizarPaginacion(
                        $scope.aparicionesPorResultado,
                        data.total,
                        data.perPage
                    );

                    $scope.mostrar.tablaAparicionesPorResultado = true;
                })
                .catch(function (err) { })
                .finally(function () {
                    $scope.consultando = false;
                });
        } else if (
            $scope.form.opcionBusquedaEstandar.name ===
            "aparicionesPorResultadoConReintegro"
        ) {
            queryParameters = {
                page: $scope.currentPage,
                per_page: $scope.ticketsPerPage,
                sort_property:
                    $scope.criterioOrdenacionAparicionesPorResultadoConReintegro,
                sort_type: $scope.ordenAparicionesPorResultadoConReintegro
                    ? "desc"
                    : "asc"
            };

            bonoloto
                .getOccurrencesByResultWithReimbursement(queryParameters)
                .then(function (data) {
                    $scope.aparicionesPorResultadoConReintegro = data.data;

                    $scope.actualizarPaginacion(
                        $scope.aparicionesPorResultadoConReintegro,
                        data.total,
                        data.perPage
                    );

                    $scope.mostrar.tablaAparicionesPorResultadoConReintegro = true;
                })
                .catch(function (err) { })
                .finally(function () {
                    $scope.consultando = false;
                });
        } else if (
            $scope.form.opcionBusquedaEstandar.name ===
            "aparicionesPorReintegro"
        ) {
            queryParameters = {
                page: $scope.currentPage,
                per_page: $scope.ticketsPerPage,
                sort_property: $scope.criterioOrdenacionAparicionesPorReintegro,
                sort_type: $scope.ordenAparicionesPorReintegro ? "desc" : "asc"
            };

            bonoloto
                .getOccurrencesByReimbursement(queryParameters)
                .then(function (data) {
                    $scope.aparicionesPorReintegro = data.data;

                    $scope.actualizarPaginacion(
                        $scope.aparicionesPorReintegro,
                        data.total,
                        data.perPage
                    );

                    $scope.mostrar.tablaAparicionesPorReintegro = true;
                })
                .catch(function (err) { })
                .finally(function () {
                    $scope.consultando = false;
                });
        } else if (
            $scope.form.opcionBusquedaEstandar.name ===
            "ultimaAparicionPorNumero"
        ) {
            queryParameters = {
                page: $scope.currentPage,
                per_page: $scope.ticketsPerPage,
                sort_property:
                    $scope.criterioOrdenacionUltimaAparicionPorNumero,
                sort_type: $scope.ordenUltimaAparicionPorNumero ? "desc" : "asc"
            };

            bonoloto
                .getLastDateByNumber(queryParameters)
                .then(function (data) {
                    $scope.ultimaAparicionPorNumero = data.data;

                    $scope.actualizarPaginacion(
                        $scope.ultimaAparicionPorNumero,
                        data.total,
                        data.perPage
                    );

                    $scope.mostrar.tablaUltimaAparicionPorNumero = true;
                })
                .catch(function (err) { })
                .finally(function () {
                    $scope.consultando = false;
                });
        } else if (
            $scope.form.opcionBusquedaEstandar.name ===
            "ultimaAparicionPorReintegro"
        ) {
            queryParameters = {
                page: $scope.currentPage,
                per_page: $scope.ticketsPerPage,
                sort_property:
                    $scope.criterioOrdenacionUltimaAparicionPorReintegro,
                sort_type: $scope.ordenUltimaAparicionPorReintegro ? "desc" : "asc"
            };

            bonoloto
                .getLastDateByReimbursement(queryParameters)
                .then(function (data) {
                    $scope.ultimaAparicionPorReintegro = data.data;

                    $scope.actualizarPaginacion(
                        $scope.ultimaAparicionPorReintegro,
                        data.total,
                        data.perPage
                    );

                    $scope.mostrar.tablaUltimaAparicionPorReintegro = true;
                })
                .catch(function (err) { })
                .finally(function () {
                    $scope.consultando = false;
                });
        }
    };

    $scope.ordenarAparicionesPorNumeroSegun = function (criterio) {
        if (criterio === "number") {
            if ($scope.criterioOrdenacionAparicionesPorNumero === criterio) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenAparicionesPorNumero === null) {
                    $scope.ordenAparicionesPorNumero = true;
                } else {
                    $scope.ordenAparicionesPorNumero = !$scope.ordenAparicionesPorNumero;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionAparicionesPorNumero = criterio;
                $scope.ordenAparicionesPorNumero = false;
            }
        } else if (criterio === "occurrences") {
            if ($scope.criterioOrdenacionAparicionesPorNumero === criterio) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenAparicionesPorNumero == null) {
                    $scope.ordenAparicionesPorNumero = true;
                } else {
                    $scope.ordenAparicionesPorNumero = !$scope.ordenAparicionesPorNumero;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionAparicionesPorNumero = criterio;
                $scope.ordenAparicionesPorNumero = true;
            }
        }
    };

    $scope.ordenarAparicionesPorResultadoSegun = function (criterio) {
        if (criterio === "result") {
            if ($scope.criterioOrdenacionAparicionesPorResultado === criterio) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenAparicionesPorResultado == null) {
                    $scope.ordenAparicionesPorResultado = true;
                } else {
                    $scope.ordenAparicionesPorResultado = !$scope.ordenAparicionesPorResultado;
                }
            } else {
                // Cambiamos de criterio: De apariciones a Resultado
                $scope.criterioOrdenacionAparicionesPorResultado = criterio;

                $scope.ordenAparicionesPorResultado = false;
            }
        } else if (criterio === "occurrences") {
            if ($scope.criterioOrdenacionAparicionesPorResultado === criterio) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenAparicionesPorResultado == null) {
                    $scope.ordenAparicionesPorResultado = true;
                } else {
                    $scope.ordenAparicionesPorResultado = !$scope.ordenAparicionesPorResultado;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionAparicionesPorResultado = criterio;

                $scope.ordenAparicionesPorResultado = true;
            }
        }
    };

    $scope.ordenarAparicionesPorResultadoConReintegroSegun = function (
        criterio
    ) {
        if (criterio === "result") {
            if (
                $scope.criterioOrdenacionAparicionesPorResultadoConReintegro ===
                criterio
            ) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenAparicionesPorResultadoConReintegro == null) {
                    $scope.ordenAparicionesPorResultadoConReintegro = true;
                } else {
                    $scope.ordenAparicionesPorResultadoConReintegro = !$scope.ordenAparicionesPorResultadoConReintegro;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionAparicionesPorResultadoConReintegro = criterio;
                $scope.ordenAparicionesPorResultadoConReintegro = false;
            }
        } else if (criterio === "occurrences") {
            if (
                $scope.criterioOrdenacionAparicionesPorResultadoConReintegro ===
                criterio
            ) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenAparicionesPorResultadoConReintegro == null) {
                    $scope.ordenAparicionesPorResultadoConReintegro = true;
                } else {
                    $scope.ordenAparicionesPorResultadoConReintegro = !$scope.ordenAparicionesPorResultadoConReintegro;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionAparicionesPorResultadoConReintegro = criterio;
                $scope.ordenAparicionesPorResultadoConReintegro = true;
            }
        }
    };

    $scope.ordenarAparicionesPorReintegroSegun = function (criterio) {
        if (criterio === "reimbursement") {
            if ($scope.criterioOrdenacionAparicionesPorReintegro === criterio) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenAparicionesPorReintegro == null) {
                    $scope.ordenAparicionesPorReintegro = true;
                } else {
                    $scope.ordenAparicionesPorReintegro = !$scope.ordenAparicionesPorReintegro;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionAparicionesPorReintegro = criterio;
                $scope.ordenAparicionesPorReintegro = false;
            }
        } else if (criterio === "occurrences") {
            if ($scope.criterioOrdenacionAparicionesPorReintegro === criterio) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenAparicionesPorReintegro == null) {
                    $scope.ordenAparicionesPorReintegro = true;
                } else {
                    $scope.ordenAparicionesPorReintegro = !$scope.ordenAparicionesPorReintegro;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionAparicionesPorReintegro = criterio;
                $scope.ordenAparicionesPorReintegro = true;
            }
        }
    };

    $scope.ordenarUltimaAparicionPorNumeroSegun = function (criterio) {
        if (criterio === "number") {
            if (
                $scope.criterioOrdenacionUltimaAparicionPorNumero === criterio
            ) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenUltimaAparicionPorNumero == null) {
                    $scope.ordenUltimaAparicionPorNumero = true;
                } else {
                    $scope.ordenUltimaAparicionPorNumero = !$scope.ordenUltimaAparicionPorNumero;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionUltimaAparicionPorNumero = criterio;
                $scope.ordenUltimaAparicionPorNumero = false;
            }
        } else if (criterio === "date") {
            if (
                $scope.criterioOrdenacionUltimaAparicionPorNumero === criterio
            ) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenUltimaAparicionPorNumero == null) {
                    $scope.ordenUltimaAparicionPorNumero = true;
                } else {
                    $scope.ordenUltimaAparicionPorNumero = !$scope.ordenUltimaAparicionPorNumero;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionUltimaAparicionPorNumero = criterio;
                $scope.ordenUltimaAparicionPorNumero = true;
            }
        }
    };

    $scope.ordenarUltimaAparicionPorReintegroSegun = function (criterio) {
        if (criterio === "reimbursement") {
            if (
                $scope.criterioOrdenacionUltimaAparicionPorReintegro === criterio
            ) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenUltimaAparicionPorReintegro == null) {
                    $scope.ordenUltimaAparicionPorReintegro = true;
                } else {
                    $scope.ordenUltimaAparicionPorReintegro = !$scope.ordenUltimaAparicionPorReintegro;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionUltimaAparicionPorReintegro = criterio;
                $scope.ordenUltimaAparicionPorReintegro = false;
            }
        } else if (criterio === "date") {
            if (
                $scope.criterioOrdenacionUltimaAparicionPorReintegro === criterio
            ) {
                //Sólo vamos a invertir el orden
                if ($scope.ordenUltimaAparicionPorReintegro == null) {
                    $scope.ordenUltimaAparicionPorReintegro = true;
                } else {
                    $scope.ordenUltimaAparicionPorReintegro = !$scope.ordenUltimaAparicionPorReintegro;
                }
            } else {
                // Cambiamos de criterio
                $scope.criterioOrdenacionUltimaAparicionPorReintegro = criterio;
                $scope.ordenUltimaAparicionPorReintegro = true;
            }
        }
    };

    // Funciones para ordenacion

    $scope.sortFunction_number = function (ticket) {
        return Number(ticket.numero);
    };

    $scope.sortFunction_result = function (ticket) {
        var res = "";

        for (var i = 0; i < ticket.numeros.length; i++) {
            var numero = ticket.numeros[i].numero;

            if (numero.length === 1) {
                res += "0" + numero.toString();
            } else if (numero.length === 2) {
                res += numero.toString();
            }
        }

        return res;
    };

    $scope.sortFunction_resultWithReimbursement = function (ticket) {
        var res = "";

        for (var i = 0; i < ticket.numeros.length; i++) {
            var numero = ticket.numeros[i].numero;

            if (numero.length === 1) {
                res += "0" + numero.toString();
            } else if (numero.length === 2) {
                res += numero.toString();
            }
        }

        res += "R" + ticket.reintegro;

        return res;
    };

    $scope.sortFunction_reimbursement = function (ticket) {
        return ticket.reintegro;
    };

    $scope.printNumber = function (number) {
        var res = "";

        if (number.toString().length === 1) {
            res = "0" + number.toString();
        } else {
            res = number.toString();
        }

        return res;
    };

    $scope.actualizarPaginacion = function (items, totalItems, ticketsPerPage) {
        // Uso de esta variable para reutilizar el mismo paginador para todas las consultas
        $scope.tickets = items;

        $scope.ticketsPerPage = ticketsPerPage;

        $scope.totalItems = totalItems;

        $scope.numOfPages = $scope.totalItems / $scope.ticketsPerPage;

        var floor = Math.floor($scope.tickets.length / $scope.ticketsPerPage);

        if ($scope.numOfPages > floor) {
            $scope.numOfPages =
                Math.floor($scope.totalItems / $scope.ticketsPerPage) + 1;
        }
    };
}
