let myNum = 7;

function printBigger(x) {
    x = x + 100;
    console.log(x);
}
printBigger(myNum);
console.log(myNum);


const person = {

    name: "Rudhesh",

    type: "human"
};

function addProfession(x) {
 x.profession = "Web Person" 
 
 return x;
}

console.log(addProfession(person));

console.log(person);


const fruit = {
    name: "apple"
};

const plant = fruit;

console.log(fruit === plant)

// const test = {
//     name: "apple"
// }
plant.name = "blueberry";
// console.log(test == fruit);
plant.type = "sweet"
console.log(fruit.type);
console.log(this.fruit);





const array = ["A", "B"]
const copyTest = array;

copyTest.push("foobar");
console.log(array)


let numStorage = [1,2,3];
const newNumber = 42;

numStorage = [...numStorage + newNumber];
console.log(numStorage);


const bodyPart = {

    eyes:2, head:1 , nose: 1
};

const Rudesh = {...bodyPart, name: "Rudesh", type: "Human" }

console.log(Rudesh)

const clone = {...bodyPart};
console.log(clone);
console.log(bodyPart)

const arrayOfNumber = [3,5,77,8,9,99,433,21]
const biggestNumber = Math.max(...arrayOfNumber)
console.log(biggestNumber);

// Spread syntax for shallow copying an array


const aa = ["aa", "bb", "CC"]
const copyWithSpread = [...aa]
copyWithSpread.push("Rudesh")
console.log(aa)
console.log(copyWithSpread);

// deeply nested

const start = [["A", "B", "c" ]]

const clone1 = [...start]
console.log(clone1);
clone1[0]= "fooBar"
console.log(clone1);


// simple cloning

const orignal = ["cat", "dog" , ["fish", "kai"]];
const clone11 = JSON.parse(JSON.stringify(orignal));

clone11[2][1] = "Shark"
console.log(clone11);
console.log(orignal);

const names = ["li", "gi"];
const [ name1, name2 ] = names;
console.log(name1)

// const word = ["li", "gi", "ji", "hi", "ki", "ji"];
// const [ word1, , , , ,...word6 ] = word;
// console.log(word1, word6);

const word = ["li", ["gi", "ji"], "hi", "ki", "ji"];
const [ word1,word2 , ...word6 ] = word;
console.log(word2, word6);
console.log(...word6);


const alphabet = "wertzzugfddfghjgfdsertuknbvds";
const [l1,l2,l3,l4,l5,l6,l7,...rest] = alphabet;

console.log(l4,l5,rest);

console.log(...rest);


const user = {
    userID: 53,
    type: "lara",
    username: "Rudhesh",
    healthScore: 98,
    age: 23,
}
// username = username.toUpperCase()
// const {userID, type, ...rest1} = user;

// console.log(userID, type, rest1);
// )
// console.log(user.type)
// console.log(this.type)


const cong = {
    data: "localHost",
    user: "root",
    operator: "not defined",
    password: "12345"
}

const {data:pwd, user: user1, ...rest1 } = cong

console.log(pwd,user1, rest1)


const currentUSer = {

    username: "Rudesh",
    age: 30
}

function printGreeting({username, age}) {
    console.log(`I am ${username} and I am ${age}`)
}

printGreeting(currentUSer);


const user12 = {
    id:4555,
    username: "rudesh",
    email: "rudheshdhote@gmail.com",
}

const myClass = {
    codeName : "codelicious",
    id: "section-D",
    active: true,
};

function printClassStatus({id: teacherid, username: teacherName},{id:classid, active} ) {
   
    const msg = `class ${classid} taught by teacher ${teacherName} (${teacherid}) is active: ${active}`
 console.log(msg);

}
printClassStatus(user12,myClass);

let name = "bob"

let age = 28;

const dude = {name: "Rudhesh", age };

({name, age } = dude);
console.log(name + " is " + age)



const livingThings = [["beetles", "butterflies"],
["rabbits", "humans" ],
["fungi"]]

