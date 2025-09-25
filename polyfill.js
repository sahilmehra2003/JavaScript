const arr = [1, 2, 3, 4, 5, 6];

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    //const originalArr = this; // jis bhi array pe call karega vo this mai available ho jayega
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i); // calling the user function for each value and passing arr value and index
    }
  };
}

// forEach polyfill-> for each doesn't return anything
// Input->callbackfunction with parameter as index,value
// calls the function for every value
arr.myForEach(function (value, index) {
  console.log(`Value at Index ${index} is ${value}`);
});


// polyfill for map Function
// return newArray, Each element pe iterate karta ha,userFn
if (!Array.prototype.myMap) {
    Array.prototype.myMap=function(callback){
        const result=[];
        for(let i=0;i<this.length;i++){
            const val=callback(this[i],i,this)
            result.push(val);
        }
        return result;
    }
}

// polyfill for filter
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter=function(callback){
        const result=[];
       for(let i=0; i<this.length;i++){
         if(callback(this[i],i,this)){
            result.push(this[i]);
         }
       }
       return result;
    }
}

// polyfill for push
if (!Array.prototype.myPush) {
    Array.prototype.myPush=function(...elements){
       for(let i=0;i<elements.length;i++){
        this[this.length]=elements[i];
       }                                           
       return this.length;
    }
}

// polyfill for pop
if (!Array.prototype.myPop) {
   Array.prototype.myPop=function(){
      if (this.length===0) {
         return undefined
      }
      const popElement=this[this.length-1];
      this.length=this.length-1;
      return popElement;
   }
}

// polyfill for at
if (!Array.prototype.myAt) {
   Array.prototype.myAt=function(index){
     if (index>=this.length) {
        return undefined;
     }
     return this[index];
   }
}

if (!Array.prototype.myShift) {
   Array.prototype.myShift=function(){
      if (this.length===0) {
        return undefined;
      }                                         
      const removedElement= this[0];
      for(let i=0;i<this.length-1;i++){
          this[i]=this[i+1];
      }     
      this.length=this.length-1;
      return removedElement;
   }
}



// map function
const result= arr.map((val)=>val-9);
console.log(result)

// filter function 
//input ->userFunction
// output -> new Array with values of original array  that meets the given condition
const filteredResult=arr.myFilter((val)=>val==0)
console.log(filteredResult)


// push function input-> accepts an array of numbers
//output-> returns the last index at which value is added
const pushedArray=arr.myPush(3,1,4);
console.log(pushedArray)
console.log(arr);

// at function
//input->index value
//output-> value present at that index
const searchedElement= arr.myAt(7);
console.log(searchedElement)



// pop function
// input -> no input
// return the removed element
const removedElement= arr.myPop()
console.log(removedElement)
console.log(arr)
let arr2=[];
arr2.myPop()
console.log(arr2.length)


const newArray=arr.myShift();
console.log(newArray)
console.log(arr)
