// const maxChar = (str) => {

//     let obj = {};

//     for (let char of str)
//     (!obj[char])?obj[char]=1:obj[char]++;

//     let maxNum = 0;
//     let maxChart = '';

//     for (let char in obj)
//     {
//         if(obj[char] >= maxNum);
//         {
//         maxNum = obj[char];
//         maxChart = char;
//     }

// }
//     console.log(maxNum, maxChart);
// }

// maxChar("hellcdosdhiiiiiiivjsjvllo");





// let rev = (str) => {

//     let a = str.split('');
//     a.reverse();

// console.log(a.join(''));
// }
// rev("hellcdosdhiiiiiiivjsjvllo");




// const reverseInt = (num) => {
//     return -1 * parseInt(num.toString().split('').reverse().join(''));
// }

// console.log(reverseInt(-567))
// console.log(reverseInt(-90000))


// let num = ((a) => {

//     for (let i = 0; i < 16; i++) {

//         if (3 % i === 0 && 5 % i === 0) {

//             console.log("fizzbuzz");
//             i++
//         }

//         if (3 % i === 0) {

//             console.log("fizz");
//             i++
//         }

//         if (5 % i === 0) {

//             console.log("buzz");
//             i++

//         }


//     }

// //    if (i>num) break;
//     // else console.log(i)
// })
// (15)

// const unique = (str) => {

//     let obj = {};
//     for (
//         let i of str
//     )
//     (!obj[i]?obj[i]=1:obj[i]++)

//    for(let i in obj)
//    {
//        if (obj[i]>0) {
//            return true;
//        }
//    }

// }
// console.log(unique("Rudhesh"));




// // fizzbuzz

// let fizzbuzz = (num) => {

//     for (let i = 0; i <= num; i++) {

//         if (i % 3 === 0 && i % 5 === 0) {

//             console.log("fizzbuzz");
//         }
//         else if (i % 3 === 0) {

//             console.log("fizz");
//         } 
//         else if (i % 5 === 0) {
//             console.log("buzz");
//         }else {
//             console.log(i);
//         }

//     }
// }

// fizzbuzz(15)


// function spinWords(backward){

//     var sentence = "";
//     var separate = backward.split("");

//   for (let i = 0; i < separate.length-1; i--){
//     if (separate[i] >= 5){
//     sentence += separate[i].split("").reverse().join("");
//     }
//    else {
//    sentence += "" + separate[i];
//    }
//   }
//  return sentence;
//  }

//  spinWords("Hey fellow warriors");

// let num = (data) => {

//   let result = "";
//   for (let j = 0; j < data.length; j++) {

//     for (let i = 0; i < data[j][1]; i++) {
//     result += data[j][0];
//   }  
//   result += ", "
//   }
//   return result;
// }
// console.log(num([[1,10], [33,
// 5]]));
// console.log(num([[1,10]]));


// let num = (value, condition) => {

//   if (condition == "odd") {

//     remainder = 1;

//   }
//   else {

//     remainder = 0;
//   }
// result = 0;
//   for (let i = 0; i < value.length; i++) {
//     if (value[i] % 2 === remainder) {

//       result += value[i];
//     }

//   }
//   return result;
// } 

// console.log(num([1, 2, 3, 4, 5, 6], "odd"));
// console.log(num([1, 2, 3, 4, 5, 6], "even"));

// let talkingCalender = (date) => {

//   let year = date.slice(0, 4);

//   let month = date.slice(5, 7)-1;
//   let day = parseInt(date.slice(8));

//   totalMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

//   let suffix;
//   switch (day) {
//     case 1:
//     case 21:
//     case 31:  
//       suffix = "st"
//       break;
//     case 22:
//     case 2:

//       suffix = "nd"
//       break; 
//     case 3:
//     case 23:

//       suffix = "st"
//       break;

//     default:
//       suffix = "th"
//       break;
//   }  
// tResult =  [];
//   let result = day + suffix + ", " + totalMonth[month] + ", " + year;
//   tResult.push(result);
// let finalResult = tResult.map(function (value, index, array) {
//  return finalResult + " ! ";
// })
// };
// console.log(talkingCalender("2000/12/02"));
// console.log(talkingCalender("1990/11/22"));
// console.log(talkingCalender("2010/02/31"));
// console.log(talkingCalender("2002/06/30"));
// console.log(talkingCalender("2013/03/10"));



