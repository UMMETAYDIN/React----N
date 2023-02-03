//? Spread Operator for Array Concatenation:

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]


//? Spread Operator for Object Clone:

let originalObject = { name: "John", age: 30 };
let clonedObject = { ...originalObject };
console.log(clonedObject); // Output: { name: "John", age: 30 }


//? Spread Operator for Function Arguments:
function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  }
  console.log(sum(1, 2, 3)); // Output: 6
  

  //?Spread Operator for Math Max and Min:


  let numbers = [5, 10, 15];
console.log(Math.max(...numbers)); // Output: 15
console.log(Math.min(...numbers)); // Output: 5


//?Spread Operator for CSS Grid:

let gridTemplateColumns = ["1fr", "2fr", "1fr"];
let gridStyles = {
  display: "grid",
  gridTemplateColumns: [...gridTemplateColumns]
};
