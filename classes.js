// // getEmployeeSalary(hourlyRate, hoursDone, overtimeMultiplier)

// // // Oop
// // employee.getSalary()

// // constructor funtion

// function User(name) {
//     this.na0me = name;
//     this.fater = name;
//     this.isAdmin = false;
// }

// let jack = new User("Jack")
// console.log(jack.name)

// console.log(jack.isAdmin)


// function Pet(name, type) {
//     this.name = name;
//     this.type = type;
//     // return name + type
// }
// const rauli = Pet("Rauli", "Cat")

// console.log(rauli)
// console.log(rauli)


// function Users(j,k,l,m = 0){
//     this.j = j;
//     this.k = k;
//     this.l = l;
//     this.m ;

// }

// const letter = new Users("anan", "mana", "tana", "kana")

// console.log(letter)
// console.log(letter.k)

// console.log(new Users("anan", "mana", "tana", "kana"))

// // return from constructor 
// function SmallCreature(tim) {
//     this.name = "TIm";
//     this.name = tim;
// }
// console.log(new SmallCreature("Time"))


// function BigCreature(){
//     this.name = "Sheala"
//     // 
//     return {name: "GOjira"};  

// }
// const thing = new BigCreature();
// console.log(thing);


// function Creature() {
//     this.name = "Nessie"
//     return 7;
// }
// const scaryThing = new Creature();
// console.log(scaryThing);


// function Pet(type, name) {
//     this.type = type;
//     this.name = name;
// }

// Pet.prototype.paws = true;
// Pet.prototype.type = "CAT";
// Pet.prototype.print = function(){
//     console.log(`i am ${this.name} and my type is ${this.type}`
//     )
// }

// const pet = new Pet("Goose", "Greeser")
// pet.print()


// class Pet {
//     constructor(name, type) {
//         console.log("A pet is constructed....")
//         this.name = name;
//         this.type = type;
//     }
// }

// const rauli = new Pet("Rauli", "Cat");
// console.log(rauli)

// //example 2

// class Player {
//     constructor(username, role) {
      
//         this.username = username;
//         this.role = role;
//         this.score = 0;
//     }
//     setNewScore(score1){
//         this.score = score1;
//     }
//     printScore(){
//         console.log(`Player ${this.username}: ${this.score}`)
//     }
// }

// // const players = new Player("rudesh", "shooter")
// // console.log(players)


// const p1 = new Player("Rudesh", "Player");
// p1.printScore();
// p1.setNewScore(44);
// p1.printScore();

//  console.log(p1.username)

// class Book {}
// console.log(Book);

// console.log(typeof Book);

// console.log(Book === Book.prototype.constructor);

// const b1 = new Book.prototype.constructor();
// console.log(b1);

// //class expression
// const Person = class {

//     sayHi() {
//         console.log("Hello")
//     }
// }

// new Person().sayHi();

// const Device = class Product {
//     print(){
//         console.log("Product")
//     }
// }
// console.log(Device)

// new Device().print()


// //static method

// class Vehicle {
//     constructor (type, speed) {
//         this.type = type;
//         this.speed = speed;

//     }

//     move() {
//         console.log(`${this.type} is moving at ${this.speed}`);
//     }
//     static info() {
//         console.log("This is the vehicle class")
//     }
// }
// const myBike = new Vehicle("Bicycle", 10)

// myBike.move()

// Vehicle.info()


// class Email {
//     static sendEmail(address, heading, body) {};

//     static getEmails(inboxName, email, password) {};

//     static checkEmail(inboxName, email, password) {};

// }

// p1 = Email.sendEmail("Helt", "R", "gogog")

// console.log(p1)


// class Article {
//  constructor(title, date) {
//      this.title = title;
//      this.date = date;

//  }

//  static creatTodaysArticle(title) {
//      return new Article( "todays")
//  }
//  static  deleteWithId(id) {
//      console.log("Deleting article")
//  }
// }
// const a = new Article("cat saved from tree", "01.01.2020")

// const todaysArticle = Article.creatTodaysArticle("Tuesday newsday!")


