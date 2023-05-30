// for console log
let answer;

// String Conversion
String(undefined) // "undefined"
String(null) // "null"
String(true) // "true"
String(false) // "false"
String(0) // "0"
String(-0) // "0"
String(NaN) // "NaN"
String(Infinity) // "Infinity"
String(-Infinity) // "-Infinity"
String([]) // ""
String([1, 2, 3]) // "1,2,3"
String({}) // "[object Object]"
String(function() {}) // "function() {}"
String(Symbol("id")) // "Symbol(id)"
String(BigInt(10)) // "10n"

// Numeric Conversion
Number(undefined) // NaN

Number(null) // 0

Number(true) // 1
Number(false) // 0

Number("  ") // 0
Number(" 123 ") // 123 (leading or trailing spaces are trimmed)
Number(" 1 2 3 ") // NaN (cannot trim middle spaces)
Number("123z") // NaN

// Boolean Conversion
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean("") // false

// all values and non-empty strings are true
Boolean(1) // true
Boolean(" ") // true
Boolean("0") // true
Boolean("false") // true
Boolean([]) // true (but [] == false is true)
Boolean({}) // true
Boolean(function() {}) // true

console.log(answer);