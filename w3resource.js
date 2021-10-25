// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const today = new Date();

let day = today.getDay();

let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

console.log(`Today is : ${dayList[day]}`);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = (hour >= 12) ? "PM" : "AM"

console.log("Current time is :", hour, prepand, ":", minute, ":", second);


let dd = today.getDay();
let dayLists = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]
let mm = today.getMonth();
let monthList = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"]
let yy = today.getFullYear();

// if (dd < 10 && mm < 10) {
//     dd = "0" + dd
//     mm = "0" + mm

// }

console.log(dayLists[dd] + ":" + monthList[mm] + ":" + yy)

//area of triangle

var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;

let a = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))

console.log(a.toFixed(2))

function rotateString(str) {
    let str1 = str.split("")
    let str2 = str1.reverse();
    let str3 = str2.pop()
    return str3 + str2.join("")


}

console.log(rotateString('w3resource'))

//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  

for (let year = 2014; year <= 2050; year++) {
    let d = new Date(year, 1, 1)
    if (d.getDay() === 0) {
        console.log("1st January is Monday on", year)
    }


}

//Write a JavaScript function that checks whether a passed string is palindrome or not?

function palindrome(str) {
    let str1 = str.split("")

    let str2 = str1.sort().join("")
    // if (str === str2) {
    //     return "string is palindrome"

    // }
    // return "string is not palindrome"

    return str2
}

console.log(palindrome("madam"))
console.log(palindrome("rudhesh"))
console.log(palindrome('quick brown fox jump over the lazy dog'))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
function firstLetter(str) {
    let array = str.split(" ");
    newArray = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let s = element.substring(0, 1).toUpperCase()
        newArray.push(s + element.substring(1))
        console.log(element)
    }
    return newArray
}

console.log(firstLetter('the quick brown fox jump over the lazy dog'))


//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

function longestWord(str1) {
    let str = str1.split(" ")
    let longestWord = ""
    for (let i = 0; i < str.length; i++) {
        // console.log(element)
        if (str[i].length > longestWord.length) {
            longestWord = str[i]

        }

    }
    return longestWord

}

console.log(longestWord('Web Development Tutorial'))


// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowels(str) {
    let vowel = "aeiou"
    let str1 = str
    let count = [];

    for (let i = 0; i < str1.length; i++) {
        if (vowel.indexOf(str1[i]) !== -1) {
            count++
        }

    }
    return count
}

console.log(vowels('the quick brown fox jump over the lazy dog'))

console.log(vowels('The quick brown fox'))

// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function primeNum(num) {
    let n = 2
    let arr = num.filter((x) => {
        if (n = 2) {
            return true
        }
        if (x % n !== 0) {
            return true
        }
    })
    return arr;
}
console.log(primeNum([2, 3, 4, 5, 6, 7, 7]))

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrix(n) {
    let i;
    let j;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                console.log("1")
            }
            else { console.log("0") }

        }
        console.log("___________________")
    }

}

matrix(10)

//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function greatestLowestNum(...num) {
    let array = [];
    let arr = num.sort((a, b) => {
        return a - b
    })
    let result1 = (arr[1])
    let result2 = (arr[arr.length - 2])
    array.push(result1, result2)

    return array



}
console.log(greatestLowestNum(2, 3, 43, 4, 15, 6, 64, 5, 4, 433))


// 13. Write a JavaScript function to compute the factors of a positive integer.

function factorNum(num) {
    const array = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            array.push(i)

        }

    }
    console.log("The factors of 12 is:", array)
}
factorNum(15)
factorNum(16)
factorNum(17)

//Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function exponent(b, n) {
    return b ** n

}
console.log(exponent(2, 3))

console.log(exponent(8, 3))

// 16. Write a JavaScript function to extract unique characters from a string. 

function uniqueCharacter(str2) {

    // let str = str2.toLowerCase().split("")

    // let array = str.filter((item, i, arr) => {
    //     return arr.indexOf(item) === i
    // })
    // return array.join("")

    // let str = new Set(str2)
    // return str
    return String.prototype.concat(...new Set(str2))
}
console.log(uniqueCharacter("thequickbrownfoxjumpsoverthelazydog"))

