let list = document.querySelector("ul");

function convert(grade) {
    switch (grade){
        case 'A':
            points = "Four";
            break;
        case 'B':
            points = "Three";
            break;
        case 'C':
            points = "Two";
            break;
        case 'D':
            points = "One";
            break;
        case 'F':
            points = "Zero";
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
    {last: 'Andrus', first: 'Aaron', grade: "D"},
    {last: 'Masa', first:'Manny', grade: "C"},
    {last: 'Tanda', first: 'Tamanda', grade: "B"}
];

students.forEach(student => { 
    let letterGrade = student.grade;
    student.grade = convert(letterGrade);
    console.log(student.grade);
    let li = document.createElement("li");
    li.textContent = student.grade;
    list.appendChild(li);
    let name = document.createElement("p");
    name.textContent = `${student.first} ${student.last}`;
    let line = document.createElement("hr");
    document.body.append(name, line);
});

const sum = students.reduce((total, student) => {
    if (student.grade === "One") {
        return total + 1;
    }
    else if (student.grade === "Two") {
        return total + 2;
    }
    else if (student.grade === "Three") {
        return total + 3;
    }
    else if (student.grade === "Four") {
        return total + 4;
    }
    else if (student.grade === "Zero") {
        return total + 0;
    }
    return total;
}, 0);

console.log(sum);

const mean = sum / students.length;
console.log(mean);