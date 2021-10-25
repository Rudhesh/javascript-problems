const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

function printYear(array) {
    let arr = array.filter(function (x) {
        if (x.year >= 1500 && x.year < 1600) {
            return true
        }
    })
    return arr
}

console.log(printYear(inventors))

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

function printFirstName(array) {
    let arr = array.map(function (x) {
        return (x.first + " " + x.last)
    })
    return arr
}

console.log(printFirstName(inventors))


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// function printDateOfBirth(array) {
//     let arr = array.sort(function (x, y) {
//         if (x.year > y.year) {
//             return 1
//         }
//         else
//        { return -1}
//     })
//     return arr
// }
// console.log(printDateOfBirth(inventors))

let arr = inventors.sort((x, y) => x.year > y.year? 1 : -1)
console.table(arr)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    let printTogether = (array) => {
        let arr = array.reduce(function (accu, current) {
            return accu + (current.passed - current.year)
        }, 0)
        return arr
    }

    console.log(printTogether(inventors))

    // 5. Sort the inventors by years lived

    let printYearLives = (array) => {
        let arr = array.map(function ( current) {
            return (current.passed - current.year)
        })
        return arr
    }

    console.log(printYearLives(inventors))

    function printLiveYear(array) {
        let arr = array.sort((a,b) => {
            const lastGay = a.passed - a.year;
            const firstGuy = b.passed - b.year;
           return (lastGay > firstGuy)? 1 : -1
        } )
        return arr

    }

    console.table(printLiveYear(inventors))

   

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    function printAlphabetically(array) {
        let arr = array.sort((a,b) => {
            if (a.last > b.first) {
                return 1
            }
            if (a.last < b.first) {
                return -1
            }
            return 0
        } )
        return arr

    }
    console.table(printAlphabetically(inventors))



    const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];


    const alpha = people.sort(function (lastOne, nextOne ) {
        const [aLast, aFirst] = lastOne.split(", ")
        const [bLast, bFirst] = nextOne.split(", ")

return aFirst > bFirst ? 1 : -1 ;
    })
    console.table(alpha)
 

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

        // Sum up the instances of each of these

        const transportation = data.reduce(function (obj, item) {
            if (!obj[item]) {
                obj[item] = 0
            }
            obj[item]++
            return obj;
        }, {})

        console.log(transportation)


    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];

      function printComment(array) {
          let arr = array.find((x)=> {
            return  x.id === 823423
          })
          return arr
      }
      console.log(printComment(comments))

      