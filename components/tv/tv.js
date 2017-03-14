angular.module('routingApp')

.controller('tvController', ['$scope', 'httpService', '$routeParams', '$sce', function($scope, httpService, $routeParams, $sce){
    
    var tvId = $routeParams.tvId;
    
    
    
    $scope.getTvShow = function(tvId) {
        var imgPath = "https://image.tmdb.org/t/p/w1280/";
        var smPosterPath = "https://image.tmdb.org/t/p/w92/";
        var imdb = "http://imdb.com/title/"
        
        if(tvId != undefined) {
            httpService.getTvShow(tvId)
                .then(function(response) {
                    $scope.tv = response;
                
                $scope.imgPath = imgPath + $scope.tv.backdrop_path;
                
                $scope.postSm = smPosterPath + $scope.tv.poster_path;
                $scope.imdbPath = imdb + $scope.tv.external_ids.imdb_id;
                
                $scope.videoKey = $scope.tv.videos.results[0].key
                
                $scope.videoPath = 'https://www.youtube.com/embed/' + $scope.videoKey;
                
                $scope.trustedUrl = $sce.trustAsResourceUrl($scope.videoPath);
                })
            
        }

    }
    
    $scope.getTvShow(tvId);
    

    
    
}])

