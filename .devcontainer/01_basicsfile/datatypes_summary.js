// Primitive data types
const score= 100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id)==anotherId;

const heros=["shaktiman", "nagraj"];
let myObj={
    name: "hitesh",
    age: 22
}

const myfunction=function(){
    console.log("Hello World");

}
console.log(typeof scoreValue);

// ++++++++++

// Stack(Primtive data types) vs Heap(Non-primitive data types)

let myYoutubename="sameersingh"
let anothername=myYoutubename

console.log(anothername);
console.log(myYoutubename);