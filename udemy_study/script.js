'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you saw already?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you saw already?", "");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("One of the last films you watched?", ""),
                b = prompt("How much would you rate him?", "");
            if (a != null && b != null && a != "" && b != "" && a.length <50) {
                personalMovieDB.movies [a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--; // повернення на одну ітерацію верх і повторення циклу!!
            }
        }
    },

    detectPerconalLevel: function () {
        if (personalMovieDB.count <10){
            console.log("Not a lot of movies you watch!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30){
            console.log("You are classical watcher!");
        } else if (personalMovieDB.count >= 30){
            console.log("YOU ARE FAAAAANNNNN");
        } else {
            console.log("nothing!!!");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
          personalMovieDB.privat = false;
      } else {
          personalMovieDB.privat = true;
      }
    },
    writeYouGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`You favorite genre ${i}`);

            if (genre === '' || genre === null) {
                console.log("no data in string!");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`You favourite genre ${i + 1} - this is ${item}`);
        });
    }
};
