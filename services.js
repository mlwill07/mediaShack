angular.module('routingApp')

.service('httpService', ['$http', function ($http) {

    var key = "api_key=1898375178fa91af67290e97f2fd9470"

    this.genres = []
    this.getMovie = function () {
        return $http.get('https://api.themoviedb.org/3/genre/movie/list?' + key + '&language=en-US')
            .then(function (response) {
                this.genres = response.data;
                return this.genres;
            })
    }

    this.getGenreMovies = function (item, page) {
        return $http.get('https://api.themoviedb.org/3/genre/' + item + '/movies?' + key + '&language=en-US&' + page + '&include_adult=false&sort_by=created_at.asc')
    }

    this.getGenreMovie = function (movieId) {
        if (movieId != undefined) {
            return $http.get('https://api.themoviedb.org/3/movie/' + movieId + '?' + key + '&language=en-US&append_to_response=videos,credits,reviews')
                .then(function (response) {
                    this.movieData = response.data;
                    return this.movieData;
                })

        }
    }
    
    this.getTvShow = function (tvId) {
        if (tvId != undefined) {
            return $http.get('https://api.themoviedb.org/3/tv/' + tvId + '?' + key + '&language=en-US&append_to_response=videos,credits,external_ids')
                .then(function (response) {
                    this.tvData = response.data;
                    return this.tvData;
                })

        }
    }

    this.keywordSearch = function (keyword) {
        keyword = keyword.split(" ").join("%20");
        keyword = 'query=' + keyword;
        return $http.get('https://api.themoviedb.org/3/search/multi?' + key + '&language=en-US&include_adult=false&' + keyword)
            .then(function (response) {
                return response.data.results;
            })
    }

    this.getPerson = function (personId) {
        return $http.get('https://api.themoviedb.org/3/person/' + personId + '?' + key + '&language=en-US&append_to_response=movie_credits,tv_credits')
    }

    this.getPopPeople = function () {
        return $http.get('https://api.themoviedb.org/3/person/popular?' + key + '&language=en-US&page=1')
    }

    this.getPopMovies = function () {

        return $http.get('https://api.themoviedb.org/3/movie/popular?' + key + '&language=en-US&page=1')
            .then(function (response) {
                var popmovies = response.data.results
                this.carousel = [];
                var imgPath = "https://image.tmdb.org/t/p/w780/";

                function Movie(title, path, id) {
                    this.title = title;
                    this.imgSrc = imgPath + path;
                    this.id = id
                }
                for (var i = 0; i < popmovies.length; i++) {
                    var newMovie = new Movie(popmovies[i].title, popmovies[i].backdrop_path, popmovies[i].id);
                    this.carousel.push(newMovie);
                }
                return this.carousel;
            });

    }

}])