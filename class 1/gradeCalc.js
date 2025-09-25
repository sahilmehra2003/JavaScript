// 90 -A
// 80 -B
// 70 -C
// 60>=D
// F



function calcGrade(marksScored){
    if (marksScored>=90) {
        return 'A';
    }else if(marksScored>=80)
        return 'B';
    else if(marksScored>=70){
        return 'C';
    }else if(marksScored>=60){
        return 'D';
    }else{
        return 'F'
    }    

}

let gradeObtained=calcGrade(92);
console.log("Grade scored: ",gradeObtained);