// function persistence(num) {
//   if (num.toString().length === 1) {
//    return 0; 
//   }

//   multiNum = 1
//  let str = num.toString().split("")
//  for (let i = 0; i < str.length; i++) {
//    multiNum *= parseFloat(str[i]);
//   //  console.log(multiNum)

//   }
//   return 1 + persistence(parseFloat(multiNum));
// }
// // persistence(999)
// console.log(
//   persistence(999),
//   persistence(39),
//   persistence(4)
// );

//high order function

let myColor = ["red", "green", "blue", "yellow", "brown", "orang", "pink"]

myColor.forEach(bestColor)

function bestColor(color) {
  console.log(`${color} is the best color`)
}

function creatMultiplier(x) {
  return function (y) {
    return x * y
  }

}

d = creatMultiplier(2)
console.log(d(2))

const add = (a, b) => a + b

const subst = (a, b) => a - b

const times = (a, b) => a * b

const calculator = (num1, num2, operator) => {
  return operator(num1, num2)
}

console.log(calculator(3, 3, add))

//callback function

const person1 = (friend, me) => {
  console.log(`hello ${friend}`)
  me()
}
const person2 = () => {
  console.log(`hello there `)
}

person1("Rudhesh", person2)


//closure

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a + b;
//     console.log(sum)

//   }
//   innerFun()
// }

// outerFun(10)

const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(sum)

  }
  return innerFun
}

let inner = outerFun(10)

// console.dir(inner)

inner()



// mutatin

let pets = [
  { name: "Meow", species: "cat", age: 2 },
  { name: "Bark", species: "dog", age: 3 },
  { name: "umo", species: "monkey", age: 3 },
]
pets.push({ name: "ooooh", species: "owl", age: 1 })
console.log(pets.push({ name: "ooooh", species: "owl", age: 1 })
)
// console.log(pets)

let ourTest = pets.map(nameOnly)

function nameOnly(x) {
  return x.age + 1
}

console.log(ourTest)


let name = {
  firstName: "Rudhesh",
  lastName: "Dhote",

}

let printFullname = function (hometown) {
  console.log(this.firstName + " " + this.lastName + hometown)
}

printFullname.call(name, "Betul")


let name2 = {
  firstName: "RR",
  lastName: "hh"
}

printFullname.call(name2, "Berlin")

printFullname.apply(name2, ["agra"])

// bind method

let info = printFullname.bind(name2, "mumbai")

info()

function arrayDiff(a, b) {
  return a.filter(function (x) { return b.indexOf(x) == -1; });
}
console.log(arrayDiff([1, 2, 2, 2, 3], [2, 3])) // == [1,3]


let i = 0;

// while (i < 101) {
//   i++;
//   if (i % 15 == 0) {
//     console.log("FIZZBUZZ")
//   }
//   else if (i % 3 == 0) {
//     console.log("FIZZ")
//   }
//   else if (i % 5 == 0) {
//     console.log("BUZZ")
//   }
//   else {
//     console.log(i)
//   }
// }

// // let i = 0;

do {

  if (i % 15 == 0) {
    console.log("FIZZBUZZ")
  }
  else if (i % 3 == 0) {
    console.log("FIZZ")
  }
  else if (i % 5 == 0) {
    console.log("BUZZ")
  }
  else {
    console.log(i)
  }

  i++;
}

while (i < 101);

function outer() {

  let count = 55; // persits in memory after outer is popped off the call stack

  function inner() {
    // count++;
    if (count > 50) {
      count++;

    }
    return count;
  }

  return inner;
}

// Creates the Closure
const addOne = outer();
console.log(outer()())
// Operates within its context or lexical environment
console.log(addOne()); // 1
console.log(addOne()); // 2
console.log(addOne()); // 3


function iqTest(str) {
  // let str1 = str.split("")
  return parseInt(str)

}


function tickets(peopleInLine) {

  ticketCost = 25;

  vasya = 0;

  for (let i = 0; i < peopleInLine.length; i++) {
    let person = peopleInLine[i];
    if (person - ticketCost > vasya) {
      return "yes"
    }
    return "no"
  }



}

console.log(tickets([25, 25, 50, 25, 25, 50]))


