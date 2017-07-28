var movies = require('./movies');

var jawnMovies = movies();

jawnMovies.favMovie = "good will hunting";
console.log("Jawn's favorite movie is: " + jawnMovies.favMovie);
