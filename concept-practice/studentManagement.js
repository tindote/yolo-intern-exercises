/**
 * This file include an array and some function which show what is functional programming
 * Through these functions you can see that:
 * - they not change the original data   
 * - they return new data 
 * - no side-effect
 */


const students = [
    {
        id: 1,
        name: "An",
        score: 8
    },
    {
        id: 2,
        name: "Bình",
        score: 6
    },
    {
        id: 3,
        name: "Chi",
        score: 9
    }
];

/**
 * Function to find a student in array by id
 * @param {object} students 
 * @param {*} id 
 * @returns 
 */
function findStudentById(students, id){
    for(const student of students){
        if(student.id === id){
            return student;
        }
    }
    return null;
}

/**
 * Function to get all passed student, mean that student's score > 5
 * @param {array} students 
 */
function getPassedStudent(students){
    let passedStudents = [];
    for(const student of students){
        if (student.score > 5){
            passedStudents.push(student);
        }
    }
    return passedStudents;
}

/**
 * Function to get average score of students
 * 1. loop through students to get sum of score
 * 2. calculate avg score by divide sum to number of student
 * @param {array} students 
 * @returns 
 */
function getAverageScore(students){
    let avgScore = 0;
    let sumScore = 0;
    
    for(const student of students){
        sumScore += student.score; 
    }

    avgScore = sumScore / students.length;

    return avgScore
}

/** 
 * Function to get student who have highest score
 * @param {array} students array
 */
function getHighestScoreStudent(students){
    let highestStudent = students[0];

    for (const student of students) {
        if(student.score > highestStudent.score){
            highestStudent = student;
        }
    }
    return highestStudent;
}

/**
 * Function to update score for a student 
 * @param {array} students 
 * @param {*} id 
 * @param {number} newScore 
 * @returns 
 */
function updateScore(students, id, newScore){
    let newStudents = [];

    for(const student of students){
        if(student.id === id){
            newStudents.push({
                id: student.id,
                name: student.name,
                score: newScore
            });
        }else{
            newStudents.push(student);
        }
    }


    return newStudents;
}
