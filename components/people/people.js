angular.module('routingApp')

.controller('peopleController', ['$scope', 'httpService', '$routeParams', '$sce', function($scope, httpService, $routeParams, $sce){
    
    var personId = $routeParams.peopleId;
    
    $scope.getPerson = function(personId) {
        var personPath = "https://image.tmdb.org/t/p/w300";
       
        var imdb = "http://imdb.com/name/";
        httpService.getPerson(personId).then(function(response){
        $scope.person = response.data;
        $scope.imdbPath = imdb + $scope.person.imdb_id;
        $scope.personPic = personPath + $scope.person.profile_path;
        
    })
    }
    $scope.getPerson(personId);
    
}])