//17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
function Char_Counts(str1) {
    let count = 0
    let f = {}
    let str = str1.toLowerCase().split("").join("")
    for (let i = 0; i < str.length; i++) {
        f[str[i]] = f[str[i]] + 1 || 1
        console.log(f)

        // else {
        //     console.log(str[i]+":" + count)
        //     count = 0
        // }
    }
    // return str1.split("").reduce((a, letter) => {
    //     a[letter] = (a[letter] || 0) + 1 ;
    //     return a;
    // }, {});
}
Char_Counts("The quick brown fox jumps over the lazy dog");

Char_Counts("The fox  oveeeer the lazy dog");

// Char_Counts("aaa ccc bbb ghhjjjd");


// 19. Write a JavaScript function that returns array elements larger than a number. 
let array22 = [23, 4, 6, 77, 8, 99, 55, 32, 4, 2, 3,]
function biggerNum(num, big) {
    let array = []
    for (let i = 0; i < num.length; i++) {

        if (num[i] >= big) {
            array.push(num[i])
        }

    }
    return array

}
console.log(biggerNum(array22, 10))

// Write a JavaScript function that generates a string id (specified length) of random characters.

function randomCharacter(str) {
    let text = "";
    let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < str; i++) {
        text += list.charAt(Math.floor(Math.random() * list.length))

    }
    return text
}

console.log(randomCharacter(8))

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function char_count(str, letter) {
    let letters = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            letters++
        }
    }
    return letters
}

console.log(char_count('w3resource.com', 'w'));

function find_FirstNotRepeatedChar(str) {
    let str1 = str.split("")
    return str1.filter((item, index, obj) => {
        return obj.indexOf(item) === obj.lastIndexOf(item)
    }).shift()
}
console.log(find_FirstNotRepeatedChar('aabcbde'));


//Array

let isArray = (input) => {
    if (toString.call(input) === "[object Array]") {
        return true
    }
    return false
}

console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));

var array_Clone = function (arra1) {
    return arra1.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


myColor = ["Red", "Green", "White", "Black"];

let color = myColor.join(",").split(" ")

console.log(color)
console.log(myColor.toString());
console.log(myColor.join());

//  Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

let evenNum = (num) => {

    let even = num.toString()
    console.log(even)
    let result = []
    for (let i = 0; i < even.length; i++) {
        //  console.log(even[i])

        if ((even[i - 1] % 2 === 0) && (even[i] % 2 === 0)) {

            (result.push("-", even[i]))

        }
        else {
            result.push(even[i])
        }

    }

    return result.join("")
}
//  evenNum(123456789)
console.log(evenNum(1234456656789))

//Write a JavaScript program to sort the items of an array.

var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

console.log(arr1.sort())

//  var arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4,9,9,9,9,9,9, 9, 3];
arr2 = ["w", "w", 3, 3, 3];

var mf = 1;
var m = 0;
var item;

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[i] == arr2[j])

            (m++)


        if (mf < m) {
            mf = m;
            console.log(mf)
            item = arr2[i];
        }
    }
    m = 0;
}
console.log(item, mf, m, ":times")

let str11 = 'The Quick Brown Fox'

// console.log(str111)
let testArray = [];
function swap(str) {
    let str111 = str.split(" ")
    for (let i = 0; i < str111.length; i++) {
        const strr = str111[i];


        if (strr[0] === strr[0].toUpperCase()) {

            testArray.push(strr.slice(0, 1).toLowerCase() + strr.slice(1).toUpperCase())
        }
        else if (strr[0] === strr[0].toLowerCase()) {
            testArray.push(strr.slice(0, 1).toUpperCase() + strr.slice(1).toLowerCase())
        }
    }
    return testArray.join(",")

}
// console.log(swap('The Quick Brown Fox'))

// console.log(swap('tHE,qUICK,bROWN,fOX'))

console.log(swap('cD1DSdAD'))


var aa = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < aa.length; i++) {
    console.log("row " + i);
    for (let j = 0; j < aa[i].length; j++) {
        console.log(aa[i][j])
    }


}


// Write a JavaScript program to compute the sum and product of an array of integers.

const array12 = [1, 2, 3, 4, 5, 6,]

const xx = array12.reduce((acc, current) => {
    return acc + current
}, 0)
console.log("Sum:", xx)

const xy = array12.reduce((acc, current) => {
    return acc * current
}, 1)
console.log("Product:", xy)


const array121 = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5,]

const mySet11 = new Set(array121)

console.log(...mySet11)


const mySet1 = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5,]


