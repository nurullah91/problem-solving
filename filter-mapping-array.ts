// Title: Array Filtering and Mapping
// Problem-1: Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

// Array of people
const people: Person[] = [
  { name: "Nurullah", age: 25, gender: "male" },
  { name: "Samia", age: 30, gender: "female" },
  { name: "Bhuiyan", age: 20, gender: "male" },
  { name: "Sadia", age: 35, gender: "female" },
];

// Function to filter out females and map names of males
function getMaleNames(people: Person[]): string[] {
  return people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

// Get the result
const maleNames = getMaleNames(people);

// Print the result
console.log(maleNames); // Output: ['Nurullah', 'Bhuiyan']
