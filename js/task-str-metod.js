


// СТРОКОВЫЕ ФУНКЦИИ

// 1.  Дана строка 'js'. Сделайте из нее строку 'JS'.

// var str = 'js';
// console.log( str.toUpperCase() );

// 2.  Дана строка 'JS'. Сделайте из нее строку 'js'.

// var str = 'JS';
// console.log( str.toLowerCase() );

// 3.  Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

//   var str = 'я учу javascript!';
//
//     console.log(str.length);

// 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными

// var str = 'я учу js';
// console.log(str.substr(2, 3));
//
// console.log(str.substring(1, 5));
// console.log(str.substring(2, 5));
// console.log(str.substring(2, 6));
//
// console.log(str.slice(2, 6));
// console.log(str.slice(2, 5));

// 5.  Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str. В противном случае в переменную result запишем содержимое переменной str.
// var str = '123 123 1234';
// var n = 10;
// if(str.length > n){
//  var result;
//  console.log(result = str.substr(0, 10) )
// }else if(str.length < n){
//     console.log(result = str);
// }

// 6. Замени слово Света на слово Антон.
// var str = "I'm Sveta";
// result = str.replace('Sveta', 'Anton');
// console.log(result);

// 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
// var i = 'Я-учу-javascript!';
// result = i.replace(/-/g, '!');
// console.log(result);

// 8.Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
//  var str = 'я учу javascript!';
//  var result = str.split(' ');
//  console.log(result);

