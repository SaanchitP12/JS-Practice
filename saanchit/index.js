
console.log("Hello World")
console.log(2+1)
console.log("2"+1 ) 

/* Variables */
/* To create a Variable there are 3 Types of Keywords
1) let - with this keyword a variable can be created,
and the value inside the variable can be changed again and again further in the codes 
2) const - in this the value inside the variable cannot be changed in the future codes
3) var - outdated (will see in further sessions)
*/

let name = 'Saanchit';

const job = 'Trader';
console.log('My Name is ' + name + ' And I am a ' + job)

name = 'Saanchit Pillai';
console.log('My Name is ' + name)

let age = 20;
console.log('My Age is ' + age)

/* Array */
/* In an Array, the values are written in "[]"(Square Brackets)
and the values are designated position from 0, 1, 2, ......
*/

let fruits= ["orange", "mango", "banana", "apple"];
console.log(fruits)
console.log(fruits[2])

/* Object */
/* In an Object, the values are written in "{}"(Curly Bracket)
in this variable we can give various informations as values
*/
let car = {"color" : "red", "seats" : 6}
console.log(car)