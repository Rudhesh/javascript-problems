// looping through an Array 

const names = ["XiaoXiao", "Alan", "Antero", 42, false]

names.forEach(function (thing) {
    console.log(thing + " is a " + typeof thing);
})

// converting

const musicians = [

    {id: 1, fullName: "loretta lynn"},
    {id: 2, fullName: "Etas Tonne"},
    {id: 3, fullName: "Django Reinhardt"},
    {id: 4, fullName: "Billie Holiday"},

]

const musicianName = musicians.map(function (thing) {
    return thing.fullName + "___" + thing.id;
})

console.log(musicianName);


const colors = ["lal", "hara", "Pila", "nila", "kala"]

const firstLetters = colors.map(function (x) {
    return x[0]+x[3]
})
console.log(firstLetters);




// const names1 = ["tim", "jim", "gim"]

// const fLetter = names1.map(oneName => oneName[0]);
// console.log(fLetter);



const names1 = ["tim", "jim", "gim"]


const fLetter = names1.map((oneName) => {return oneName.toUpperCase()});
console.log(fLetter);


// const users = [

    
//     {id: 1, fullName: "loretta lynn", role: "musician"},
//     {id: 2, fullName: "Etas Tonne", role: "artist"},
//     {id: 3, fullName: "Django Reinhardt", role: "artist"},
//     {id: 4, fullName: "Billie Holiday", role: "musician"},

// ]

// const musicians = users.filter(function (user) { 
//     if(user.role === "artist") {
//         return true;
//     }
//     return false;
// })

// console.log(musicians)

// // const musicians = users.filter( (user) => { 
// //     if(user.role === "artist") {
// //         return true;
// //     }
// //     return false;
// // })

// // console.log(musicians)


// reducing
// .reduce()
const score = [1,2,1,2,3,4,3,4,6,4,65,7,9,0,]
const total = score.reduce(function (accumulator, current) {
    return accumulator + current;
})
console.log(total)

// const score = [1,2,1,2,3,4,3,4,6,4,65,7,9,0,]
// const total = score.reduce(function (accumulator, current) {
//     console.log("function us running" , accumulator, current);
//     return accumulator + current;
// })
// console.log(total)


// const names = ["jim", "gim", "rim" , "vim"]

// const reducer = function (accumulator, current) {
//     return accumulator +"___"+ current;
// }

// const joined names.reduce(reducer);
// console.log(joined)

const shoppingBasket = [
    {id: 1, price : 3.20},
    {id: 2, price: 3.22},
    {id: 4, price: 4}
]

const startingPrice = 0;
const total1 = shoppingBasket.reduce(function (accumulator, current) {
    console.log(current)
    return accumulator + current.price;
}, startingPrice)
console.log(total1)

// const array2D = [[1,2], [3,4], [5,6], [7,8]];

// const flat = array2D.reduce(function(accumulator, current){
//     return accumulator.concat(current);
// })

// console.log(flat)

// const startingPrice = 0;
// const total = shoppingBasket.reduce(function (accumulator, current) {
//     // console.log(current)
//     return accumulator + current.price;
// }, startingPrice)
// console.log(total)

// const array2D = [[1,2], [3,4], [5,6], [7,8]];

// const flat = array2D.reduce((acc, current)=> acc.concat(current))

// console.log(flat)

// callback

const product = [

    {active: true, id: 40, price: 2252},
    {active: false, id: 42, price: 2232},
    {active: false, id: 40, price: 2262},
    {active: true, id: 41, price: 2212},
    {active: true, id: 44, price: 2212},
    {active: false, id: 40, price: 2212},

]

function myFilter(array, testCallback) {
    const passed = [];
    for (const element of array){
        if (testCallback(element)){
            passed.push(element);
        }
    }
    return passed;
}
console.log(product)


const filtered = myFilter(product, function (product) {
    if(product.active){return true;}
    return false;
})
console.log(filtered)

const onlyExpensive = myFilter(product, function (product) {
    if(product.price > 2250){
        return true;
    }
})
console.log(onlyExpensive)


// for (let i = 0; i < 100; i++) {
// if (i % 15 === 0) {console.log("fizzbuzz")} 
// if (i % 3 === 0) {console.log("fizz")}
// if (i % 5 === 0) {console.log}("buzz")
// }
// else


// review

const users = [

    
    { fullName: "loretta lynn", role: "musician"},
    { fullName: "Etas Tonne", role: "artist"},
    { fullName: "Django Reinhardt", role: "artist"},
    { fullName: "Billie Holiday", role: "musician"},

]

// users.forEach(function (person) {
//     console.log(person.fullName)
// })

// function full(obj) {
//     // users.forEach(function (person) {
//         console.log(obj.fullName)
//     // })
// }
// users.forEach(full)

//MAP

const people = users.map(function (person, index, array) {
    if (index === array.length - 1) {
        return null
    }
    return person
})

// console.log(users)
console.log(people)


// filter
// const peoples = [
//     { name: "Susanne Pelger",       dob: null },
//     { name: "Dan-E. Nilsson",       dob: null },
//     { name: "E.O. Wilson",          dob: "June 10, 1929" },
//     { name: "Rachel Carson",        dob: "May 27, 1907" },
//     { name: "Charles Henry Turner", dob: "February 3, 1867" },
//   ];

// const filtereds = peoples.filter(x => !x.dob)
// console.log(filtereds)

// const filteer = peoples.filter(x => !x.dob).map(p => p.name);
// console.log(filteer)

const people2 = [
    { name: "Susanne",       dob: null },
    { name: "Dan-E. Nilsson",       dob: null },
    { name: "E.O. Wilson",          dob: "June 10, 1929" },
    { name: "Rachel Carson",        dob: "May 27, 1907" },
    { name: "Charles Henry Turner", dob: "February 3, 1867" },
  ];

  function showPerson(person) {
      console.log(person.name.toUpperCase())
  }

  people2.forEach(showPerson);