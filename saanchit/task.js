/* ** perform the task ** */


/* 1 - What is the code below going to output? why ? */

//console.log( null || 2 || undefined ); // Only 2nd value is true... //2

//console.log( console.log(1) || 2 || console.log(3) ); // Error

//console.log( 1 && null && 2 ); // The 2nd value is false... // null

//console.log( console.log(1) && console.log(2) ); // Error

//console.log( null || 2 && 3 || 4 ); // The 2nd value is true... // 3


/* 2 - Write an if condition to check that age is between 14 and 90 inclusively.
       “Inclusively” means that age can reach the edges 14 or 90. */


/*3- Write an if condition to check that age is NOT between 14 and 90 inclusively.
     Create two variants: the first one using NOT !, the second one – without it */


/*4- Which of these alerts are going to execute?
     What will the results of the expressions be inside if(...)? */
   
   //if (-1 || 0) console.log( 'first' ); // 1st value is true... // first
   //if (-1 && 0) console.log( 'second' ); // Both values are not true... // ----
   //if (null || -1 && 1) console.log( 'third' ); // 2nd value is true... // third
   