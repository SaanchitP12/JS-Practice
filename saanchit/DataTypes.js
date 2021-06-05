/* DataTypes */

/* 'typeof' is an inbuilt feature to identify the type of DataTypes */

/* String
Words, Sentences, Phrases, Anything written inside [ ""(Double Quotes), ''(Single Quotes), ``(Back Ticks)
*/
const string1 ="Saanchit"
console.log("My Name is " + string1 + ", datatype is " + typeof string1)
const string2 ='Student'
console.log('I am a ' + string2 + ", datatype is " + typeof string2)
const string3 =`${string1} Pillai`
console.log("My Full Name is " + string3 + ", datatype is " + typeof string3)

/* Numbers
Any Number(1,2,3.....), Addition(+), Subtraction(-), Division(/), Multiplication(*)
*/
const number0 = 5 + 5
const number1 = 5 * 5
const number2 = 5 / 5
const number3 = 5 - 5
console.log("Value is " + number0 + " , datatype is " + typeof number0)
console.log("Value is " + number1 + " , datatype is " + typeof number1)
console.log("Value is " + number2 + " , datatype is " + typeof number2)
console.log("Value is " + number3 + " , datatype is " + typeof number3)

/* Bigint
Integer..... written with 'n' in the end of number
*/
const bigint = 2222222222222222222222n + 22222222222222222222n
console.log("Value is " + bigint + " , datatype is " + typeof bigint)
const bigint1 = 44444444444444444444n - 44444444444444444444444n
console.log("Value is " + bigint1 + " , datatype is " + typeof bigint1)

/* Boolean
Comparison.... System will Compare the Equation and Decide weather its true or false
*/
const boolean1 = 453 > 350
console.log("Value is " + boolean1 + ", datatype is " + typeof boolean1)

/* Null
Variable is given value 'null' 
*/
const word = null
console.log("Value is " + word + ", datatype is " + typeof word)

/* Undefined
The Variable is not given a value
*/
let nun
console.log("Value is " + nun + ", datatype is " + typeof nun)