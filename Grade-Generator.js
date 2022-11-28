//program requires students to input their marks for Grading
let marks = 0 <=100;
// function to generate your grade
function correctGrade(studentMarks){
    if (studentMarks>=79 && studentMarks<=100){
        console.log ("Grade A");
    }else if(studentMarks<=79 && studentMarks>=60){  
    console.log("Grade B");
    }else if(studentMarks<=59 && studentMarks>=49){
        console.log("Grade C");
    }else if(studentMarks<=49 && studentMarks>=40){
        console.log("Grade D");
    }else if (studentMarks<40){
        console.log("Grade E");
    }else{
        console.log("Invalid")
    }
}
//call to check your correct Grade
correctGrade(101); 