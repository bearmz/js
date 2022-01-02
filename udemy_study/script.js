'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you saw already?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you saw already?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPerconalLevel() {
    if (personalMovieDB.count <10){
        console.log("Not a lot of movies you watch!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30){
        console.log("You are classical watcher!");
    } else if (personalMovieDB.count >= 30){
        console.log("YOU ARE FAAAAANNNNN");
    } else {
        console.log("nothing!!!");
    }
}

detectPerconalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`You favorite genre ${i}`);
    }
}
writeYouGenres();
