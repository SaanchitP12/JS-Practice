/* TODO : */
/*  1 - There are 4 brands of cars eg: bmw, audi, fiat, honda,
        so if the brand names matches print that block with a string
        "This is a BRAND_NAME car" */

        let car4 = "Audi";

        if  (car4 == "BMW") {
            console.log("This is a BMW Car");
        } else if (car4 == "Audi") {
            console.log("This is a Audi Car");
        } else if (car4 == "Fiat") {
            console.log("This is a Fiat Car");
        } else if (car4 == "Hondo"){
            console.log("This is a Honda Car");
        } else {
            console.log("No car found");
        }

/*   2 - Sanchits age = 20
       prashants age =  21
       if the year is 2021 then addition the their ages else subtract it.
       condition ? (age + age) : (age - age) */

        let year = 2021
        let age = year == 2021 ? (20 + 21) : (20 - 21)
        console.log(age)

        let age2 = year > 2021 ? (20 + 21) : (20 - 21)
        console.log(age2)
        