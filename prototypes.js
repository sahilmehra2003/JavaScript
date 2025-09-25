const arr = [1, 2, 3];
console.log(arr);


// **  Adding our custom property into prototypr
Array.prototype.sahil=function(){return("This is sahil")};

console.log(arr.sahil());