angular.module('routingApp')

.controller('homeController', ['$scope', 'httpService', function ($scope, httpService) {
    
    $scope.smImg = "https://image.tmdb.org/t/p/w92"

    $scope.testMovie = httpService.getMovie()
        .then(function (response) {
            $scope.testMovie = response;
        })

    $scope.page = 0;
    $scope.genreId = '';

    $scope.getGenre = function (genre) {
        if (genre != undefined) {
            $scope.genreId = genre;
            $scope.page = 1;
        }
        var pages = 'page=' + $scope.page;
        httpService.getGenreMovies($scope.genreId, pages)
            .then(function (response) {
                $scope.genreMovies = response.data.results;
            })
        $scope.page++;
        $scope.getMore = true;
    }



//    $scope.keywordSearch = function (keyword) {
//        httpService.keywordSearch(keyword)
//            .then(function (response) {
//                $scope.keywordreturn = response;
//            console.log($scope.keywordreturn)
//            });
//        delete $scope.search;
//    }

    $scope.getPopPeople = function () {
        httpService.getPopPeople()
            .then(function (response) {
                $scope.people = response.data;
            })
    }
    $scope.getPopPeople();

    $scope.genreClick = false;
    $scope.isSearch = false;


    $scope.toggleSearch = function (input) {

        if ((input === 'browse') && ($scope.genreClick === true)) {
            $scope.genreClick = false;
            $scope.getMore = false;
        } else if (input === 'browse') {
            $scope.genreClick = true;            

        }

    }

    $scope.getSlides = function () {
        return httpService.getPopMovies()
    }
    $scope.getSlides().then(function(response){
        $scope.slides = response;
            return $scope.slides;
    })
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides;
    var currIndex = 0;
}])