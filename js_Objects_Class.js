const obj1 = {
  fname: "SAHIL",
  lname: "Mehra",
  getFullname: function () {
    if (this.lname !== undefined) return `${this.fname} ${this.lname}`;
  },
};

const obj2 = {
  fname: "Rakesh",
  lname: "Mishra",
 
};

obj2.__proto__=obj1;
//obj1.__proto__=null; ->Don't modify __proto__ 
console.log(obj2.getFullname()) // this will work as it is present in objec1 and object 1 is present in proto of obj2
console.log(obj2.toString());

console.log(obj1.toString());

// ** Here we are violating the Dry Principle
// console.log(obj1.getFullname());
// console.log(obj2.getFullname());


//**  We will use class to avoid violating dry

class Person {
    // parameterised constructor
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullname() {
    if (this.lname !== undefined) return `${this.fname} ${this.lname}`;
  }
}

const p1 = new Person("Piyush", "Garg");
const p2 = new Person("Piyush", "Garg");

console.log(p1.getFullname())
console.log(p1.toString()) //-> toString() may not be defined but present in its proto so we can call it

// ** Class ka prototype
console.log(Person.prototype);

class A{
    functionInsindeA(){
        return "Hello from A";
    }
}
class B{
    functionInsindeB(){
        return "Hello from B"
    }
}
const obj3=new B();
B.prototype.__proto__=A.prototype; // this is not syntaically good so we use extends keyword

class C extends A{
   functionInsindeC(){
    return 'Hello from c'
   }
}
//obj3.__proto__=A.prototype;

console.log(obj3.functionInsindeA());
console.log(obj3.functionInsindeB())

const obj4=new C();
console.log(obj4.functionInsindeA())
console.log(obj4.functionInsindeC());