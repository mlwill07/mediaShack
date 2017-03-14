angular.module('routingApp')

.controller('movController', ['$scope', 'httpService', '$routeParams', '$sce', function($scope, httpService, $routeParams, $sce){
    
    var movieId = $routeParams.movieId;
    
    
    
    $scope.getGenreMovie = function(movieId) {
        var imgPath = "https://image.tmdb.org/t/p/w1280/";
        var smPosterPath = "https://image.tmdb.org/t/p/w92/";
        var imdb = "http://imdb.com/title/"
        
        if(movieId != undefined) {
            httpService.getGenreMovie(movieId)
                .then(function(response) {
                    $scope.movie = response;
                
                $scope.imgPath = imgPath + $scope.movie.backdrop_path;
                
                $scope.postSm = smPosterPath + $scope.movie.poster_path;
                $scope.imdbPath = imdb + $scope.movie.imdb_id;
                
                $scope.videoKey = $scope.movie.videos.results[0].key
                
                $scope.videoPath = 'https://www.youtube.com/embed/' + $scope.videoKey;
                
                $scope.trustedUrl = $sce.trustAsResourceUrl($scope.videoPath);
                })
        }

    }
    
    $scope.getGenreMovie(movieId);
    

    
    
}])

