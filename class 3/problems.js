const teas={
    name:"Lemon Tea",
    "tea type":"Green",
    caffeine:"low"
}
console.log(teas.name);
console.log(teas["tea type"]);
teas.origin="China"; // hOw can we add property inside const 
teas.caffeine="Medium"

delete teas["tea type"]; // to remove a property from object

console.log(teas.hasOwnProperty("origin"));
console.log("origin" in teas);

for (let key in teas) {
   console.log(key +": " + teas[key]);    
}

const myTeas={
    greenTea:{
        name:"Green Tea"
    },
    blackTea:{
        name:"Black Tea"
    }
}

const teaCopy={...teas};

const newTea=new Object(myTeas); // This returns the same refernce not clone the object