// # Test - Programming Basics 

// ## Test Instructions 
// * Work from the `index.js` file provided in this repository.
// * Follow the instructions below to complete the test. **Important**: Make sure that the *names* of your variables/functions match the names in the instructions below.
// * All your functions should return a value.
// * Good luck!

// ### Conditional Algorithms 

// #### 1. Los or New?
// Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.


let nameOfCity = (String) => {
    

if ((String.substring(0,3) == "New") || (String.substring(0,3) == "los")) {
 return String;  
}
else {

    return "_The city name does not begin with Los or New_";
}

};
console.log(nameOfCity('New York')) 
console.log(nameOfCity('los angeles'))
console.log(nameOfCity('London') )
// ````

// #### 2. isDivisible?
// Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.


let isDivisible = (int) => {
    if (int % 100 === 0) {
        return true;
    }
return false;
}

// ##### Examples
// ````javascript
console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(700));
// ````

// #### 3. Missing Angle
// Create a function named "_missingAngle_" which takes two angles of a triangle as arguments, and classifies the missing angleas either acute, right or obtuse. 
// **Note**: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90°  (but less than 180°). 

// ##### Examples
// ````javascript
// missingAngle(11, 20) ➞ 'obtuse' // remaining angle is 149°)
// missingAngle(27, 59) ➞ 'obtuse'
// missingAngle(135, 11) ➞ 'acute'
// missingAngle(45, 45) ➞ 'right angle'
// ````

// #### 4. What's the weather?
// Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

let weather = true;

let isRaining = (weather)? "_wet day - you need an umbrella_" :  "_dry day - leave your umbrella at home_";

// ##### Example
// ````javascript
console.log(isRaining)// ````

// ### Loops 

// #### 1. Sequence
// Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

let geometricalSequence = () => {

    count = "";
    for (let i = 0; i <= 9; i++) {

    count += ( Math.pow(2, i) + ", " );

        
    }
    return count;
}
console.log(geometricalSequence())
// ##### Example

// ````javascript
// geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'
// ````

// #### 2. Multiples
// Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

let multiplesOfThree = () => {
   let count = "";
    for (let i = 1; i <= 5; i++) {
        count += i * 3 + ", " 
    }
    return count;
}

// ##### Example
// ````javascript
console.log(multiplesOfThree()) 
// ````

// ### Math 

// #### 1. You've got the power
// Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

let powerOf = (int) => {
   console.log(Math.pow(int, int));
}

// ##### Examples
// ````javascript
powerOf(3)
powerOf(4) 
// ````

// ### Problem Solving 

// #### 1. How many? 
// Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string. 

let vowelCount = (String) => {

    let vowel = ("A, a, E, e, I, i, O, o, U, u");

let vow = 0


for (let i = 0; i < String.length; i++) {
    let element = String[i];
    if (vowel.indexOf(element) > -1) {
        vow++;
    }
}
return vow ;


}


console.log(vowelCount("hello"))
console.log(vowelCount("test") )
console.log(vowelCount("fbw") )


const aArray = ["mango", "grapes", "ananas", "banana", "apple", "oranges"]

const bArray = aArray.map(function (value, index,) {

    return index + ": " + value + "! " +  this.age;
    
}, {
    name : "RUdhesh",
    age: 30,
    city : "Berlin"
})

console.log(bArray);

// ans

// [
//     '0: mango! 30',
//     '1: grapes! 30',
//     '2: ananas! 30',
//     '3: banana! 30',
//     '4: apple! 30',
//     '5: oranges! 30'
//   ]


