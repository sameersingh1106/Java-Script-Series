//singleton 

// object literals

const mySym = Symbol("key1")

const Jsuser= {
    "name": "Sameer",
    Age: 20,
    [mySym]: "mykey1",
    location: "Delhi",
    email: "sameerrisfn@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday","Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(typeof Jsuser[mySym])

// tips to freeze object so that no one can change

Jsuser.email="sameerrisfn@gmail.com"
Object.freeze(Jsuser)
Jsuser.email = "sameersinghh@gmail.com"
console.log(Jsuser);

Jsuser.greeting() = function(){
    console.log("Hello Jsuser");
}

Jsuser.greetingTwo() = function(){
    console.log(`Hello Jsuser, $(this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());