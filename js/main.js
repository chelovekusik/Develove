   "use strict";

   
   /* function start () {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

        while (numberOfFilms == " " || isNaN(numberOfFilms) || numberOfFilms == null) { 
          numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
        }
   } */

   /*  start(); 
    */
   let personalMovieDB = {
     count: 0,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
     start: function () {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");

      while (personalMovieDB.count  == " " || isNaN(personalMovieDB.count) || personalMovieDB.count  == null) { 
        personalMovieDB.count  = +prompt("Сколько фильмов вы уже посмотрели", "");
      }
      
      },
      detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
          alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count <= 30) {
          alert("Вы класический зритель");
        }  else if (personalMovieDB.count > 30) {
          alert("Вы киноман");
        }  else {
          alert("Произошла ошибка");
        }
      },
      
      rememberMyFilmss: function () {
       for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
        b = prompt("На сколько оцените его", "");
        
        if (a != null && b != null && a != "" && b != ""  && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log("done");
        } else {
          console.log("error");
            i--;
        }
        
       }
       
     },
     toggleVisibleMyDB: function(){
       if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
       } else {
        personalMovieDB.privat = true;
       }

     },
     writeYourGenres: function () {
      for (let i = 1; i < 2; i++) {
          /* let genres = prompt(`Ваш любимый жанр под номером ${i}`);

          if (genres === '' || genres == null) {
            console.log("Вы ввели некоректные данные или не ввели вовсе.");
            i--;
          } else {
            personalMovieDB.genres[i - 1] = genre;
           } */
           let genres = prompt("Введите ваши любимые жанры через запятую").toLocaleLowerCase();//СОртировка происходит
           //с больших букв , а так мы превратим все буквы в маленькие
           if (genres === '' || genres == null) {
            console.log("Вы ввели некоректные данные или не ввели вовсе.");
            i--;
          } else {
            personalMovieDB.genres = genres.split(", ");
            personalMovieDB.genres.sort();
           } 

          
        }
    },
    showMyDB: function (hidden) {
      if (!hidden) { 
      console.log(personalMovieDB);
    }  
    personalMovieDB.genres.forEach((item, i) => { 
      console.log(`"Любимый жанр ${i + 1} - это ${item}`); 
    });
      
   },
   };

   /* personalMovieDB.start();
   personalMovieDB.detectPersonalLevel();
   personalMovieDB.rememberMyFilmss(); */
   console.log(personalMovieDB);
   personalMovieDB.toggleVisibleMyDB();
   personalMovieDB.writeYourGenres(); 
   personalMovieDB.showMyDB();
   

   /* personalMovieDB.genres.forEach(function(item, i, arr){ 
    console.log(`"Любимый жанр ${i + 1} - это ${item}`); 
  }); 
   */
  
  

    /* unction rememberMyFilms() {
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
 */
   /* rememberMyFilms(); */
   
   

   /* function detectPersonalLevel() {
     if (personalMovieDB.count < 10) {
       alert("Просмотрено довольно мало фильмов");
     } else if (personalMovieDB.count <= 30) {
       alert("Вы класический зритель");
     }  else if (personalMovieDB.count > 30) {
       alert("Вы киноман");
     }  else {
       alert("Произошла ошибка");
     }
   } */

    /* detectPersonalLevel();  */
   
  /* function showMyD(hid) {
    if (hid.privat === false) {// вариант предложеной мной
        console.log(hid);
    }
  }  
  showMyD(personalMovieDB); */

  /* function showMyDB(hidden) {//мы задаем hidden в него будет передоваться personalMovieDB.privat
    if (!hidden) { // значение которое в false (privat: false,), тут мы просто русским языком спрашиваем
    console.log(personalMovieDB);//если наша база данных не скрыта т.е. здесь оператор отрицания "!" "note"
  }  // в таком случаи мы берем и показываем ее. Как работает цепочка у нас privat: false, false передается вот сюда 
} //т.к как у нас оператор отрицания '!'т.е обратного превращения то у нас false превращается в true ,
//получается у нас if true и срабатывает console.log(personalMovieDB)

showMyDB(personalMovieDB.privat);  */ 

/* function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);// Короткий вариант того что сверху
  }
}
 writeYourGenres(); */  
/*  personalMovieDB.genres.forEach(function(item, i, arr){ // этот метод позволяет применить callback функцию и она пройдет по каждому
  console.log(`"Любимый жанр ${i + 1} - это ${item}`);// элементу массива, она может в себя принимать 3 аргумента                          
});  */                 // 1)элемент в массиве(item) 2)номер элемента(i) 3)название массива(arr)
   

  
   /* function writeYourGenres() {
     for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
     }
   }
   writeYourGenres();  */

   /* function toggleVisibleMyDB(hidden1) {//мы задаем hidden в него будет передоваться personalMovieDB.privat
    if (hidden1 === true) { // значение которое в false (privat: false,), тут мы просто русским языком спрашиваем
    return hidden1;//если наша база данных не скрыта т.е. здесь оператор отрицания "!" "note"
  }  // в таком случаи мы берем и показываем ее. Как работает цепочка у нас privat: false, false передается вот сюда 
} */ //т.к как у нас оператор отрицания '!'т.е обратного превращения то у нас false превращается в true ,
//получается у нас if true и срабатывает console.log(personalMovieDB)

/* toggleVisibleMyDB(personalMovieDB.privat);  */
  
   

  
   

 




