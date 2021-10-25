function hasSpaces(str) {
	if (str.indexOf(' ') >= 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}

hasSpaces("String");
hasSpaces("String string");


function ctoa(c) {
    let ASCII = c.charCodeAt(0);
    console.log(ASCII);
  }
  
  ctoa("A");
  ctoa("F");
  ctoa("b");
  ctoa("M");
  


  let firstNum = String(27).charAt(0);
console.log(firstNum)

function toInt(str) {
    let num = parseInt(str);
    console.log(num);
  }
  
  toInt("10");
  
  function toStr(int1) {
    let str = int1.toString();
    console.log(str);
    console.log(typeof str);
  }
  
  toStr(10);

  add2 = x => x + 2;


console.log(add2(2))


function multiply(a) {
    
        return function (b) {
            let arr11 = a.map((x) => {
               return x * b
            })
            return arr11;
        }
    
}

console.log(multiply([1, 2, 3])(2))

function square(a) {
	return a * a
}


const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020]

function getYears(years) {
  
	let year  = years.filter((x) => {
		if (x > 1950) {
			return true
		}
		
	})
    return year 
}
console.log(getYears(years))


// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

var flipAndInvertImage = function(A) {
    const length = A[0].length;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < length / 2; j++) {
            let curr = A[i][j];
            A[i][j] = !A[i][length - 1 - j];
            A[i][length - 1- j] = !curr;
        }
    }
    return A;
};

console.log(flipAndInvertImage([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ])) 
  // [
//     [0, 1, 1],
//     [1, 0, 1],
//     [1, 1, 0]
//   ]