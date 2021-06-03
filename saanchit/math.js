/* Math Function */

/* Math.abs */
/* Math.abs function returns the absolute value of a number */
console.log(Math.abs(15))
console.log(Math.abs(-44))
console.log(Math.abs('76'))
console.log(Math.abs('-34'))
console.log(Math.abs(null))

/* Math.ceil */
/* Math.ceil function rounds a number UP to the next larget integer */
console.log(Math.ceil(6.93))
console.log(Math.ceil(-6.93))
console.log(Math.ceil(6.39))
console.log(Math.ceil(-6.39))

/* Math.floor */
/* Math.floor function rounds a number DOWN to its nearest integer */
console.log(Math.floor(7.29))
console.log(Math.floor(-7.29))
console.log(Math.floor(7.92))
console.log(Math.floor(-7.92))

/* Math.round */
/* Math.round function rounds a number to its nearest integer */ 
console.log(Math.round(18.45))
console.log(Math.round(-18.45))
console.log(Math.round(18.54))
console.log(Math.round(-18.54))

/* Math.trunc */
/* Math.round function returns the integer part of a number */
console.log(Math.trunc(20.83))
console.log(Math.trunc(-90.13))
console.log(Math.trunc(82.47))
console.log(Math.trunc(-64.33))

/* Math.max */
/* Math.max function returns the number with the largest value */
console.log(Math.max(12, 34, 56, 52))
console.log(Math.max(-24, -53, -35, -12))

const arr = [2, 34, 45,53 ,63 ,24]
console.log(Math.max(...arr))

/* Math.min */
/* Math.min function returns the number with the lowest value */
console.log(Math.min(12, 34, 56, 52))
console.log(Math.min(-24, -53, -35, -12))

const ran = [2, 34, 45, 53 , 63, 24]
console.log(Math.min(...ran))

/* Math.random */
/* Math.random function returns random number between 0 to 1 */
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())