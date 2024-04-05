// This uses if-else to determine the grade

function calculateGrade(){
    // The string is passed as an integer using parseInt
    const marks = parseInt(document.getElementById("marks").value);
    let grade;
    // Determine grade based on entered marks
    if (marks < 40) {
        grade = "E";
    }
    else if (marks >= 40 && marks <= 49) {
        grade = "D"
    }
    else if (marks >= 50 && marks <= 59) {
        grade = "C"
    }
    else if (marks >= 60 && marks <= 79) {
        grade = "B"
    }
    else if (marks > 79 && marks <= 100) {
        grade = "A"
    }
    else {
        grade = "Invalid Entry"
    }
    document.getElementById("grade").textContent = `Grade: ${grade}`
}