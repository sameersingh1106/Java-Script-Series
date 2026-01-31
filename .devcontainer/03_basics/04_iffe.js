//IFFE

// function chai(){
//     console.log(`DB connected`);
// }() // error find, no execution

(function chai(){ //named IFFE
    console.log(`DB connected`);
})(); //now after using IFFE it will respond

(
    (name) => { //unnamed IFFE
        console.log(`DB CONNECTED TWO ${name}`);
    }
)('sameer') // no error as ; used after first function