function duplicate(num) {
    x = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] == num[i + 1]) {
            x.push(num[i])
        }
        // return x
    }
    console.log(x)
}
// console.log(duplicate(array1121));


var str = 'On The Rock';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for (var x = 0; x < str.length; x++) {
    if (UPPER.indexOf(str[x]) !== -1) {
        result.push(str[x].toLowerCase());
    }
    else if (LOWER.indexOf(str[x]) !== -1) {
        result.push(str[x].toUpperCase());
    }
    else {
        result.push(str[x]);
    }
}
console.log(result.join(''));




// function myColors() {
//     let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

//     let o = ["th", "st", "nd", "rd"]

//     for (let i = 0; i < color.length; i++) {

//         if (i == 3) {
//             break
//         }
//         const colors = color[i];
//         return colors
//     }

//     for (let j = 1; j <= o.length; j++) {
//         const suffix = o[j];
//         return suffix
//     }

//     for (let num = 0; num <= 3; num++) {
//         const myNum = num
//         return myNum
//     }
//    return (myNum + suffix + "choice is"+ colors)
// }
// console.log(myColors())





function mycolorchoice() {

    let str = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

    let o = ["th", "st", "nd", "rd"];


    for (let i = 0; i < str.length; i++) {
        str[i]

        for (let j = 1; j < o.length; j++) {
            let w = j



        }

    }



}

console.log(mycolorchoice())

// for (let x = 1; x<=o.length; x++) {
//     let position = o[x];	
//     return position;
// }

// for ( let number = 1; number<= 3; number++) {
//     let mynumber =number;
//     return mynumber;
// }



// Find the leap years in a given range of years. 

function leapYear(stYear, endYear) {
    let yearRange = [];
    for (let i = stYear; i < endYear; i++) {
        yearRange.push(i)

    }
    // return yearRange
    let newYear = []
    yearRange.forEach((year) => {
        if (testLeapYear(year)) {
            newYear.push(year)
        }
    })
    return newYear
    function testLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 == 0 && year % 400 === 0)) {
            return year
        }
        else {
            return false
        }


    }
}
console.log(leapYear(2000, 2062))


// Write a JavaScript program to shuffle an array. 

function shuffle(array) {
    let ctr = array.length,
        x,
        index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr)

        ctr--

        x = array[ctr];
        array[ctr] = array[index]

        array[index] = x

    }
    return array
}


let year = [
    2000, 2004, 2008, 2012,
    2016, 2020, 2024, 2028,
    2032, 2036, 2040, 2044,
    2048, 2052, 2056, 2060
]

console.log(shuffle(year))

console.log(shuffle(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]))


let yearss = [
    "Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "
]

//   let ax = yearss.sort((a,b)=> 0.5 - Math.random())
//   console.log(ax)

const shuffle1 = (array) => {
    for (let i = 0; i < array.length; i++) {
        let randomNum = Math.floor(Math.random() * array.length)
        let tempName = ""
        let currentName = array[i]
        let randomName = array[randomNum]
        //swap
        tempName = currentName;
        array[i] = randomName;
        array[randomNum] = tempName;
    }
    return array
}
console.log(shuffle1(yearss))

// let p = yearss.length
// console.log(p)

// function unique(x) {
//     return x.filter(function(elem, index) { return x.indexOf(elem) === index; });

//   };
//   console.log(unique([1, 2, 2, 3]));

//   function union(x, y) {
//     return unique(x.concat(y));
//   };


// console.log(union([1, 2, 2, 3], [2, 3, 4, 5, 5]));


function difference(x, y) {
    let temp = []
    // x = x.toString().split(',').map(Number);

    for (const i in x) {
        if (y.indexOf(x[i]) === -1) temp.push(x[i])

    }
    for (const i in y) {
        if (x.indexOf(y[i]) === -1) temp.push(y[i])
    }
    return temp
}

// function difference(x,y) {
//     let z = x.filter((element, index) => {
//         x.indexOf(element) === index
//     } )

// }

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//Write a JavaScript function to create a specified number of elements with pre-filled string value array.
function array_filled( array,number) {
//     let x = []
//    for (let i = 0; i < array.length; i++) {
     
//     //   x.push(str)
//    console.log(array[number])

       
//    }
   return array[number -1 ]
}

console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));
console.log(array_filled(6, 0));

console.log(array_filled([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