function longestWord(str) {
  let longestWord = ""
  let currentWord = str.split(" ")

  for (let i = 0; i < currentWord.length; i++) {
    const word = currentWord[i];
    console.log(word)
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }


  return longestWord;

}




console.log(longestWord(" am walk up early morning everyday everyday everydaysss"))

console.log(longestWord("i want to be a superman"))


//Arithmetic , geometric or on pattern

function mathSequences(num) {
  let arith = new Set()
  let geo = new Set()
  00
  for (let i = 1; i < num.length; i++) {

    let number1 = num[i] - num[i - 1]

    arith.add(number1)

    let number2 = num[i] / num[i - 1]

    geo.add(number2)


  }


  if (arith.size === 1) {

    return "Arithmetic"
  }

  else if (geo.size === 1) {
    return "Geometric"
  }
  else {

    return -1
  }

}

console.log(mathSequences([2, 4, 6, 8]))

console.log(mathSequences([3, 9, 27]))

console.log(mathSequences([2, 6, 6, 8]))

console.log(mathSequences([5, 25, 125]))

console.log(mathSequences([30, 60, 90]))


function capitalizeWords(str) {

  //   const words = str.split(" ")
  // let fword = ""
  //   for (let i = 0; i < words.length; i++) {

  //     const a = words[i].substr(1)
  //     const b = words[i].charAt(0).toUpperCase()
  //    console.log(`${b}${a}`)

  // }


  // let arr = words.map(x => {
  // a = x.charAt(0).toUpperCase() + x.substr(1)
  // return a
  // })
  // return arr.join(" ")

}


console.log(capitalizeWords("i like to drink coffee in the evening!"))

function unique(str) {
  //   let value = []

  //   letter = str.split("")


  //   for (let i = 0; i < letter.length; i++) {
  //     // console.log(value.indexOf(letter[i]))
  //     // value = [...value, letter[i]]
  //     if (value.indexOf(letter[i]) !== -1) {
  //      return false 
  //     }
  //     value.push(letter[i])
  //   }

  // return true
  // values = {}
  // for (let letter of str) {
  // if (values[letter]) {
  //   return false
  // }
  // values[letter] = "e"
  // }
  // return true

  // for (let i = 0; i < str.length; i++) {
  //   if (str.lastIndexOf(str[i]) === i) {
  //     return true

  //   }
  //   return false

  // }

  return new Set(str).size === str.length;



}
console.log(unique("anjsdrol"))

console.log(unique("qwertzuiopasdfghjkl"))

console.log(unique(["q", 2, "q"]))


function longestWord(str) {
  let longestWord = 0
  let currentWord = str.split(" ")
  max = [""]
  // max = [4,5,6,7,6,4,3,6]
  // console.log(max[max.length - 1].length)
  for (let i = 0; i < currentWord.length; i++) {
    const word = currentWord[i];
    if (word.length >= longestWord) {
      longestWord = word.length;
      // console.log(word)
      if (max[max.length - 1].length < word.length) {
        max = []

        max.push(word)
      }
      else {
        max = [...max, word]
      }
    }
  }


  return [...max];

}




console.log(longestWord(" am walk up early morning everyday everyday "))

console.log(longestWord("i want to be a superman superman"))


function ArraySum(num) {
  let array1 = []
  let sum1 = 0
  let arr = num.sort((a, b) => { return a - b })
  // return arr
  let largeNum = arr.pop()
  console.log(largeNum)
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i]

  }
  console.log(sum1)
  if (sum1 === largeNum) {
    return true
  }
  return false
}

console.log(ArraySum([1, 2, 3, 4, 5, 3, 4, 12, 3]))

console.log(ArraySum([1, 2, 3, 4, 5, 3, 4, 25, 3]))


let Products = [
  {
    title: "Iphone 8",
    company: "apple"
  },

  {
    title: "Iphone 7",
    company: "apple"
  },

  {
    title: "Iphone 6",
    company: "apple"
  },

  {
    title: "Galaxy",
    company: "samsung"
  },

  {
    title: "Note",
    company: "samsung"
  },

  {
    title: "N8",
    company: "Nokia"
  },

  
]


function getUnique(arr) {
  // let tempArr = arr.map(item => item.company);
  // return [...new Set(tempArr)];

  return [
    ...arr.reduce((acc, current) => {
      acc.add(current.company)
      return acc
    },new Set())
  ]
}

