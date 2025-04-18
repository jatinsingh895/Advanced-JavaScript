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
// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// let resultsArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2 * i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);
// RETURNING WITH ARROW FUNCTIONS today
// let addTwoNumbers=(x,y)=>x+y;
// let result=addTwoNumbers(12,15);
// console.log(result);
// let addTwoNumbers=(x,y)=>
// {
//     console.log("Adding...");
//     return x+y;
// }
// VARIABLE SCOPE IN FUNCTIONS
// SCOPE
// function testAvailability(x){
//     console.log("Available here:",x)
// }
// function testAvailability()
// {
//     let y="local variable";
//     console.log("Available here:",y)
// }
// testAvailability();
// console.log("not available here:",y);
// function doingstuff(){
//     if (true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingstuff();
// function doingstuff(){
//     if (true){
//         console.log(x);
//         var x="local";
//     }
// }
// doingstuff();
// function doingstuff(){
//     if (true){
//         console.log(x);
//         let x="local";
//     }
// }
// doingstuff();
// CONST SCOPE
// function doingstuff(){
//     if (true){
//         console.log(x);
//         constx="local";
//     }
// }
// doingstuff();
//Global Variable
// let globalVar = "Accessible anywhere";
// console.log("Outside function:",globalVar);
// function creatingNewScope(x){
//     console.log("Access to global vars inside function.",globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:",globalVar);

// let x="global";

// function doingStuff(){
//     let x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

//immediately invoked function expression(IIFE)
//define krte hi invoke kr skte hain
//example of primitive function
// (function() {
//     console.log("IIFE!");
// })();

//arrow function ko bhi as IIFE use kar sakte hain
// (()=> {
//     console.log("run right away");
// })();

//Recusive functions
// function getRecursive(nr) {
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);
//stack overflow ho rha toh this is because memory limited hai toh but chala ye infinite tkk hi hai
// function getRecursive(nr) {
//     console.log(nr);
//     if(nr>0){
//     getRecursive(--nr);
// }
// }
// getRecursive(3);

//changing the position of console
// function getRecursive(nr) {
    
//     if(nr>0){
//     getRecursive(--nr);
// }
//     console.log(nr);  
// }
// getRecursive(3);

// function logRecursive(nr){
//     console.log("Started function:",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//     }else{
//         console.log("done with function");
//     }
//     console.log("ended function:",nr)
// }
//     logRecursive(3);

//The performance of recursion is slightly worse than the performance of regular iteration.Iteration is faster.So if this causes bottleneck sitaution that would really slow down your application,then we might want to consider another approach

//Nested Functions
// function doOuterFunctionsStuff(nr){
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I can access outer variables:",nr);
//     }
// }
// doOuterFunctionsStuff(2);

//just another function example
// function outerFunction(nr){
//     doInnerFunction(nr);
//     function doInnerFunction(x) {
//         let z= 10;
//     }
//     console.log("Not accessible:",z);
// }
// outerFunction(2);

//Anonymous Function functions without name
// let functionVariable = function() {
//     console.log("Not so secret thought.");
    
// };
// functionVariable();

// //Function Callbacks=> passing a function as an arguement
// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside doFlexibleStuff:");
// }
// doFlexibleStuff(functionVariable);
//synchronous mtlb blocking code

//Built in Functions of js
//setTimeOut() is a special function that is executing a certain function after a specified amount of time that it will wait first.SetTimeOut() is one time execution
// let youGotThis = function () {
//     console.log("You're doing well!");
// };
// setTimeout(youGotThis,1000);

//setInterval()=>it will keep on executing it with the specified interval.Baar baar call karta hai terminate krne ke liye control c use krenge
// let youGotThis = function () {
//     console.log("You're doing well!");
// };
// setInterval(youGotThis,2000);


//Output Question
//Q1
//scope concept
// let val=10;
// function tester(val){
//     val+=10;
//     if(val<100) {
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
// console.log(val);

//Q2
// let testFunction = function(){
//     console.log("Hello");
// }();

// Q3
// (function (){
//     console.log("Welcome");
// })();

//Q4
// (function () {
//     console.log("Welcome");
// })();
// (function(){
//     let firstName ="Laurence";
// })();
// let result = (function() {
//     let firstName="Laurecnce";
//     return firstName;
// })();
// console.log(result);
// (function(firstName) {
//     console.log("My name is"+ firstName);
// })("Laurence");

//Q5
// var addFive1 = function addFive1(num) {
//     return num+2;
// };
// let addFive2 = (num) => num+2;
// console.log(addFive1(14));