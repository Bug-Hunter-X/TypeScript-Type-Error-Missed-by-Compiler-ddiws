function add(a: number, b: number): number {
  return a + b;
}

function addString(a: string, b: string): string {
  return a + b;  //Correct string addition
}

let result1 = add(1, 2); // Correct usage
console.log(result1); //Output: 3

let result2 = addString("1", "2"); // Correct usage
console.log(result2); //Output: "12"

//let result3 = add(1, "2"); // This will now throw a compile-time error
//console.log(result3);

//Or use a type guard
function isNumber(x: any): x is number {
  return typeof x === 'number';
}
function addSafe(a: any, b: any): number {
    if (isNumber(a) && isNumber(b)) {
        return a + b
    }
    throw new Error("Invalid input types")
}
let result4 = addSafe(1,2)
console.log(result4) //Output: 3
let result5 = addSafe(1, "2") // Throws error at runtime
console.log(result5)