# TypeScript Type Error Missed by Compiler

This repository demonstrates a scenario where a TypeScript type error might not be caught by the compiler due to implicit type coercion.

## Bug Description

The `add` function is declared to accept two numbers and return a number. However, the code calls `add` with a number and a string.  While this is a type error, the compiler might implicitly convert the string to a number, allowing the code to compile without error, but resulting in unexpected behavior at runtime.

## Solution

The solution involves using stricter type checking and avoiding implicit type conversions to ensure that the TypeScript compiler catches this type of error during compilation.