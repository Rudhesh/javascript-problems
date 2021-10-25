// const ourClass = [
//     'Abdul', 'Alexandru', 'André', 'Carsten', 'Mawi', 'Ferdinand', 'Joseph', 'Kai', 'Kalaya', 
//     'Karin', 'Khushal', 'Lars', 'Lea', 'Maria', 'Mario', 'Maxie', 'Ronnie', 'Rudesh',
// ];
// function randomizeClass(array) {
//     const randomizedClass = [];
//     const originalLength = array.length;
//     for (let i = 0; i < originalLength; i++) {
//         const number = Math.floor(Math.random() * array.length);
//         randomizedClass.push(array.splice(number, 1));
//     }
//     return randomizedClass;
// }
// console.log(randomizeClass(ourClass));

let randomizeClass = [
    [ 'Mario' ],     [ 'Rudesh' ],
    [ 'Lea' ],       [ 'Joseph' ],
    [ 'Ferdinand' ], [ 'Alexandru' ],
    [ 'Khushal' ],   [ 'Abdul' ],
    [ 'Lars' ],      [ 'Kalaya' ],
    [ 'Mawi' ],      [ 'Karin' ],
    [ 'Maxie' ],     [ 'Kai' ],
    [ 'Maria' ],     [ 'Carsten' ],
    [ 'Ronnie' ],    [ 'André' ]
  ]

//   randomizeClass.sort()
//   console.log(randomizeClass)

randomizeClass.sort((a,b) => {

    if (a < b) { return -1}
    if (a === b) {return 0}
    return 1
});
console.log(randomizeClass)


const items = [
    
    {name: "rudes", score: 4},    
    {name: "rudeh", score: 5},
    {name: "rudsh", score: 55},
    {name: "ruesh", score: 7},
    {name: "rdesh", score: 9},
    {name: "udesh", score: 10},
    {name: "rodes", score: 9},
    {name: "rupdc", score: 3},

]

items.sort((a,b)=> {
    // console.log([a,b])
    // if (a.score > b.score){return 1;}
    // if (a.score === b.score) {return 0;}
    // return -1
   return a.score - b.score
})

console.log(items)



let ourClass = [
    [ 'Mario' ],     [ 'Rudesh' ],
    [ 'Lea' ],       [ 'Joseph' ],
    [ 'Ferdinand' ], [ 'Alexandru' ],
    [ 'Khushal' ],   [ 'Abdul' ],
    [ 'Lars' ],      [ 'Kalaya' ],
    [ 'Mawi' ],      [ 'Karin' ],
    [ 'Maxie' ],     [ 'Kai' ],
    [ 'Maria' ],     [ 'Carsten' ],
    [ 'Ronnie' ],    [ 'André' ]
  ]

ourClass.sort(()=> {
    return 0.5 - Math.random();
})
console.log(ourClass)


// ---------------

function getPrint() {
    return function(messege) { console.log(">" + messege)
        
    }
}

const myPrint = getPrint();
myPrint("Rudhesh")

getPrint()("Look, no variable");


//------------------------


const msg = "Thanks";
// function PrintMessage() {
//     console.log(msg)console.log(user instanceof User1)
// }

// PrintMessage();

//-------------------

function foo() {
    let massege = "i am on"
    function bar() {
        console.log(massege);

    }
    return bar;
}

foo ()()


//------------------

function outer(outerparams) {
    const outerVariable = 52

    return function inner(){
        console.log(outerparams, outerVariable)
    }
}

const newFunction = outer("Banana")

newFunction()