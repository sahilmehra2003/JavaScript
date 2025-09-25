const person = {
  age: 21,
  firstName: "Sahil",
  lastName: "Mehra",
  hobbies: ["Coding", "Gaming"],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  isMarried: false,
  address: {
    hNo: 2,
    street: 3,
    state: "Delhi",
    countryCode: "IN",
  },
};

console.log(person.age);
console.log(person.firstName);
const fullName = person.getFullName();
console.log(fullName);
console.log(person.address.hNo);

//**  Understanding Memory
let p1={
    fname:'Hitesh'
}

let p2=p1;

console.log(p2);

p2.fname='Ramesh';
console.log(p1); 


// ** Copying objects

//  1 Shallow Copy

const obj1={
    fname:"Sahil",
    lname:"Mehra",
    address:{
        street:"Vikas Puri Ext",
        hNo:21,
        city:"Delhi"
    }
}

 const obj2=obj1; //! Here we have added the reference of obj1 into object 2 ie both obj1 and obj2 point to same address

const obj3={...obj1} // ! Here we have created a shallow copy of ob1 

obj3.fname="Rohan" // updating the fname of obj3 will not change fname of obj1 since it is a copy
console.log(obj3);
console.log(obj1);
obj3.address.hNo=3;
console.log(obj1) // but updating the house no. will cause the house no. in original object obj1 to also change since it is not a copy but a reference as (...) spread operator creates shallow copy so inner objects are not copied

//**  2 Deep Copy to avoid this problem 
const obj1kaString=JSON.stringify(obj1); // pehle object ko string banao
const obj4=JSON.parse(obj1kaString); // fir string ko vapas object mai parse kara-> object 4 has different address but same values as obj1
obj4.address.hNo=30; 
console.log(obj4);
console.log(obj1);