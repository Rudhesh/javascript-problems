
// let error = 5;

// let message = (error > 1) ? "error found" : ""

// console.log(message)

// //object 

// const age = 98;

// // object literals

// const user = {
//     firstName: "Rudhesh",
//     lastName: "Dhote",
//     email: "rudheshdhote@gmail.com",
//     getAges() {
//         console.log(this.email)
//     }
// };
// user.getAges();

// console.log(user.lastName) //dot notation


// //synchronous

// function f2() {
//     for (let i = 1; i < 2; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000 * i)
//     }
// }
// f2()
// console.log("ende")
// //asynchronous

// function show() {
//     console.log("i ma show function");
// }

// function geeky(callback) {
//     callback()
// }
// geeky(show)

// console.log("end")



// let = i;
// console.log(i)
// for (var i = 0; i < 6; i++) {
//     console.log("hello", i)
// }

// let text = "";
// for (let i = 0; i < 20; i++) {
//     if (i % 3 == 0) {

//         continue; //skipping things
//         break;
//     }
//     text += i
//     console.log("!!!!!hello world", i)
// }

// console.log(text)


// const array = [
//     { id: 1, username: "foo", active: true },
//     { id: 1, username: "bar", active: false },
//     { id: 1, username: "tar", active: true },
//     { id: 1, username: "foo", active: false },
//     { id: 1, username: "lar", active: true },
//     { id: 1, username: "car", active: false },
//     { id: 1, username: "mar", active: true },

// ]

// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i])
// }

// for (let i = array.length; i--;) {
//     console.log(array[i].active, array[i])
// }

// for (; ;) {
//     console.log("dumb")
//     break;
// }



// // for (let i = 0; i < array.length; i++) {
// //     const element = array[i];

// //     if (element.active === false) {
// //         console.log("oh, noooo")
// //         break;
// //         continue;
// //     }
// // const message = `this ${element.username} is pass the exam
// //                  ${element.active} `
// // console.log(message)
// // }

// // function

// let myAge = "108";
// let middle = parseInt(myAge) / 2;
// console.log(middle)

// //normal function / function declaration / function statement

// function calculateRectangleArea(width, height) {
//     return width * height;
// }
// console.log(calculateRectangleArea(4, 6))


// //arrow function

// const rectangleArea = (width, height) => {
//     console.log("Area calculating...");
//     return width * height;
// }
// rectangleArea(3, 50)
// //  area = rectangleArea(3,5);
// //  console.log(area)


// //implicit "return"

// const format = message => message;

// console.log(format("hello all of you"))

// const sum = (a, b) => a + b;
// console.log(sum(20, 5))

// //function can take in  other function as argument!!!!


// const printCurrentTime = () => {
//     const currentTime = new Date().toISOString().slice(11, 19)
//     console.log(currentTime);
// }

// setTimeout(printCurrentTime, 3000)

// printCurrentTime()
// printCurrentTime()
// printCurrentTime()
// printCurrentTime()


// //function can return function

// function rng(maximum) {
//     return function () {
//         return Math.floor(Math.random() * maximum) + 1;
//     }
// }

// const randomNum = rng(5)
// const result = randomNum()
// console.log(result)


// //spread syntax

// const num2 = [065, 089, 066, 065, 066, 085];

// console.log(Math.max(...num2))


// const newNumber = 3
// let numberStorage = [1, 3.4, 5];
// number = [newNumber, ...numberStorage]

// console.log(number);

// // rest syntax

// function sendMessage(username, message, ...args) {
//     if (args.length > 0) {
//         console.error("TOO many argument, remove extra", args)
//     }
//     console.log(`${username} : ${message}`)
// }
// sendMessage("first", "mushrum", "Snake", "snake")


// //object destructuring

// const user1 = { id: 11, username: "cool", email: null };

// const { id, username } = user1;

// console.log(username)

// const printUsername = ({id:uid, username}) => {console.log(uid, username)}
// printUsername(user1)


// const fruit = ["apple", "banana", "ananas", "mango", "papaya"];
// const [bestFruit, goodFruit, ,...yellowFruit ] = fruit;

// console.log(yellowFruit)



function pokemon(name, hp, critical_attack, lowest_attack, highest_attack) {
    this.name = name;
    this.hp = hp;
    this.critical_attack = critical_attack;
    this.lowest_attack = lowest_attack;
    this.highest_attack = highest_attack;   
}
var pokeChoice = {
    Charizard: new pokemon("Charizard", 90, 30, 1, 15),
    Blastoise: new pokemon("Blastoise", 95, 28, 1, 14),
    Venasaur: new pokemon("Venasaur", 100, 26, 1, 13)
};

function player(isComputer, name, pokemon) {
    this.isComputer = isComputer;
    this.name = name;
    this.pokemon = pokemon;
}
player.prototype.attack = function() {
    var uhigh = this.pokemon.highest_attack
    var ulow = this.pokemon.lowest_attack
    return Math.round(Math.random().toFixed(1)*uhigh)
}

var user = new player("User", "Arhum", pokeChoice.Charizard);
if(pokeChoice.hasOwnProperty(user.pokemon.name)) {
    delete pokeChoice[user.pokemon.name];
}

var comp_choice = function() {
    var pokeKeys = Object.keys(pokeChoice);
    var pokeAmt = pokeKeys.length;
    return pokeChoice[pokeKeys[Math.round(Math.random() * (pokeAmt-1))]]
}
var comp = new player("Computer","Red", comp_choice());    

console.log("rudesh",user.attack())
console.log("Computer",comp.attack())


function random() {
   let e = Math.floor(Math.random() * 10)
   return e
}
console.log(random())

let nameArray=["Pikachu", "Bulbasaur", "Eevee", "Charmander", "Squirtle", "Togepi", "Vulpix", "Ponyta", "Blastoise", "Snorlax", "Igglybuff", "Mew"]


function picture(name){
    let pokemon = nameArray.find(element => element.includes(name) )
    return pokemon
    }
    console.log(picture(""))