// console.log(todaysArticle)

// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

//   // unnamed
// let Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   console.log(Rectangle.name);
//   // output: "Rectangle"
  
//   // named
// //   let Rectangle = class Rectangle2 {
// //     constructor(height, width) {
// //       this.height = height;
// //       this.width = width;
// //     }
// //   };
// //   console.log(Rectangle.name);
// //   // output: "Rectangle2"#



// class User {
//     name = "Lysa"
// }

// const user1 = new User();


// console.log(user1)


// class Pet {
//     name = "Unknown";
//     static wonderful = true;
// }

// const dogg = new Pet();

// dogg.name = "Snoopy"
// dogg.wonderful = false;

// console.log(dogg.name);
// dogg.age = 11;

// console.log(dogg)

// console.log(Pet.wonderful)


// // private properties

// class Blogpost {
//     #views = 0;

//     render() {
//         this.#views = this.#views +1;
//         console.log("Rendering blog post")
//     }
//     printViews(){
//         console.log(`This post has been viewed ${this.#views} times`)
//     }
// }

// const post1 = new Blogpost();
// post1.render()

// post1.render()

// post1.render()
// console.log(post1)

// post1.printViews()


// // Date class

// const time1 = new Date();
// console.log(time1)
// console.log(Number(time1))

// const time2 = new Date(2003,0, 1, 12, 30, 0, 0)

// console.log(time2)

// const time3 = new Date(2010, 6, 3)
// console.log(time3)

// console.log(Date(2010, 6, 3))


// // measuring time

// // const start = new Date()
// // for (let i = 0; i < 29999999; i++) {"test".split(",")}
// // const end = new Date();    

// // const duration = end -start;

// // console.log(`Duration ${duration}ms`)


// // better option

// console.time("potato");

// for (let i = 0; i < 29; i++) {console.log(i)}
// console.timeEnd("potato");

// const current = new Date();
// console.log(current.getDate())
// console.log(current.getDay())
// console.log(current.toISOString())
// console.log(current.getFullYear())



// Nodemon

console.log("Hello World!!!")

console.log("bye World!!!")

console.log


// inhertence

// class Parent {
//     constructor() {
//         console.log("Parent constructor")
//         return "parent"
//     }
// }
// class Child extends Parent {}

// const kiddo = new Child();
// console.log(kiddo)


//parent and child constructors

class Parent {
    constructor(){
        console.log("Parent constructor here")
    }
}

class Child extends Parent {
   
    constructor(){
        super();
        console.log("Child constructor")
    }
}

const kid = new Child()

//more complex use case

class User {
    name;
    role;

    constructor(name) {
        this.name = name;
        this.role = "User"
    }

    login() {
        console.log(`User ${this.name} has logged in`)
    }


    describe() {
        console.log(`User ${this.name} is ${this.role}`)
    }
}

class Writer extends User {
    posts;

    constructor(username, posts = []) {
        super(username);
        this.posts = posts;
        this.role = "Writer";
    }

    publishPost(content){
        this.posts.push(content);
    }
}

const w = new Writer("Rudhesh");
console.log(w)
w.describe()
w.login()
w.publishPost("New Post")
console.log(w)

const u = new User("Akash")
u.login()
u.describe()


class User1 {
    password = 12345
    constructor(username, role = "Normal,") {
        console.log("Hello world")
        this.username = username;
        this.role = role;
        this.activated = false;
    }

    activate() {
        this.activated = true;
    }
    login() {
        if (this.activated) {
            console.log(`User ${this.username} is logging in`)
            return true
        }
        console.log(`User ${this.username} not activated`)
        return false
    }
}

class Writer1 extends User1 {
constructor(username) {
    super(username, "writerUser")
    this.activated = true;
    this.posts =[]
}
 login() {
     console.log("writer login for user " + this.username)
 }
}

const writer = new Writer1("john")
console.log(writer)
writer.login()
const user = new User1("Rudhesh");
// user.activate()
user.login()
console.log(user)
// console.log(user instanceof User1)
// const myObject = {}
// console.log(myObject instanceof User1)

