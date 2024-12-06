// Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
{
  // Function to square a number
  const square = (num: number): number => num * num;

  // Function to double a number
  const double = (num: number): number => num * 2;

  // Function to add 5 to a number
  const addFive = (num: number): number => num + 5;

  // Composed function
  const composedFunction = (num: number): number => {
    const squared = square(num); // Step 1: Square the number
    const doubled = double(squared); // Step 2: Double the result
    return addFive(doubled); // Step 3: Add 5
  };

  // Test the composed function
  const result = composedFunction(3);
  console.log(result); // Output: 23
}
