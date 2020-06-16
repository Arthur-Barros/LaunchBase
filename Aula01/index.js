const classA  = [
    {
        name: "Arthur",
        grade: 9.8
    },
    {
        name: "Lucas",
        grade: 3
    },
    {
        name: "Joice",
        grade: 2
    },
    {
        name: "Mas um student",
        grade: 10
    }

];

const classB = [
    {
        name: "Rodinei",
        grade: 9.8
    },
    {
        name: "Eu",
        grade: 10
    },
    {
        name: "Artur",
        grade: 1
    },
    {
        name: "Novo Aluno",
        grade: 10
    }

];

function calculateAverage (students){
    let sum = 0;

    for (let i = 0; i < students.length; i++){
        sum = sum + students[i].grade;
    }

    const average = sum / students.length;

    return average;

}

function sendMessage (average, turma){
    if(average > 5){
        console.log(`${turma} average: ${average}. Congrats`);
    }else{
        console.log(`${turma} average: ${average}. Is not good.`);
    }
}

function markAsFlunked (student){
    student.flunked = false;

    if(student.grade < 5){
        student.flunked = true;
    }
}

function sendFlunkedMessage(student){
    if(student.flunked){
        console.log(`${student.name} flunked`);
    }
}


function studentsReprovado(students){
    for(let student of students){
        markAsFlunked(student)
        sendFlunkedMessage(student);
    }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, "Class A");
sendMessage(average2, "Class B");

studentsReprovado(classA);
studentsReprovado(classB);