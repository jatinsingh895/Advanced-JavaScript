// concurrency
// CALL BACKs- function that take another function as an arrgument
// function doSomething(callback) {
//     callback();
// }

// function sayHi() {
//     console.log("hi!");
// }
// doSomething(sayHi);
// function judge(grade) {
//     switch (grade) {
//         case "A":
//             console.log("You get an", grade + ":", "Amazing!");
//             break;
//         case "B":
//             console.log("You get a", grade + ":", "Well Done");
//             break;
//         case "C":
//             console.log("You get a", grade + ":", "Good effort!");
//             break;
//         case "D":
//             console.log("You get a", grade + ":", "Keep trying!");
//             break;
//         default:
//             console.log("Invalid grade.");
//     }
// }

// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case (score >= 90):
//             grade = "A";
//             break;
//         case (score >= 80):
//             grade = "B";
//             break;
//         case (score >= 70):
//             grade = "C";
//             break;
//         case (score >= 60):
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);
// promise -> when resolve() is called; promise is presumed to be succesful and and whatever is between the arrows is returned and used as a input.
// let promise = new Promise(function(resolve, reject) {
//     let x = 20;
//     if (x > 10) {
//         resolve("x");
//     } else {
//         reject("too low");
//     }
// });

// promise.then(function(value) {
//         console.log("Success:", value);
//     })
//     .catch(function(error) {
//         console.log("Error:", error);
//     });
// const promise = new Promise((resolve, reject) => {
//     resolve("success!");
// });

// promise
//     .then(value => {
//         console.log(value); 
//         return "we";
//     })
//     .then(value => {
//         console.log(value); 
//         return "can";
//     })
//     .then(value => {
//         console.log(value); 
//         return "chain";
//     })
//     .then(value => {
//         console.log(value); 
//         return "promises";
//     });
// ASYNC AND AWAIT



