const marks = [80, 80, 50];

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length;

    if (average < 60) return 'F';
}