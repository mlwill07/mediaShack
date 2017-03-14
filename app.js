angular.module('routingApp', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'components/home/home.html',
            controller: 'homeController'
        })
        .when('/movies/:movieId', {
            templateUrl: 'components/movies/movies.html',
            controller: 'movController'
        })
        .when('/people/:peopleId', {
            templateUrl: 'components/people/people.html',
            controller: 'peopleController'
        })
        .when('/tv/:tvId', {
            templateUrl: 'components/tv/tv.html',
            controller: 'tvController'
        })
        .when('/search/:searchTerm', {
            templateUrl: 'components/results-list/results-list.html',
            controller: 'searchController'
        })
        .otherwise({
            redirectTo: '/home'
        })
    
}])



