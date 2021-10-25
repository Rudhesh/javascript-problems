function createPhoneNumber(numbers){
number = numbers.join("")
// console.log(number)
return "(" + number.substring(0, 3) + ") " + number.substring(3,6)+ "-" + number.substring(6,10) 

  }


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
)


function twoSum(numbers, target) {
    let sum = [];

    for (let i = 0; i < numbers.length; i++) {
       

        for (let j = 0; j < numbers.length; j++) {
          

            if (numbers[i] + numbers[j] === target) {
                sum.push(i);
                sum.push(j)
            }
            
        }
        
    }
    return sum;
}

console.log(twoSum( [1, 2, 3], 4 ))

console.log(twoSum([2, 7, 11, 15], 9));

// === (0, 2)

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// function pigIt(str) {
    
// separation = str.split(" ")
// const Fletter = separation.map(function (word) {
//     return word.substring(1) + word[0] + "py"
// })

// console.log(Fletter.join(" "))
// }

function pigIt(str) {
 let   separation = str.split(" ");
 let newLetter = "";
 for (let i = 0; i < separation.length; i++) {
    separation[i] = separation[i].slice(1) + separation[i].charAt(0) + "ay "

    newLetter += separation[i]
   
    
     
 }
 return newLetter
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay


function uniqueInOrder(iterable){
    //your code here - remember iterable can be a string or an array
    const result = [ ]
    
    for(let i = 0; i < iterable.length; i++){
    if(iterable[ i ] !== iterable[i + 1]){
    result.push(iterable[ i ])
    // return iterable[i]
    
    }
    }
    
    return result.join(",")
    }
    uniqueInOrder('AAAABBBCCDAABBB') 
    uniqueInOrder('ABBCcAD')        
    uniqueInOrder([1,2,2,3,3])      
    console.log(uniqueInOrder('AAAABBBCCDAABBB'))
    console.log(uniqueInOrder('ABBCcAD')  )  
    console.log(uniqueInOrder([1,2,2,3,3]) )


// function friend(friends) {
// newFriend = []
// for (let i = 0; i < friends.length; i++) {
//     const favorite = friends[i];
// if (favorite.length == 4) {
//     newFriend.push(favorite)
// }
    
// }
//  return newFriend  
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]))

// var moveZeros = function (arr) {
//     move = []
//     move2 = []
//     for (let i = 0; i < arr.length; i++) {
//         const zeros = arr[i]
//         if (zeros === 0) {

//             move.push(zeros)
            
//         }
//         else
//         { move2.push(zeros)
//         }
//     }
//     together = move2.concat(move)
// return together;
//   }

//   console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) 

function digital_root(n) {
    // ...
    
    if (n < 10) {
        return n;
    }
    // return digital_root(
    //     n.toString().split("").reduce(function (accu, current) { return accu + +current}, 0))

    n = n.toString().split("");
    let  digital = 0
    for (let i = 0; i < n.length; i++) {
        let root = n[i];
        digital += parseInt(root);
        
    }
    return digital;

    }
  

  console.log(digital_root(11114))

  var uniqueInOrder=function(iterable){
     let a = [];
    b = iterable
    for (let i = 0; i< b.length; i++ ) {
     
      if ( b[i] !==  b[i+1]) {
       a.push( b[i])
      }
    }
    return a
  }
console.log(uniqueInOrder('AAAABBBCCDAABBB') )
console.log(uniqueInOrder('ABBCcAD')        )
console.log(uniqueInOrder([1,2,2,3,3])     )

// == ['A', 'B', 'C', 'D', 'A', 'B']
//  ['A', 'B', 'C', 'c', 'A', 'D']
// u

function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== undefined) {
        result.push(last = it[i])
      }
    }
    
    return result
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB') )
console.log(uniqueInOrder('ABBCcAD')        )
console.log(uniqueInOrder([1,2,2,3,3])     )
