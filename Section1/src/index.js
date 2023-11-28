//Section 1 Part A
const myName = "Jorge";
const favoriteLanguage =  "Python";
const newFavoriteLanuage = "JavaScript";
console.log(`My name is ${myName} and ${newFavoriteLanuage} is my favorite language.`);

//Section 1 Part B
let firstVariable = "Hello World";
firstVariable = 12312312;

let secondVariable = firstVariable;
secondVariable = "string"
console.log(firstVariable);
let yourName = "Jorge";
console.log(`Hello, my name is ${yourName}`);

//Section 1 Part C
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

//Section 1 Part D

  const animal = "cow";
  animal === "cow" ? console.log("Mooo"): console.log("You no cow");

//Section 1 Part E
let age = 15;

age >= 16 ? console.log("Here are the Keys!") : console.log("Sorry, youre too young.");;

//Section 2 Part A

// for(let a=0; a <= 10; a++){
//     console.log(a);
// }
// for( let a = 10; a <=400; a++){
//     console.log(a);
// }

// for(let a = 12; a <= 4000; a++){
//     if(a % 3 ===0){ 
//         console.log(a);
//     }
// }

//Section 2 Part B

// for(let b =0; b < 100; b++){
//     if(b % 2 === 0){ 
//         console.log(`${b} is an even number`);
//     } else {
//         console.log(b);
//     }
// }

//Section 2 Part C

// for(let i =0; i <= 100; i++){
//     if(i % 5 === 0){ 
//         console.log(`I found a ${i}. High Five` );
//     } else if (i % 3 === 0) { 
//         console.log(`I found a ${i}. Three is a crowd.`);
//     } 
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log(`${i} is divisble by both`);
//     }
// }

//Section 2 Part D

// let bank_account = 0;
//  for(let c = 0; c <= 10; c++){
//     //  console.log(c);
//      bank_account += c;
//  }
// console.log(`Your bank has $${bank_account}`);

// let bonus = 0;
// for(let d = 0; d <= 100; d++){
//      bonus += d * 2;
//  } 
//  console.log(`Your bank account now has $${bonus}`);

 //Section 3 Part B

 const quotes = ["My psychiatrist told me I was crazy and I said I want a second opinion. He said okay, youre ugly too.","Republicans have nothing but bad ideas and Democrats have no ideas.", "If it requires a uniform, its a worthless endeavor" ]
console.log(quotes);

//Section 3 Part C
const randomThings =[1, 10, "Hello", true]

console.log(randomThings[0]);

randomThings[2] = "World";

console.log(randomThings);


//Section 3 Part D
const ourClass =["Salty","Zoom", "Sardine", "Slack","GitHub"]

console.log(ourClass[2]);

ourClass[4] = "Octocat"
ourClass.push = "Cloud City"
console.log(ourClass);

//Section 3 Part E

const myArray = [5, 10, 500, 20]

myArray.push("Aegon","Home")

console.log(myArray);
myArray.unshift("Bob Marley");

myArray.splice(3,1)
console.log(myArray);

myArray.reverse()
console.log(myArray);

//Section 3 Part F

let x = 3;

if( x < 100){
  console.log("little number");
} else if (x > 100){
 console.log("big number");
}

//Section 3 Part G

if( x < 5){
  console.log("little number");
} else if(x > 10){
  console.log("big number");
} else {
  console.log("monkey");
}

//Section 3 Part H

//come back to this one

//Section 4 Part A

function printGreeting(userName){
  console.log(`Hello there, ${userName}!`);
}
printGreeting("Slimer");

//Section 3 Part B

function printCool(firstName){
  console.log(`${firstName}, is cool!`);
}
printCool("Slimer");

//Section 3 Part C
function calculateCube (num){
  console.log( num * num * num);
}
calculateCube(5);

//Section 3 Part D

function isVowelthat(vowel){

    vowel = vowel.toLowerCase();
    return ['a', 'e','i', 'o', 'u'].includes(vowel);
}
console.log(isVowelthat("b"));