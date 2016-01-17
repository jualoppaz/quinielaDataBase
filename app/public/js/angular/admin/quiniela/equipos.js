var app = angular.module('dashboard');

app.controller('EquiposController', function ($scope, $http){

    $scope.equipos = {};
    $scope.equiposAEliminar = {};

    $scope.mensajeInformativoEliminacion = "Si acepta, el equipo será eliminado de forma definitiva.";

    $scope.form = {};

    $scope.form.mostrarTodos = false;

    $scope.letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    $scope.form.letraSeleccionada = "A";

    $http.get('/api/quiniela/equipos')
        .success(function(data){
            $scope.equipos = data;
        })
        .error(function(data){
            console.log(data);
        });

    $scope.verRegistro = function(id){
        window.location.href = "/admin/quiniela/equipos/" + id;
    };

    $scope.eliminarRegistro = function(id){
        angular.element("#modal-eliminar-registro").modal('show');
        $scope.equipoAEliminar = id;
    };

    $scope.eliminarRegistroDefinitivamente = function(){
        $http.delete('/api/quiniela/equipos/' + String($scope.equipoAEliminar))
            .success(function(data){
                $scope.equipos = data;
            })
            .error(function(data){
                console.log(data);
            });
    };

    $scope.seleccionarLetra = function(letra){
        $scope.form.letraSeleccionada = letra;
        $scope.form.mostrarTodos = false;
    };

    $scope.mostrarTodos = function(){
        $scope.form.letraSeleccionada = "";
        $scope.form.mostrarTodos = true;
    };

    $scope.empiezaPor = function(equipo){

        var res = false;

        if($scope.form.letraSeleccionada == "A"){
            res = equipo.charAt(0) == "A" || equipo.charAt(0) == "Á";
        }else if($scope.form.letraSeleccionada == "E"){
            res = equipo.charAt(0) == "E" || equipo.charAt(0) == "É";
        }else if($scope.form.letraSeleccionada == "I"){
            res = equipo.charAt(0) == "I" || equipo.charAt(0) == "Í";
        }else if($scope.form.letraSeleccionada == "O"){
            res = equipo.charAt(0) == "O" || equipo.charAt(0) == "Ó";
        }else if($scope.form.letraSeleccionada == "U"){
            res = equipo.charAt(0) == "U" || equipo.charAt(0) == "Ú";
        }else{
            res = equipo.charAt(0) == $scope.form.letraSeleccionada;
        }

        return res;
    };


});