const students = [
    { id: 1, name: "Yuvaan", age: 20, major: "Computer Science" },
    { id: 2, name: "Abinav", age: 22, major: "Information Technology" },
    { id: 3, name: "Shivasai", age: 21, major: "Software Engineering" }
];

students.push({ id: 4, name: "Shiva", age: 23, major: "Data Science" });

const studentToFind = students.find(s => s.name === "Shivasai");
console.log("Found Student:", studentToFind);

students[0].age = 21;

console.log("Student List:");
students.forEach(student => {
    console.log(`${student.name} is studying ${student.major}.`);
});
