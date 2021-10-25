// const user = {
//      user : "rudesh",

//     age : 51,

//     pet: ["peddi", "sweety"]
// }

// const users = [
//     { user : "rudesh"},

//     {age : 51},

//     {pet: ["peddi", "sweety"]}
// ]

// users.push(user);
// console.log(users);


// const blogPost = {
//     id: 1,
//     title: "today i learn object",
//     body: "object are...",
//     name: "Rudesh"
// };

const blogPost = [
    {id: 1},
{    title: "today i learn object"},   
{ body: "object are..."},
];

// blogPosts.splice(0, 1, "rock")
console.log(blogPost.body);
console.log(blogPost["name","id"]);

// const product = {

//     id: "66zte",
//     discribe: "kids toy",
//     price: "50000"
// }

// // product["price"] = 2344;

// console.log(typeof product.id);

// console.log(Array.isArray(product));

// delete product.id;

// console.log(product);


// const puppy = {

//     age: 3,
//     fName: "peddi",


// }

// puppy.color = "white";

// console.log(puppy)

// const identifier = "_id"
// const myGoat = {

//     name: "mura",
//     [identifier]: "tti677"

// }
// console.log(myGoat);


// function goatMaker(name,id, identifier) {
    
//     const goat = {
//         name: name,
//         [identifier]: id
//     };
//     return goat;
// }
// console.log(goatMaker("Rudesh", 4, "_id"));

// const pet = {

//     name : "The Notoriuous",

//     type : "Domestic",
//     makeNoise: function() {return "gimme me something"}
// }
// console.log(pet.makeNoise());




// const getQuote = function() { return "hello world";
    
// }
// const person = {
//     born : 1931,
//     name: "william",
//     getQuote1 : getQuote 
// }

// console.log(person.getQuote1)


// const joel = {

//     random: function () {return 0.812
        
//     }
//     toFixed: function (a,b) {

        
//     }
// }


// const animal = {

//     type: "deer",
//     horn: true,
//     charge: function () {

//     console.log("be careful, the " + animal.type + " is charging")
        
//     }
// };

// animal.charge();


// Arrow function
// const person = {
//     name: "John",
//     yearOfBirth: 2000,
//     age:function(){
//         const today = new Date();
//         const year = today.getFullYear();
//         console.log("Testing", this.name);
//         return this.age;
//     }
// };
// console.log("our person object has an age " + person.age())


// const computer = {
//     type: "laptop",
//     os: "SerenityOS"
// };

// function info(){
//     console.log(`This ${this.type} is running ${this.os}`)
// }

// computer.info = info;
// computer.info();


// const telephone = {

//     number: "3456777",
//     getNumber: function(){
//         return this.number;
//     }
// };

// // console.log(telephone.getNumber());
// const numberGetter = telephone.getNumber; 
// //unbound
// console.log(numberGetter());

// console.log(typeof numberGetter);


// numberGetter.bind(telephone);
// const boundFunction = numberGetter.bind(telephone);
// console.log(boundFunction())



// const pets = [
//     {name: "peddi", age: 16},

//     {name: "sweety", age: 16},

// ];

// function saySomething() {
//     console.log(`I am ${this.name} and I am ${this.age} year old `);
    
// }

// for (let i = 0; i < pets.length; i++) {
//     const pet = pets[i];

//     // const Bound = saySomething.bind(pet);
//     // Bound()
//     // console.log(pets)
        
//     }

    
// }

// const coordinates = {
//     x: 123,
//     y: 42,
//     z: 142,
//     getZ: function () { return this.z;
        
//     }
// };

// for (const key in coordinates) {
//     const value = coordinates[key];
//     console.log(key, value);
        
//     }

// const coordinates = {
//     x: 123,
//     y: 42,
//     z: 142,
//     getZ: function () { return this.z;
        
//     }
// };

// for (const key in coordinates) {
//     const value = coordinates[key];


//     //    if (typeof value === "function") {
//     //        value();
//     //    } 
// if (key === "x"){
//     console.log("the cordinates is y")
//     break;
// }
//        console.log(key, value);
//     }

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


// const cat1 = { name: "veera" , age: 4};

// const cat2 = { name: "veera" , age: 4};

// console.log(cat1.age === cat2.age);

// let objectsAreSame = true;

// for (const key1 in cat1) {
//     const value1 = cat1[key1];

//     for (const key2 in cat2) {
//         const value2 = cat2[key2];

//         if (key1 === key2) {
            
//            if (value1 !== value2) {
               
//             objectsAreSame = false;
//            }
//         }
//     }
// }
// console.log(objectsAreSame);





// const product = {

//     manufacture: "xaomi",

//     model: "NC-700",

//     rating: "okay",

//     ring() {
//         console.log("Ring a ding ding dong");
//     }
// };

// product.ring();
// console.log(product, product.ring())


// var countBits = (n) => {
//     n.toString(2).split("0").join("").length};

//     console.log(countBits(4))

// function sum_two_smallest_numbers (numbers) {  number=numbers 
//     number.sort(reverse=True)
//     a=number.pop()
//     b=number.pop()
//     return a+b
// }
    

//  console.log(sum_two_smallest_numbers([4,3,2,1]))


const animals = [':chicken', ':pig', ':sheep', ':rabbit2'];

for (const animal of animals) {
    console.log("Animal:", animal);
    
}

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];

    console.log("Animals:", animal)
    
}

let ani = animals.map(function (value, index) {
    return index  + " " +  value + "!" + " " + this.name ;
},

{ name: "veera" , age: 4});

console.log(ani);


const product = {

    manufacture: "xaomi",

    model: "NC-700",

    rating: "okay",

    ring() {
        console.log("Ring a ding ding dong");
    }
};

// const keys = Object.keys(product);
// console.log(keys);

const values = Object.values(product);
console.log(values);

// const entries = Object.entries(product);
// console.log(entries)

// nesting object

// console.log(library[0].author[0].fullName)

let firstName = "rudesh"

let test = firstName.toUpperCase()[0]

console.log(test)