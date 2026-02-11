let arr = [ Number , String , true, {}, BigInt()]
arr = [34,23,2,"Ali","Zain",true]


console.log(arr[2]);
console.log(arr[3]);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    
    
}

// map 
// reduce 
// filter 

arr.push("Sahil")
arr.push(false)

console.log(arr);

arr.pop(); // removes last elem of an array 

console.log(arr);

arr.shift(); // removes first elem of an array 

arr.unshift(55) // add elem on first index 


console.log(arr.length);

console.log(arr.at(10));

let rev = arr.toReversed()
console.log(rev);

console.log(arr.reverse());


// callback function 
numbers = [34,2,4,2,5,3];
numbers.forEach(function(value , index){
            //   console.log(value*3);
              console.log(index);
              
              
})

numbers.forEach((value, index)=>{
          console.log(value*3);
          
})

let names = ["ALi","Hamza","Jasim"]
names.forEach((value)=>{
        console.log(`Hello ${value}`);
        
})

let sentence = names.join(" , ");
console.log(sentence);

let newarr = names.concat(numbers)

console.log(newarr);



numbers = [34,2,4,2,5,3];
newarr = numbers.filter((value,index,arr)=>{
       return value >2 
})

console.log(newarr);


let numbers = [34,2,4,2,5,3];
numbers.map((value,index)=>{
    console.log(value);
    
})

 let res = numbers.reduce((prevVal , currentVal , index, arr)=>{
    return prevVal + currentVal;
},0)

console.log(res);