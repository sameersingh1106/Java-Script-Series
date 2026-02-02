const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop for arrays

const programming = ["js", "rb", "py", "java", "cpp"]

// for(const key in programming){
//     console.log(key);
// }// here only give keys as output in array

for(const key in programming){
    console.log(programming[key]);
} //  now value will respond as output



