/**
 * Conditions : if, else if, else, and "?" operator
 */

let year = 2016

if (year > 2015) console.log('Age is 20')

if (year < 2015) {
    console.log( 'Too early...' );
} else {
    console.log( 'Exactly!' );
}

/**
 *  ternary operator, question operator, condition operator
 *  syntax : condition ? true : false
 */

let sanchitAge = 20
let value = sanchitAge >= 20 ? "Yes Sanchit age is greater than 20" : "No, its not greater than 20";
console.log(value)


/**
 * Multiple ternary operators
 */

let prashantAge = 21;

let Result = prashantAge > 21 ? "true" : prashantAge > 22 ? "true" : prashantAge > 19 ? "yes true" : "false"

console.log(Result)

/**
 * TODO :
 *  1 - There are 4 brands of cars eg: bmw, audi, fiat, honda,
 *  so if the brand names matches print that block with a string
 *  "This is a BRAND_NAME car"
 *
 *  2 - Sanchits age = 20
 *      prashants age =  21

 *      if the year is 2021 then addition the their ages else subtract it.
 *      condition ? (age + age) : (age - age)
 */