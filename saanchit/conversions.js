  /* 1 - Convert "1212" to Numeric and Boolean */
  let string = "1212"
  console.log(string + " " + typeof string)

  let stringtonum = Number(string)
  console.log(stringtonum + " " + typeof stringtonum)

  let stringtoboolean = Boolean(string)
  console.log(stringtoboolean + " " + typeof stringtoboolean)
  
  /* 2 - perform conversion of undefined to boolean and numeric */
  let defi
  console.log(defi + " " + typeof defi)

  let defitoboolean = Boolean(defi)
  console.log(defitoboolean + " " + typeof defitoboolean)
  
  let defitonum = Number(defi)
  console.log(defitonum + " " + typeof defitonum)

  /* 3 - perform conversion of Null to numeric */
  let nul = null
  console.log(nul + " " + typeof nul)

  let nultonum = Number(nul)
  console.log(nultonum + " " + typeof nultonum)

  /* 4 - perform conversion of String to numeric and boolean */
  let ToDo = "Complete"
  console.log(ToDo + " " + typeof ToDo)

  let ToDo21 = Number(ToDo)
  console.log(ToDo21 + " " + typeof ToDo21)

  let ToDotoboo = Boolean(ToDo)
  console.log(ToDotoboo + " " + typeof ToDotoboo) 