console.log(getUnique(Products))


let words = "My Name Is Rudhesh"

const wordCount = {};

let maxCount = "";

for (let i = 0; i < words.length; i++) {
  const count = words[i]
  if (!wordCount[count]) {
    wordCount[count] = 0
  }
  wordCount[count]++
  if (maxCount == "" || wordCount[count] > wordCount[maxCount]) {
    maxCount = count;
  }
}
console.log( maxCount + " : "+ wordCount[maxCount])


function secondValue(arr) {
  let value1 = [...new Set(arr)].sort((a,b) => a - b)
  // return value1
  return `${value1[1]},${ value1[value1.length-2]}`


  
}

console.log(secondValue([3,-4,5,6,766,7,7,8,3,4,5,]))

function testRepeat(num) {
  let maxRepeat = []
  for (let i = 0; i < num.length; i++) {
    return maxRepeat.indexOf(num[i])

    return num
    
  }
}


console.log(testRepeat([5,6,4,7,6,5,5,10]))

function isPrime(num) {

  if (num < 2) {
    return false
    
  }
  //modulus %

  console.log(Math.floor(Math.sqrt(num)))

for (let i = 2; i < num; i++) {
 if (num % i === 0) {
   return false
 }
  
}
return true
}
console.log(isPrime(1));
console.log(isPrime(8));
console.log(isPrime(11));
console.log(isPrime(121));
console.log(isPrime(127));
console.log(isPrime(567));

function countLetters(str) {
  
  let letter1 = str.split("")

  let arr1 = [];
  let count = 1;


 for (let i = 0; i < letter1.length; i++) {
   if (letter1[i] === letter1[i + 1]) {
     count++;
   }
   else {
     let value2 = `${count}${letter1[i]}`

     arr1.push(value2)
     count = 1
   }
 }
return arr1.join("")
}

console.log(countLetters("fffeeettzzpcvv"))

function palindrome(str) {
  let s = str.split(" ").join("")
  let words2 = str.split(" ").reverse().join("")
  // return words2
 
  // return s
 return words2 === s
}

console.log(palindrome("was is a car or a cat i saw"))

function multiply(...num) {
 
//  console.log(num)
//   let initial = 1
//  for (let i = 0; i < num.length; i++) {
//    let element = num[i];
//    if (element === 0) {
//     return 1
//    }
//    initial *= element

   
//  }
//  return initial
let arr = num.reduce((accu, current) => {
  return current ? current * accu : current + accu;
},1 )
return arr
}


console.log(multiply(4,2,2,))

console.log(multiply(4,5))

console.log(multiply(2,0,4,2))

// function example(a, b) {
  
//   return function (c, d) {
//    return function (e,f) {
      
//     console.log(a, b,c,d,e,f)
//     return a*c*e+ b*d*f
//     }
  
//   }
// }

// console.log(example(1,2)(3,4)(5,6))


// const date1 = new Date("May 27, 2021")
// const date2 = new Date("June 5, 2023")

// const getDays = (date1,data2) => 
// Math.round(Math.abs(date2 - date1 / (1000 * 3600 * 24
  
//   )))

// console.log(4,5,7,8.)

// const count = 10;

// function a() {
//   console.log(count)
//   const count = 7;
//   // console.log(count)
// }
// a()

miss = (arr) => {
  // let missArr=[];
  // let l = Math.max(...arr);
  // let startsWithZero = arr.indexOf(0) > -1 ? 0 : 1;
  // for(i = startsWithZero; i < l; i++) {
  //     if(arr.indexOf(i) < 0) {
  //         missArr.push(i);
  //     }
  let array12 = []
  let l = Math.max(...arr)
  // console.log(l)
  let start1 = arr.indexOf(0) > -1 ? 0 : 1
  // console.log(start1)
  for(i=start1; i < l; i++) {

    if (arr.indexOf(i) < 0) {
      array12.push(i)
      
    }
  }  
  return array12;

  }
 
console.log(miss([3,4,1,2,6,8,15]));
console.log(miss([1, 2, 3, 4, 6, 7, 8, 9, 10]))// ➞ 5

console.log(miss([7, 2, 3, 6, 5, 9, 1, 4, 8]))// ➞ 10

console.log(miss([10, 5, 1, 2, 4, 6, 8, 3, 9]))// ➞ 7