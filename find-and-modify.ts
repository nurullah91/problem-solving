// Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
{
  // Person interface
  interface Person {
    name: string;
    age: number;
    gender: string;
  }

  // Array of people
  const people: Person[] = [
    { name: "John", age: 25, gender: "male" },
    { name: "Alice", age: 30, gender: "female" },
    { name: "Bob", age: 20, gender: "male" },
  ];

  // Function to find and modify a person's age
  function modifyAge(people: Person[], name: string, newAge: number): Person[] {
    const person = people.find((p) => p.name === name);
    if (person) {
      person.age = newAge;
    } else {
      console.log(`Person with name "${name}" not found.`);
    }
    return people;
  }

  // Update John's age to 35
  const updatedPeople = modifyAge(people, "John", 35);

  // Print the updated array
  console.log(updatedPeople);

  /*
  Output:
  [
    { name: "John", age: 35, gender: "male" },
    { name: "Alice", age: 30, gender: "female" },
    { name: "Bob", age: 20, gender: "male" }
  ]
  */
}
