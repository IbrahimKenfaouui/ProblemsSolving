function countSheeps(sheep) {
    // TODO
    return sheep.filter((x)=> x== true).reduce((a,b)=>a+b)
  }
  console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true]))