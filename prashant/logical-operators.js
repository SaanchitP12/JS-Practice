/**
 * Logical Operator
 */


/**
 * OR "||" operator
 *
 * true, true = true
 * true, false = true
 * false, true = true
 * false, false = false
 */

// simple words : in OR operator if any one condition gets fulfilled
// it will return first true value else it will return false values

let name = "sanchit";
if (name == "prashant" || name == "sanchit") {
    console.log("Name is Prashant");
} else {
    console.log("falsy value")
}

let age = 20
if (age > 20 || age == 21) {
    console.log("Age of Sanchit is 20")
} else if (age < 21 || age == 22) {
    console.log("Age of prashant is 21")
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

/**
 * AND "&&" Operator
 *
 * true, true = true
 * true, false = false
 * false, true = false
 * false, false = false
 *
 */

// simple words : in AND operator all the condition must be fulfilled i.e true
// else it will return false

let name1 = "prashant"
let name2 = "saanchit"

if (name1 == "prashant" && name2 == "saanchit") {
    console.log("name is prashant and sanchit")
} else {
    console.log("some weird name")
}

let x = 1;
let values = (x > 0) && 'Greater than zero!';
console.log(values);

/**
 * NOT "!" Operator
 *
 * true = false
 * false = true
 *
 */

let value5 = true
console.log(!value5);
console.log( !!"non-empty string" ); // true
