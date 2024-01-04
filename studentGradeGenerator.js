//create a function to generate student grades
function generateStudentGrade(){
    //prompt for user to input marks
    const userMarks = prompt("Enter student marks");
//converts input into a number
    const marks = parseFloat(userMarks);

//checks if the number input is a valid number
    if (isNaN(marks) || marks < 0 || marks >100 ) {
        console.log("Invalid input. Please eneter a number between 0 and 100.");
        return;
    }
//Determine the grade from marks
    let grade;
    if (marks > 79){
        grade = 'A';
    }else if (marks >= 60 && marks <= 79){
        grade = 'B';
    }else if (marks >= 50 && marks <= 59){
        grade = 'C';
    }else if (marks >= 40 && marks <= 49){
        grade = 'D';
    }else {
        grade = 'E';
    }
//output the grade
    console.log(`Grade: ${grade}`);
}
//test if the function works
generateStudentGrade();