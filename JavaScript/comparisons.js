// Strings compare with dictionary order (unicode order for cases)
"Z" > "A" // true
"z" > "Z" // true
"abc" > "ab" // true
"cat" > "car" // true

// == comparison converts operands to numbers
true == 1 // true
null == undefined // true (special weird case)
"0" == 0 // true
"0" == false // true
null == 0 // false (only null and undefined is the same in ==)
undefined == 0 // false

// but
null > 0 // false
null >= 0 // true (>= and <= converts null to 0)
undefined >= 0 // false (undefined is converted to NaN)

// === strict comparison does not convert operands
true === 1 // false