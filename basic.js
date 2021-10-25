//Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 

function numberGuess(num) {
   let rand = Math.ceil(Math.random()*10)

   if (rand === num) {
       return "Good Work"
   }
        return "Not Matched"

}
console.log(numberGuess(4))

//Write a JavaScript program to extract the first half of a string of even length.

function number(str) {
    if (str.length % 2 == 0) {
        return str.slice(0, str.length/2)
    }
    return str
}

console.log(number("java"))
 


// console.log('hello' .repeatify(3));

for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 300)
  }

  var foo = 'bim'
//                                ▼ this is a reference to variable foo, not his associated value ('bim')
var getFoo = function () {
  return foo
}
foo = 'boum'

console.log(getFoo()) // 'boum'

//Impure
let numberArray = [3,6];

function impureAddNumber(n) {
 return numberArray.push(n)
}
console.log (impureAddNumber(6)); // returns 1

//Pure
const pureAddNumber = number => argNumberArray =>
  argNumberArray.concat([number]);

//Display the results
console.log (numberArray); // returns [6]
console.log (pureAddNumber(7) (numberArray)); // returns [6, 7]
console.log (numberArray); // returns [6]

message12 = 'The variable Has been hoisted';
console.log(message12);
// var message;

function goBack() {
  window.history.back()
}
function goForward() {
  window.history.forward()
}

console.log()


function timeMachine(time) {
  if (time < 12 && time > 1) {
    return "Good Morning"
    
  }
  if (time > 12 && time < 16) {
    return "good Afternoon"
  }
  else {
    return "Good Night"
  }
}
console.log(timeMachine(new Date().getHours()))

var now = new Date
  var thisYear = now.getYear()
  if (thisYear < 1900) {
    thisYear += 1900
  }
  console.log(thisYear - 1991)

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
   function CurrentDate(today) {
  return today.toLocaleDateString("en-DE", options)
   }
   console.log(CurrentDate(new Date()))