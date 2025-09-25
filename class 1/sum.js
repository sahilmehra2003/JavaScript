let myArray=[1,4,2,3,6,5];


function sumFac(numbers){
  let sum=0;
  for (let index = 0; index < numbers.length; index++) {
     sum +=numbers[index] ; 
  }
  return sum;
}

let sumFacSum=sumFac(myArray);
console.log("Sum: ",sumFacSum);