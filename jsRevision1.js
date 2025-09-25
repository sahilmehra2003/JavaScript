let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity", amount: 100, category: "Utilities" },
    { description: "Rent", amount: 1500, category: "Rent" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
]

const expenseReport = expenses.reduce((acc, curr) => {
    if (!acc[curr.category]) {
        acc[curr.category] = 0
    }
    acc[curr.category] += curr.amount;
    return acc;
}, []);

console.log("Expense Report is: ", expenseReport);

const arr = [];
arr.splice()

function checkTruthy(value) {
    if (value) {
        console.log("Truthy");
    } else {
        console.log("Falsy");
    }
}

// checkTruthy(1);
// checkTruthy(0);
// checkTruthy("");->'falsy'
// checkTruthy("s");
// checkTruthy([])->'truthy'
//checkTruthy(0n)-> BigInt zero
// checkTruthy(null);
// checkTruthy(undefined);
// checkTruthy(NaN);



// let tasks = [
//     { description: "task1", completed: false, priority: 2 },
//     { description: "task2", completed: true, priority: 1 },
//     { description: "task3", completed: false, priority: 3 },
// ]


// let pendingSortedTasks = tasks
//     .filter((task) => !task.completed)
//     .sort((a, b) => a.priority - b.priority);
   

// let movieRatings = [
//     { title: "Movie1", ratings: [4, 5, 4] },
//     { title: "Movie2", ratings: [3, 4, 5] },
//     { title: "Movie3", ratings: [5, 5, 5] },
// ];
// let avgMovieRationg = movieRatings.map((movie) => {
//     let sum = movie.ratings.reduce((acc, currRating) => (acc + currRating), 0);
//     let avg = parseFloat((sum / movie.ratings.length).toFixed(2));
//     // ! this is wrong as we are mutating the original array
//     //movie.ratings = avg;
//     //return movie;
//     // * this is correct approach
//     return {title:movie.title,averageRatings: avg };
// })

// //console.log(avgMovieRationg);
// //console.log(pendingSortedTasks);    
// //console.log(movieRatings);


// // ** call, Bind

// let person1 = {
//     name: "sahil",
//     greet: function(){
//         console.log(`Hello,${this.name}`);
//     }
// }

// let person2 = {
//     name: "sarthak",
//     age:11
// }

// person1.greet.call(person2);
// When you use .call(), you're overriding the context (this) at call time, not based on where the function is defined.
