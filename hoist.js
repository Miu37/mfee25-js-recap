
//var提升
// console.log(a); //undefined
// var a =1 ;
// var被提升後會被初始化為undefined


//function 的提升
// b();
// function b(){
//     console.log('b');
// }

//let
// console.log(c); // let 沒有變數提升
// Cannot access 'c' before initialization
// let c=1; 

// var d=10;
// function test (){
//     console.log(d);
//     let d;
// }

// test();

const sweet = true;
const salty = false;

let result = sweet ? "甜" : "不甜";
console.log(result);
