const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

//const myTotal = myNums.reduce((acc, curr)=> acc+curr,0)

// console.log(myTotal);

const shoppingCart =[
    {
        itemName: "py Course",
        price: 5999
    },
    {
        itemName: "Cs course",
        price: 4000

    }
]

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);