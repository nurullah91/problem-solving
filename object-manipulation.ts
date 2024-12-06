// Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
{
  // Define the Book interface
  interface Book {
    title: string;
    author: string;
    year: number;
  }

  // Array of books
  const books: Book[] = [
    { title: "Bangla", author: "NCTB", year: 2012 },
    { title: "English", author: "Bd Govt.", year: 2024 },
    { title: "Math", author: "Bd Govt", year: 2012 },
    { title: "Physics", author: "NCTB", year: 2000 },
  ];

  // Function to extract book titles
  function getBookTitles(books: Book[]): string[] {
    return books.map((book) => book.title);
  }

  // Get the result
  const bookTitles = getBookTitles(books);

  // Print the result
  console.log(bookTitles);
  // Output: ['To Kill a Mockingbird', '1984', 'The Great Gatsby', 'Moby Dick']
}
