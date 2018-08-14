// function add() {
//  var a = prompt('Введите число');
//      var summ = 0; //мыобъявляем вторую переменную, но она почему-то не чего не значит и по этому пишут в дебагере underfined----------------------сейчас резберемся
//      for(var i = 0; i < a; i++){
//         debugger;
//         if (a === 'fff'){
//             alert('Вы ввели не число!');
//         }
//          summ = summ + a[i];// что тут? появляется что переменная еще раз объявляется и она равна самой себе (underf...
//         console.log(summ);
//    }
//
//  }
//
//  add();

//Циклы//

//FOR//

// Зашло число 3;

// function add() {
//     var a = prompt('Введите число');
//     debugger;
//     if (parseInt(a)){
//         alert('Вы ввели число');
//     }else{
//         alert('Вы ввели не число');
//     }
//     var sum = 0;
//     for( var i = 0; i < a; i++){
//         sum = sum + i;
//         console.log(i);//  консоль выведет 0,1,2
//     }
//     console.log(sum); //   sum = 3 (равна после завершения цикла); сдесь консоль выведет 3
// }
// add();

//FOR IN//

// var obj = (
//     propp: 'one',
//     proppSecond: 'two'
// ),
// prop;
//
//
// for (prop in obj){
//     debugger;
//     console.log(prop + ' : ' + obj[prop]);
// }

// var myPlaces =  ['Italya', 'Russia', 'Canada'];
// var friendPlaces = ['Italya', 'Russia', 'Ukraine'];
//
// for (var i = 0; i < myPlaces.length; i++) {
//     console.log(myPlaces[i]);
//     debugger;
//

//     for (var j = 0; j < friendPlaces.length; j++) {
//         console.log(friendPlaces[j]);
//
//         if (myPlaces[i] === friendPlaces[j]) {
//             console.log('Match: ' + myPlaces[i]);
//         }
//     }
// }

//WHILE//

// var a = [1, 2, 3];
// var i = 0;
// debugger;
// while(i < a.length){
//     if(a[i] === 2){
//         alert('Это число 2');
//     }else{
//         alert('Это не верно!')
//     }
//     i++;
// }

// var card = ['Diamond', 'Spade', 'Heart', 'Club'];
// var currentCard = 'Heard';
// var i = 0;
//
// debugger;
// while(i < card.length){
//     if(card[i] === 'Spade'){
//         alert(currentCard);
//     }else{
//         alert('not Spade');
//     }
//     i++;
// }

// var i = 3;
// debugger;
// while (i) {
//     alert( i );
//     i--;
// }
var vacationSpots = ['Paris', 'New York', 'Barcelona'];

for (var i = vacationSpots.length - 1; i >= 0; i--) {
    console.log('I would love to visit ' + vacationSpots[i]);
}







