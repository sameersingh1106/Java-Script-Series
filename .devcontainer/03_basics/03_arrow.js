// const user = {
//     username: "Sameer",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website `);
//         console.log(this);
//     }
    
//  }
// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let Username = "Sameer"
//     console.log(this.Username);
// }
// chai()


// const chai = function(){
//     let username = "Sameer"
//     console.log.apply(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Sameer"
//     console.log(this.username);
// }

// const chai = ()=>{
//     let username = "Sameer"
//     console.log(this);
// }


// const addtwo=(num1,num2) => {
//     return num1 + num2
// } //basic arrow function

// const addtwo=(num1,num2) => num1 + num2 // implicit return

//const addtwo=(num1,num2) => {username} //  return undefined

const addtwo=(num1,num2) => ({username: "Sameer"}) // needs bracket for object return


console.log(addtwo(3,4))

// const myArray = [2,3,4,5,6]
// myArray.forEach()

