function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // Type error will not be caught here
console.log(result);