let name = "Spiderman";
let age = 28;
console.log("My name is " + name);
console.log(`My name is ${name} and my age is ${age}`);

let address = "New York";
const person = {
  name: "Faseeh",
  age: 21,
  address: "Gujrat",
};

person.province = "Punjab";

console.log(person);
console.log(person.name);
console.log(person["age"]);
console.log(person.province);

delete person.address;
console.log(person.address);

for (let key in person) {
  console.log(key + ":" + person[key]);
}

const books = {
  book1: "Phy",
  book2: "Maths",
  urdu: {
    urdu1: "Urdu A",
    urdu2: "Urdu B",
  },
  english: {
    english1: "Urdu A",
    english2: "Urdu B",
  },
};

for(let key in books.urdu){
    console.log(books.urdu[key])
}

console.log(books.urdu.urdu1);

const obj = {
  name: "Name",
  age: 19,
  arr: [],
  greet: function () {
    console.log("Hello From Object");
  },
};

obj.greet();
console.log(JSON.stringify(person));
let json = JSON.stringify(person);
let parsed = JSON.parse(json);
console.log(parsed)

console.log(this)

const objThis = {
    name: "Ali",
    fun: function () {

        const a = function(){
            console.log(this)
        }
        a();
    }
}

let b = objThis.fun();