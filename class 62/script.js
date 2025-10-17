for (let i = 0; i < 3; i++) {

let rand=Math.random()
console.log(rand);
let first, second, third;
if(rand<0.33){
    first="Crazy";
}
else if(rand<0.66 && rand>=0.33){
    first="Amazing";
}
else{
    first="Fire";
}

let rando=Math.random()
console.log(rando);
if(rando<0.33){
    second="Engine";
}
else if(rando<0.66 && rando>=0.33){
    second="Foods";
}
else{
    second="Garments";
}


let random=Math.random()
console.log(random);
if(random<0.33){
    third="Bros";
}
else if(random<0.66 && random>=0.33){
    third="Limited";
}
else{
    third="Hub";
}

console.log(`${first} ${second} ${third}`);

}