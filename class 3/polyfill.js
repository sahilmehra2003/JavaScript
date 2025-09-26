const arr=[1,2,3,4,5,7];

// To write a polyfill understand the real function signature

//signature->i/o of the function
//  for Each signature=> No return, function input,value,index
// Calls my fn for every value
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach=function(userFn){
        const originalArray=this; // this points to current object
        for(let i=0;i<originalArray.length;i++){
              userFn(originalArray[i],i);
        }
    }
}

arr.myForEach((val,i)=>{
    console.log("Value of index ",i," is: ",val);
})

// map function-
// returns new Array, Iterate over each element,userFn perform on each element and return a new array with result values
const newArr= arr.map((val,i)=>val*i);
console.log(newArr)

if (!Array.prototype.myMap) {
    Array.prototype.myMap=function(userFn){
        const result=[];
        for(let i=0;i<this.length;i++){
            const val=userFn(this[i],i);
            result.push(val);
        }
        return result;
    }
}
const newArr2=arr.myMap((val,i)=>val*2+i);
console.log(newArr2)


// filter 
// Signature: Return -new ARRAY | input =userFn,
//  agar user ka fn return true we include that value in new Array
const filteredArr=arr.filter((val)=>val!==2);
console.log(filteredArr);

// myFilter
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter=function(userFn){
        const result=[];
        for(let i=0;i<this.length;i++){
            if (userFn(this[i],i)) {
                result.push(this[i]);                
            }
        }
        return result;
    }
}
const filteredArr2=arr.myFilter((val,i)=>val===i+1);
console.log(filteredArr2);