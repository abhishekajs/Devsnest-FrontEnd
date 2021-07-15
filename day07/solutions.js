// Solution 1
const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
}
for(let i in student) {
    console.log(i);
}

// Solution 2
const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
}
console.log(student);
delete student.rollno;
console.log(student);

// Solution 3
const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
}
len = []
for(let i in student) {
    len.push(i);
}
console.log(len.length);

// Solution 4
const library = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true}, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]
library.forEach((i) => {
    console.log(i.author);
    console.log(i.title);
    console.log(i.readingStatus);
    console.log('-------------')
})

// Solution 5
const Volume = (h, r) => {
    return Math.PI * h * r * r
};
let h = prompt("Enter Height of cylinder ")
let r = prompt("Enter Radius of cylinder ")
console.log(Volume(h,r).toFixed(4));

// Solution 6
const library = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245}]
library.sort((a, b) => a.libraryID-b.libraryID)
console.log(library)