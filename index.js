const person={
    name:"Sahil",
    age:21,
    hobbies:["Coding","Gym","Cricket"],
    hasGf:false,
    isMarried:false,
    getFullName:function(){
        return 'Sahil Mehra'
    },
    address:{
        houseNo: 5,
        street:22,
        countryCode:'IN',
        state:"Delhi"
    }

}
console.log(person.address);

let fname='Sahil'
let fname2=fname; // copies the value

console.log(fname)
fname2='piyush'
console.log(fname)

let p1={
    fname:'Sahil',
    lname:'Mehra',
    address:{
        h1:1,
        street:22
    }
}
console.log(p1["fname"]);
// p2=p1 refrence
// let p2={
//     ...p1  // shallow copy of p1 is made
// }; 
//p2.address.h1=123 // here address is passed by refrence as address is an inner object and ... operator only makes shallow copy

// Deep Copy
const p1KaString=JSON.stringify(p1);
console.log(p1KaString)

let p2=JSON.parse(p1KaString)
console.log(p2)


p2.fname='Rithik'
p2.address.h1=123

console.log("fname" in p1);
console.log(p1.hasOwnProperty('fname'));
console.log(p2); 
console.log(p1);

const p3=Object.assign(p2); // reference
const p4=Object.assign({},p2); //shallow copy
const p5=structuredClone(p2); // deep copy
p3.fname='rohan'

p3.address.h1=224
console.log(p2.fname)