// recursive functioN

function printLoop(message, times) {
    for (let i = times; i > 0; i--){
        console.log(message)
    }
    console.log("done")
}

printLoop("hihih", 5)


function loopPrint(message, times) {
    if(times === 0){
        // console.log(7 + "done")

        return 5 ;
    }
    console.log(message);
    loopPrint(message,times - 1);
}
loopPrint("Goodmorning", 6);

// factorial 4 = 1*2*3*4

function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}
console.log(factorial(4))

4*(3 * (2 * 1 * (1)))


// program to find the factorial of a number

// take input from the user
const number = 0

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}



// recursion tree like data

const filesystem = [{name : "Downloads"},
{name : "projects"},
{name : "oldProject1", children: [{name: "_notes", children: [{name: "_notes", children: [{name: "_notes"}]}]}]},
{name : "oldProject2"},
{name : "oldProject3"},
{name : "dci", children: [{name: "_notes"}]},
{name: "pictures"},
{name: "Document",children : [{name: "institute", children : [{name: "institute", }]}]},
{name: "Document",children : [{name: "institute", }]}
];

function printItem(item, level = 1) {
    const buffer = "    ".repeat(level);

    console.log(buffer + item.name)
    if(item.children) {
        // item.children.forEach((child) => {printItem (child, level + 1)})
        for (let i = 0; i < item.children.length; i++) {
            printItem(item.children[i], level + 1)
            
        }
    }

}


filesystem.forEach(function (item) {
    printItem(item)
})

function countdown(n) {
    if (!n) {
        return;
    }
    console.log(n)
    countdown(n - 1);
}
countdown(5)


function doSomething(func) {
    console.log("i accept a function");
    func()
}

function callback() {
    console.log("i am callback function")
}
doSomething(callback)


function first(callback) {
    const delay = Math.random()*5000;
    setTimeout(function () {
        console.log(Math.round(10))
        callback()
    },delay);
   
   }
  
function second() {
    console.log(2)
}

first(second)


// const printHello = () => {
//     console.log("hi, it is second later now")
//     setTimeout(function () {
//         console.log("Hello!");
//     }, 2000)
// }

// setTimeout(printHello, 4000);


// setTimeout(function () { console.log(1)}, 1000)
// setTimeout(function () { console.log(2)}, 2000)
// setTimeout(function () { console.log(3)}, 3000)
// setTimeout(function () { console.log(4)}, 4000)
// setTimeout(function () { console.log(5)}, 5000)
// setTimeout(function () { console.log(6)}, 6000)
// setTimeout(function () { console.log("hihihihi")}, 100)


// Write a JavaScript program to calculate the factorial of a number.

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(x) {
    {
        if (x === 0) {
            return 1;
        }
        return x * factorial(x -1)
    }
}
console.log(factorial(5))