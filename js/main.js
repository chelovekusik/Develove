   "use strict";

   let numberOfFilms;
   console.log(numberOfFilms);

   function start () {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

        while (numberOfFilms == " " || isNaN(numberOfFilms) || numberOfFilms == null) { 
          numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
        }
   }

    start(); 
   
   let personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
   };
   


   function rememberMyFilms() {
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
   }

   /* rememberMyFilms(); */
   
   

   function detectPersonalLevel() {
     if (personalMovieDB.count < 10) {
       alert("Просмотрено довольно мало фильмов");
     } else if (personalMovieDB.count <= 30) {
       alert("Вы класический зритель");
     }  else if (personalMovieDB.count > 30) {
       alert("Вы киноман");
     }  else {
       alert("Произошла ошибка");
     }
   }

    /* detectPersonalLevel();  */
   
  /* function showMyD(hid) {
    if (hid.privat === false) {// вариант предложеной мной
        console.log(hid);
    }
  }  
  showMyD(personalMovieDB); */

  function showMyDB(hidden) {//мы задаем hidden в него будет передоваться personalMovieDB.privat
    if (!hidden) { // значение которое в false (privat: false,), тут мы просто русским языком спрашиваем
    console.log(personalMovieDB);//если наша база данных не скрыта т.е. здесь оператор отрицания "!" "note"
  }  // в таком случаи мы берем и показываем ее. Как работает цепочка у нас privat: false, false передается вот сюда 
} //т.к как у нас оператор отрицания '!'т.е обратного превращения то у нас false превращается в true ,
//получается у нас if true и срабатывает console.log(personalMovieDB)

showMyDB(personalMovieDB.privat); 
   

    /* function writeYourGenres (){
     for (let i = 0; i < 1; i++){
      let a = prompt("Ваш любимый жанр под номером 1-ужасы 2-боевик 3-мистика", ""),
          b  = prompt("Ваш любимый жанр под номером 1-ужасы 2-боевик 3-мистика", ""),
          c = prompt("Ваш любимый жанр под номером 1-ужасы 2-боевик 3-мистика", "");
      if (a != null && a != "" && a > 4) { 
       
        personalMovieDB.genres[0] = a;
        personalMovieDB.genres[1] = b;
        personalMovieDB.genres[2] = c;
          console.log("done");
        } else {
          console.log("error");
          i--;
          
        }
         
     
     }
      
   }  */

   /* function writeYourGenres() {
     for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
     }
   }
   writeYourGenres();  */
  
   function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
  }
  writeYourGenres(); 
   

 




