const tinderUser = new Object()
const tinder = {}


// tinderUser.id = "123abc"
// tinderUser.name ="Sammy"
// tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Sameer",
            lastname:"Singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign{}
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = {
    
        id: 1,
        email: "h@gmail.com"
    
}

users[1].email
console.log(tinderUser);

// console.log(object.keys(tinderUser));
// console.log(object.values(tinderUser));
// console.log(object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('hasloggedIn'));

// 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

{
    name: "sameer",
    "coursename": "js in hindi",
    price: "free"
}
