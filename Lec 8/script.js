let sentence = "The quick brown fox jumps over the lazy dog";
let word = 'hello'
let anword = `lemon ${word}`

console.log(typeof sentence);
console.log(typeof word);
console.log(anword);

// Mutable 
// Immuteable 

let arr = [353,43,4344,5443]
arr.pop()
console.log(arr);

let num = 10 ; 
num = 5; 

let arr1 = [353,43,4344,5443]
arr1.reverse();
console.log(arr1);

let sen = "I am a boy"
sen.toLowerCase()
console.log(sen);

sen = "Word"
console.log(sen);

let lowercase = sen.toLowerCase()
console.log(sen);
console.log(lowercase);

lowercase = sen.toUpperCase()
console.log(sen);
console.log(lowercase);

sen = "        ALi iS a Boy     "
lowercase = sen.trim() //trim  trimStart   trimEnd
console.log(sen);
console.log(lowercase);

let newstr = sen.replace("iS", "am");
console.log(newstr);

console.log(sen.split(" "));

console.log(sen.includes("an"));

console.log(sen.indexOf("aL")); // first occurence

let slice = sen.slice(2,9) // end not included 
console.log(slice);

console.log(sen.startsWith("A"));
console.log(sen.endsWith("boy"));


let arr2 = [1,3,4,63,4]
arr2.push(67)
console.log(arr2);

arr2.pop()
console.log(arr2);

arr2.unshift(67)
console.log(arr2);

arr2.shift()
console.log(arr2);

arr2.forEach((val , index)=>{
    console.log(val * 9);
    
})

console.log(arr2.reverse());

 let newarr2 = arr2.map((val , index)=>{
    console.log(val + "Hello");
    
   return val > 3
    
})

let fil = arr2.filter((value,index)=>{
    return value % 2 === 0 
})
console.log(fil);
// 1   4   8 
let array = [1,3,4,63,4]
let res = array.reduce((init , current , index)=>{
     return init + current
},0)

console.log(res);