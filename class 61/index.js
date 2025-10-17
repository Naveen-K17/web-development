let random = Math.random()
console.log(random)
let a=prompt("Enter the first number");
let c=prompt("Enter the operation");
let b=prompt("Enter the second number");

let obj ={
    "+" :"-",
    "*" :"+",
    "-" :"/",
    "/" :"*",
}


if(random>0.1){
    alert(`the result is ${eval(`${a}  ${c} ${b}`)}`)
}

else{
    c=obj[c]
    alert(`the result is ${eval(`${a}  ${c} ${b}`)}`)
}