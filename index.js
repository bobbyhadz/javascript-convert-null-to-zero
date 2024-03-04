// EXAMPLE 1 - Convert NULL/Undefined to 0 in JavaScript

let val = null;

val ??= 0;

console.log(val); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert NULL/Undefined to 0 using nullish coalescing

// let val = undefined;

// val = val ?? 0;

// console.log(val); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert NULL or Undefined to 0 using the ternary operator

// let val = undefined;

// val = val == null ? 0 : val;

// console.log(val); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert NULL or Undefined to 0 using an `if` statement

// let val = undefined;

// if (val == null) {
//   val = 0;
// }

// console.log(val); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert NULL to 0 using the logical OR (||) operator

// let val = null;

// val = val || 0;

// console.log(val); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 6 - Convert NaN to 0 using JavaScript

// let val = NaN;

// val = val || 0;

// console.log(val); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 7 - Convert NaN to 0 using Number.isNaN

// let val = NaN;

// if (Number.isNaN(val)) {
//   val = 0;
// }

// console.log(val); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 8 - Convert NaN to 0 using the ternary operator

// let val = NaN;

// const result = Number.isNaN(val) ? 0 : val;

// console.log(result); // 👉️ 0
