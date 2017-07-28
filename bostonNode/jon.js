var movies = require('./movies');

var jonMovies = movies();
jonMovies.favMovie = "Rush Hour";
console.log("Jon's favorite movie is: " + jonMovies.favMovie);
