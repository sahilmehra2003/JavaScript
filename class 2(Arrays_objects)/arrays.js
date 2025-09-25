const teas=['masala chai','Oolong Tea' ,'Green tea','herbal tea' ,'black tea','lemon tea'];

teas.push('chamomile tea');

const index=teas.indexOf('Oolong Tea');
if (index!==-1) {
    teas.splice(index,1); // from index we want to start removing element 1->no. of element we want to remove
}
console.log("newTea array: ",teas);
;

// teas that are caffeinated
const filteredTeas= teas.filter((tea)=>tea!='herbal tea')
console.log('filtered teas: ',filteredTeas);

teas.sort((a,b)=>a.localeCompare(b));
console.log("sorted array: ",teas);


// print each element of an array
teas.forEach((tea,i)=>{
    console.log(`Tea at index ${i} is ${tea}`);
})
// normal

let caffeinatedTeasCount=0;
teas.forEach((tea)=>{
    if (tea!=='herbal tea') {
        caffeinatedTeasCount++
    }
})
console.log(caffeinatedTeasCount);

// Using reduce
// const caffeinatedTeasCount=teas.reduce((count,tea)=>tea!='herbal tea' ? count+1 : count,0)
// console.log("Caffeinated tea count: ", caffeinatedTeasCount);

const upperCaseTea=[];
teas.forEach((tea)=>{
    upperCaseTea.push(tea.toUpperCase());
})

console.log("uppercase array: ",upperCaseTea);

let longestTea=teas[0];
for(let i=0;i<teas.length;i++){
  if (teas[i].length>longestTea.length) {
    longestTea=teas[i];
  }  
}
console.log('Tea with most characters: ',longestTea);

const reversedArray=[];
for(let i=teas.length-1;i>0;i--){
    reversedArray.push(teas[i]);
}
console.log("reversed array: ",reversedArray);

