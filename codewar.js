// const array1 = [5, 8, 12, 19, 22];


// function sumOfTwoNumber(numbers) {
//     let order = numbers.sort(function (a,b){return a + b;} );
//     let result = 0;
//     for (let i = 0; i < order.length; i++) {
//          if (i == 0) {
//              result += order[0];
//          }
//          if (i==1) {
//              result += order[1];
//          }
        
//     }


// return result;
// }

// console.log(sumOfTwoNumber([5, 8, 12, 19, 22]));

// function compare(a,b) {
//     y = a.split("").sort().join("")
//     z = b.split("").sort().join("")

//     console.log(y === z)?true:false;
//     console.log(y,z)
// }
// compare("mary", "arms");

// compare("abba", "baab");


// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]


// function arrayOf(a1, a2) {
//     let r = [];
//     for (let i = 0; i < a1.length; i++) {
//         const s1 = a1[i];

//         for (let i = 0; i < a2.length; i++) {
//             const s2 = a2[i];
            
//             if (s2.indexOf(s1) != -1 && r.indexOf(s1) == -1) {
//                 r.push(s1);
                
//             }
           
//         }
        
//     }
//     return r.sort() ;
// }

// console.log(arrayOf(a1, a2))


// var moveZeros = function (arr) {
//     let  zero = [];
//      let other = [];
//      let together = [];
//      for(let i = 0; i < arr.length-1; i++)
//        if (arr[i] === 0) {
//          zero.push(arr[i])
//        }
//      else {
//        other.push(arr[i])
//      }
//      together = other.concat(zero)
     
//      return together;
//    }
//   console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))


//   function list(names) {
//       if(names.length >= 1) {
//           let entry = names.shift();
//           console.log(entry.name+", ")
//   }
//   if (names.length <= 1) {
//     console.log(" &" +names.name)   
//   }
// }

//   list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
//   // returns 'Bart, Lisa & Maggie'
  
//   list([ {name: 'Bart'}, {name: 'Lisa'} ])
//   // returns 'Bart & Lisa'
  
//   list([ {name: 'Bart'} ])
//   // returns 'Bart'
  
//   list([])
//   // returns ''


// function findMissingLetter(array) {
//     var string = array.join("");
//     for (var i = 0; i < string.length; i++) {
//       if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
//         return String.fromCharCode(string.charCodeAt(i) + 1);
//       }
//     }
//   }

// console.log(findMissingLetter(['a','b','c','d','f']));
// console.log(findMissingLetter(['O','Q','R','S']));

function persistence(number) {
  element = ""
  for (let i = 0; i < number.length; i++) {
     element += number[i];
    return element;
  }
 
}
console.log((persistence(39)))


array = [ "djdkj", "hello"]

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   for (let j = 0; j < element.length; j++) {
//     const d = element[j];

//     console.log(element[j])
//     console.log("hello")
//   }
// }

for (const i of array) {
  console.log(i)
}

for (const key in array) {
   { const element = array[key];
    
  }
}

// array.pop(1)
// console.log(array)

array.splice(0,0,"world")
console.log(array)

// a = { agw: "world",date: "helo",}

array.join(";")
console.log(array)