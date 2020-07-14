   "use strict";

   let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

   console.log(numberOfFilms);
   
   
   
   let personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
   };
   

   for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
        b = prompt("На сколько оцените его", "");
        
        if (a != null && b != null && a != "" && b != ""  && a.length < 50) { //Переменая a не должна равняться null т.е кнопеи отмены и b тоже не должната раняться этому или эти переменные не должны равнятья пустой строке
        personalMovieDB.movies[a] = b;// переменая a-свойство нашего объекта b-значение этого свойства
          console.log("done");
        } else {
          console.log("error");
          i--;
        }
   }

   

   console.log(personalMovieDB);

   if (personalMovieDB.count < 10) {
     alert("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count <= 30) {
    alert("Вы класический зритель");
   } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
   } else {
     alert("Произошла ошибка");
   }
   

   

 




