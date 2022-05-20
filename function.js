// 函式 Function


// function 宣告 函式陳述式
// function add(a,b){
//     return a + b;
// }
// add (1,2);
// let aPlusB = add(1,2);
// console.log(aPlusB);



// 表達運算式 Expression
let substract = function(a,b){
    return a-b; 
};
substract(4,2);


// 箭頭函式 Arrow function
let multiply = (a,b) => {
    return a * b; 
}

let multiply2 = (a, b) => a * b //自帶return

let print = str => console.log(str); //一個參數

(str => console.log(str)('hi'));


// 
(function (a, b) {
    return a / b ;
})(4, 2);

((a,b) => {
    return a + b;
})(1,2);


