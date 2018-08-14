// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// num = 2;
// function square (num){
//     return num * num;
// }
// square(num);
//
// num = 2;
// function sum (num){
//     return num + num;
// }
// sum (num);


// var first = 6;
// var second = 2;
// var third = 2;
//
// function result(){
//     return (first - second) % third;
// }
// result();
//
// var num = [1, 2, 3, 4];
// debugger;
//
// function day (num){
//     var arr = ['пн', 'вт', 'cр', 'чт'];
//     return arr[num -1];
// }
// day (num);


// arr = [1, 2, 3, -1, -2, -3];
//
// function isPositive(num) {
//     if(num >= 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// newArr = [];
// for (i = 0; i <= arr.length; i++){
//     if(isPositive(arr[i])){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// 2.  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// num = 2;
//
// function isNumberInRange(num){
//   if (num >= 0 && num < 10){
//       return true;
//   }else{
//       return false;
//   }
// }
// isNumberInRange(num);
//
//    // ИЛИ КРАТКО//
//
// num = 2;
// function isNumberInRange(num) {
//     return num > 0 && num < 10;
// }
// isNumberInRange(num);

// 3.  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
// arr = [1, 2, 11, 12, -1];
//
// function isNumberInRange(num){
//     return num >= 0 && num < 10;
// }
// newArr = [];
// for (i = 0; i <= arr.length; i++){
//     if(isNumberInRange(arr[i])){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);
// target = 4;
// arr = [1, 2, 3, 4, -5];
// newArr = [];
//
// function sum() {
//     return ((arr[i] + target) > 1)
// }
//
//     for(i = 0; i <= arr.length; i++){
//         if (sum(arr[i])){
//             newArr.push(arr[i]);
//         }
// }
//
// sum();
//
// console.log(newArr );

// 4.  Найдите все года от 1 до 2017, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// var a = 1235;
// b = a.toString();
//
//
// debugger;
// for(i = 0; i < b.length; i++){
//     sum = 0;
//     console.log(b[i]);
//     sum = sum + b[i];
//
// }
//
// console.log(sum);



// var array = [25, 58, 22, 27];
// var newArray = [];
//
// debugger;
//
// array = String(array).split(',');
// for(var i=0; i<array.length; i++){
//
//     var b = String(array[i]).split('');
//     var sum = 0;
//
//
//
//     for( var j = 0; j < b.length; j++){
//
//         sum = sum + Number(b[j]);
//         if(sum === 9){
//             newArray.push(array[i]);
//         }
//     }
// }
// console.log(newArray);


// array = [12, 13, 14]; //=12
//
// debugger;
//
// /*эта сфункция принимает в себя массив цифр и возвращает массив строк*/
// function getArrayOfStrings(arrayNumbers){
//     var arrayStrings = String(arrayNumbers).split(',');//['12','13','14']
//     return arrayStrings;
// }
//
// /*эта функция принимает в себя строку в виде цислаб например '12' и возвращает их сумму*/
// function digitsSum(numberString) { //['']
//     var sum = 0;
//     var digits = String(numberString).split(''); //['1','2'.....]
//     for (var j = 0; j < digits.length; j++) {
//         sum = sum + Number(digits[j]);
//     }
//
//     return sum;
// }
//
// var arrayOfStrings = getArrayOfStrings(array);//получила массив строк типа ['12','13']
// var allSum = 0;
// for (var i = 0; i<arrayOfStrings.length; i++) {
//     var sumOfcurrentString = digitsSum(arrayOfStrings[i]);
//     allSum = allSum + sumOfcurrentString;
// }
// console.log(allSum);
// var result = [];
// function getDivisors(num) {
//
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             result.push(i);
//         }
//     }
// }
//
// getDivisors(6);
// console.log(result);
//
//
// function getDivisors(num) {
//
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             result.push(i);
//         }
//     }
//     return;
// }
//
// getDivisors(6);

// function getDivisors(num) {
//     for (var i = 2; i < num; i++) {
//         var result = [];
//
//         if (num % i === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
//
// var c = getDivisors(6);
// console.log(c);

// result = [];
//
// function getIntersection(arr1, arr2) {
//     // debugger;
//     for (var i = 0; i < arr1.length; i++) {
//             for (var j=0; j<arr2.length; j++){
//                     if(arr1[i] === arr2[j]){
//                         result.push(arr1[i]);
//                     }
//                 }
//         }
// }
// getIntersection([1, 2, 3], [2, 3, 4]);
//
// console.log(result);













