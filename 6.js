function digitize(n) {
    //code here
    // n = n.toString()
    //return [...n].reverse()
   // return Array.from(n).reverse()
   return n.split('').reverse()
    
  }
console.log(digitize('hello'))