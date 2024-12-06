// Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
{
  // Car interface
  interface Car {
    make: string;
    model: string;
    year: number;
  }

  // Array of car objects
  const cars: Car[] = [
    { make: "Toyota", model: "Corolla", year: 2020 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Focus", year: 2022 },
    { make: "Chevrolet", model: "Malibu", year: 2019 },
  ];

  // Function to sort cars by year in ascending order
  function sortCarsByYear(cars: Car[]): Car[] {
    return cars.sort((a, b) => a.year - b.year);
  }

  // Get the sorted array
  const sortedCars = sortCarsByYear(cars);

  // Print the sorted array
  console.log(sortedCars);

  /*
  Output:
  [
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Chevrolet", model: "Malibu", year: 2019 },
    { make: "Toyota", model: "Corolla", year: 2020 },
    { make: "Ford", model: "Focus", year: 2022 }
  ]
  */
}
