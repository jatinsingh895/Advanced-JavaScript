// function sayHello()
// {
//     let you=prompt("what's your name?");
//     console.log("hello",you+"I")
// }
// sayHello();
// let varContainingFunction=function(){
//     let varInFunction="I'm in a function.";
//     console.log("hi there!",varInFunction);
// };
// varContainingFunction();
// function TextDecodersStream(para1,para2)
// {
//     return para1+""+para2;
// }
// const arg1="argument1";
// const arg2="argument2";
// tester(arg1,arg2);
// const prompt = require("prompt");
// function add() {
//     prompt.start();
//     prompt.get(
//         ["num1", "num2"],
//         function (err, res) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 var sum =
//                     parseFloat(res.num1) +
//                     parseFloat(res.num2);
//                 console.log( "Sum of " +
//                         res.num1 + " and " +
//                         res.num2 + " is " + sum
//                 );
//             }
//         }
//     );
// }
// add();
// function addNumbers(num1, num2) {
//     return parseInt(num1) + parseInt(num2);
// }
// const result = addNumbers("10", "20");
// const result2 = addNumbers();
// const result3 = addNumbers("6","16");

// console.log(result);

// special function
// let doingArrowStuff = x => console.log(x);
// let addtwoNumbers = (x,y) => console.log(x+y);
// let sayHi =() => console.log("hi");
// const arr = ["squirrel","alpaca","buddy"];
// arr.forEach(e=> console.log(e));
// spread opearator
// let spread = ["so","much","fun"];
// let message = ["javascript","is",...spread,"and","very","poweerful"];
// console.log(message);
// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr = [5,9];
// addTwoNumbers(...arr);
// function addFourNumbers(x,y,z,a)
// {
//     console.log(x+y+z+a);
// }
// let arr1 = [5,9];
// let arr2 = [6,7];
// addFourNumbers(...arr1,...arr2);
// REST PARAMETER
// function someFunction(param1,...param2)
// {
//     console.log(param1,param2);
// }
// someFunction("hi","there!","how  are you");
// RETURNING FUNCTION VALUE
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
let resultsArr = [];
for (let i = 0; i < 10; i++) {
    let result = addTwoNumbers(i, 2 * i);
    resultsArr.push(result);
}
console.log(resultsArr);
