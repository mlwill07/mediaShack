angular.module('routingApp')

.controller('searchController', ['$scope', 'httpService', '$routeParams', '$sce', function($scope, httpService, $routeParams, $sce){
    
    $scope.searchTerm = $routeParams.searchTerm;
   
    
   
    
    $scope.keywordSearch = function (keyword) {
        httpService.keywordSearch(keyword)
            .then(function (response) {
                $scope.keyword = response;
            })
        delete $scope.search;
    }
    

    $scope.keywordSearch($scope.searchTerm);
    
    
    $scope.checkType = function(type, id) {
        if(type === 'movie') {
            $scope.elementUrl = '#/movies/' + id;
        } else if (type === 'person') {
            $scope.elementUrl = '#/people/'+ id;
        } else {
            $scope.elementUrl = '#/tv/' + id;
        }
        return $scope.elementUrl;
    }
}])