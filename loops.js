//1. Write a JavaScript program that accept two integers and display the larger.

function bigNum(num1,num2) {

    if (num1 > num2) {
        
        return num1
    }
     else if (num1 < num2) {
        
        return num2
    }
    return "both are equal"
    
}
console.log(bigNum(53,53))

function largest(a,b,c,d,f) {
    if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}
}
largest(-5, -2, 6, 0, -1)


for (let i = 0; i <= 15; i++) {
    // console.log(`${i} is even`)
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i} is odd`)
    }
}



    
    for (let i = 1; i <= 100; i++) {
       if (i % 3 === 0) {
           console.log(i+" Fizz")
       }
          else if (i % 5 === 0) {
               console.log(i+" Buzz")
           }
         else  if ((i % 3 === 0) && (i % 5 === 0)){
               console.log(i+" FizzBuzz")
       }

      else {
          console.log(i)
      }
        
    }

let temp = ""
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < i; j++) {
            temp += ["*"]
            
        }
        console.log(temp)
        
    }

    let sum = 0

    for (let i = 0; i < 1000; i++) {
       if (i % 3 === 0 || i % 5 === 0) {
           sum += i
       }
        
    }
    console.log(sum)


    //object 

    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
        
       let keys = []
       let count =0
        for (const key in student) {
            
            const element = student[key];
            keys.push(element)
            

        }
        console.log(keys)

        console.log(Reflect.ownKeys(student))

        delete student.sclass

        console.log(student)


          // if (!Object.keys) {
        //     Object.keys = function (obj) {
        //         var arr = [],
        //             key;
        //         for (key in obj) {
        //             if (obj.hasOwnProperty(key)) {
        //                 arr.push(key);
        //             }
        //         }
        //         return arr;
        //     };
        // }
        
       console.log( Object.keys(student).length);



//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

        var library = [ 
            {
                author: 'Bill Gates',
                title: 'The Road Ahead',
                readingStatus: true
            },
            {
                author: 'Steve Jobs',
                title: 'Walter Isaacson',
                readingStatus: true
            },
            {
                author: 'Suzanne Collins',
                title:  'Mockingjay: The Final Book of The Hunger Games', 
                readingStatus: false
            }];

for (let i = 0; i < library.length; i++) {
    const e = library[i];

       console.log(`The Author is "${e.author}" book name "${e.title}" ${e.readingStatus ? "already read the book" :"not read the book yet"}`)
   
}

function Cylinder(height, diameter) {

    this.height = height;
    this.diameter = diameter
}

Cylinder.prototype.Volume = function () {
    let radius = this.diameter / 2
    return this.height * Math.PI * radius * radius
}
      let cyl = new Cylinder(7,4)

     console.log('Volume', cyl.Volume().toFixed(4))

     //Write a Bubble Sort algorithm in JavaScript.

     const bubble  = (arr) => {
         for (let j = 0; j < arr.length; j++) {
             
            //  console.log(arr[j])
   
         for (let i = 0; i < arr.length; i++) {
             console.log(arr[i])
             
            if (arr[i] > arr[i + 1]) {
                //swap
               temp = arr[i];
               arr[i] = arr[i + 1];
               arr[i + 1] = temp
            }

        }
         }
         return arr
     }
     console.log(bubble([3,-2,1]))

     // Write a JavaScript program which returns a subset of a string. 

     function subsetStr(str) {
        let a = []
        for (let i = 0; i < str.length; i++) {
            // console.log(str.slice(i))
           for (let j = i + 1; j < str.length+1; j++) {
            // console.log(str.slice(j))

               a.push(str.slice(i,j))
           }
            
        }
        return a
        }
     
     console.log(subsetStr("dog"))

     //Write a JavaScript program to calculate the area and perimeter of a circle. Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

     function circle(radius) {
         this.radius = radius;

         this.area = function () {
             return Math.PI * this.radius * this.radius;
         }

         this.perimeter  = function () {
             return 2 * Math.PI * this.radius
         }
     }

     let c = new circle(3)
console.log(c.area().toFixed(4))
console.log(c.perimeter().toFixed(4))

console.log(Math.sqrt(3))


// 10. Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
// Sample Object :

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

   function library1(obj) {
       let library = obj.map((book) => {
           
        return `${book.author}${book.libraryID}${book.title}`
       })
       let sortLibrary = library.sort((a,b) => {
         return  b.library - a.library
       })
        return sortLibrary

   }
console.log(library1(library))


function key_value_pairs(obj) 
   {
    var keys = _keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) 
    {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  }

function _keys(obj) 
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(key_value_pairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
