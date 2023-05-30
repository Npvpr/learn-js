let answer;

// String Concatenation
// no matter the place, if one of the two operands is string, the other one is converted to string
"1" + 2 // "12"
1 + "2" // "12"
// calculation is done from left to right
1 + 1 + "2" // "22"
"1" + 1 + 2 // "112"

// + only supports string concatenation, other operators converts all to numbers
"1" - 2 // -1
"6" / "2" // 3

// Unary operators
// + converts to number
// - converts to number and negates it

// Increment
// Prefix increment
let counter = 0, result = 0;
result = ++counter; // counter = 1, result = 1

// Postfix increment
counter = 0, result = 0;
result = counter++; // counter = 1, result = 0

console.log(answer);