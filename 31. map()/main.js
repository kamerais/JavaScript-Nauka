// .map() = przyjmuje callback-i i aplikują ją dla każdego elementu z listy
//          zwracając nową listę

const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares); // output: [1,4,9,16,25]
console.log(cubes); // output: [1,8,27,64,125]

function square(element){
    return element ** 2;
}
function cube(element){
    return element ** 3;
}

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper); // output: ['SPONGEBOB', 'PATRICK', 'SQUIDWARD', 'SANDY']
console.log(studentsLower); // output: ['spongebob', 'patrick', 'squidward', 'sandy']

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates); // output: ['1/10/2024', '2/20/2025', '3/30/2026']

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}