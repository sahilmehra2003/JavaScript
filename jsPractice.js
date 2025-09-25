const teas=["Green tea","Lemon Tea","Masala Chai"];
console.log(teas);


teas.push("Chamomile Tea");

const index= teas.indexOf("Lemon Tea");
if (index>-1) {
    teas.splice(index,1);
}

const caffinatedTeas= teas.filter((tea)=>tea!=="Herbal Tea");
console.log(caffinatedTeas);

for (let index = 0; index < teas.length; index++) {
    console.log(teas[index]);
}

let count=0;
for (let index = 0; index < teas.length; index++) {
    if (teas[index]!=="Herbal Tea") {
        count++;
    }
}
console.log(count);

const newArray=teas.map(tea=>tea.toUpperCase());
console.log(newArray);

function teaWithMaxChar(teas){
let length=0;let i=-1;
teas.forEach((tea,teaIndex)=>{
     if (tea.length>length) {
        length=tea.length
        i=teaIndex;
     }
})
return teas[i];
}
const reversedArray=[];
for(i=teas.length-1;i>=0;i--){
    reversedArray.push(teas[i]);
}
console.log(reversedArray);

console.log("tea with maxLength: ",teaWithMaxChar(teas));