let numValue
let booleanValue
let stringValue

/**
 * String Conversions
 */
numValue = 0
booleanValue = true

console.log(typeof numValue) // 0
console.log(typeof booleanValue) // true

let numToString = String(numValue)
let booleanToString = String(booleanValue)

console.log(typeof numToString) // "0"
console.log(typeof booleanToString) // "true"

/**
 *  Numeric Conversion
 */

stringValue = "200"

console.log(typeof stringValue); // "200"

let stringToNum = Number(stringValue);
console.log(typeof stringToNum) // number 200

console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

/**
 * Boolean Conversion
 * 1 - Values that are "empty", like 0, an empty string, null, undefined, and NaN, become false.
 * 2 - Other values becomes true
 */

numValue = 0 // 0, null, undefined, NaN becomes false
let numToBoolean = Boolean(numValue);
console.log(numToBoolean)

numValue = 1 // anything - string, number becomes true
let numToBoolean1 = Boolean(numValue);
console.log(numToBoolean1)

 /*
    TODO:
    1 - Convert "1212" to Numeric and Boolean
    2 - perform conversion of undefined to boolean and numeric
    3 - perform conversion of Null to numeric
    4 - perform conversion of String to numeric and boolean
  */