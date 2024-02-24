 console.log("hi")

let arr=[-7,3,4,-6]
function positiveSum(arr) {
     var sum=0;
     
    for(var i=0;i<arr.length;i++){
      if(arr[i] > 0){
       sum+=arr[i]}
    else if(arr[i] < 0){
        sum=arr[i]
    }
    }}
// } 
// let negative=[]
// let sum=0
// negative = arr.filter((x) => x<=0)
// sum=  arr.filter((x)=> x>0).reduce((a, c) => a + c, 0);}
// return [negative,sum]
//   } return sum}


// function positiveSum (arr) {
//     return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
//   }




console.log(positiveSum(arr))

// console.log("hi")

// let arr=[-7,3,4,-6]
// function positiveSum(arr) {

// let negative=[]
// let sum=0
// negative = [arr.filter((x) => x<0)]
// sum =  arr.filter((x)=> x>0).reduce((a, c) => a + c, 0);
// return [negative,sum]
// }



// console.log(positiveSum(arr))