// class ClassName{
//     constructor(prop1,prop2){
//          //(this) keyword refers to the object it belongs to, so it is the  first property of the instance ClassName and classes are just some special function.
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1)
// console.log(obj.prop2)

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("Javascript",2.4,"brown","chihuahua");
// console.log(Dog.dogName)
// console.log(Dog.weight)
// console.log(Dog.color)
// console.log(Dog.breed)

class person{
    constructor(firstname,lastname)
    {
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
let p=new person("Jatin","Singh")
console.log(p.firstname)
console.log(p.lastname)
// METHODS

// function on a class are called methods while defining these methods we dont use the function keyword. we directly srtart with the name. 