var val = 10;
var val = "ALi";
console.log(val);


val = 5;
val = "Name";
const pi = 3.14 ; 
// pi = 45;
console.log(val)

// 8 data types 

// Number 
// Boolean
// BigInt
// String
// undefined
// null

// Symbol
// Object 


let num = 10 ;
let newnum = 140.500;
let name = "ALi";
let newname= 'Sahil';
console.log(typeof num);
console.log(typeof newnum);
console.log(typeof name);
console.log(typeof newname);

 let bigval = BigInt(4574857495945848545454545);
 console.log(bigval);
  console.log( typeof bigval);

let res = true;
let pass = false; 
let newint = 4574857495945848545454545;
console.log(newint);

let myname; 
console.log(typeof myname);

myname = null; 
console.log(typeof myname);

myname = "ALi";

console.log(typeof myname);


res = 10+5; 
res = 10<=6
// && || ! 
console.log(res);

let val = 10;
let myval = "10";

// ==   .........  === 
// != ........ !==
console.log(val === myval);
console.log(val !== myval);

if(10 === 10){
    console.log("Equal");
    
}else if(10 < 5){
console.log("Smaller");
}

else{
    console.log("Not equal");
    
}
let x = 10;
switch (x) {
    case 2:
        console.log("I am 2");
        
        break;

         case 10:
        console.log("I am 10");
        
        case 11:
        console.log("I am 11");
        
        break;

    default:
        break;
}


for(let i = 1 ; i <= 10; i++){
    console.log(i);
    
}
let i = 1;
while (i<=10) {
    console.log(i);
    i++;
    
}
i = 1;
do {
    console.log(i);
    i++;
} while (i>=10);

function greet(){
    console.log("hello");
    
}
greet();

function sum (a,b){
     return a + b;
   
}

let ans = sum(10,20);
console.log(ans);

//arrow functions 

let myfunc = (a,b)=>{
    console.log("Hello");
    
      return a +b;
}

num = myfunc(10,7);
console.log(num);
