// Arithematic Operators ....
let a = 8;
let b = 6;

console.log("a + b : " , a+b);     // Addition ....
console.log("a - b : " , a-b);     // Subtration ....
console.log("a * b : " , a*b);     // Multiplication ....
console.log("a / b : " , a/b);     // Division ....
console.log("a % b : " , a%b);     // Modulud ....
console.log("a ++ : " , a++);     // Increment ....
console.log("++ a : " , ++a);     // Increment ....
console.log("a -- : " , a--);     // Decrement ....
console.log("-- a : " , --a);     // Decrement ....
console.log("a ** b : " , a**b);     // Exponentiation ....


// Assignment Operators ....
let x = 13;       //      =
let y = 2;       //      =

console.log(x += y);       //     +=      (x = x + y)
console.log(x -= y);       //     -=      (x = x - y)
console.log(x *= y);       //     *=      (x = x * y)
console.log(x /= y);       //     /=      (x = x / y)
console.log(x %= y);       //     %=      (x = x % y)
console.log(x **= y);      //    **=      (x = x ** y)


// Comparison Operators ....
let comp1 = 6;
let comp2 = 7;

//     ==       Equals to
//     !=       Not equals to
//     ===      Equal value and type 
//     !==      Not equal value or not equal type 
//     <        Less than 
//     <=       Less than or equal to 
//     >        Greater than
//     >=       Greater than or equal to 
//     ?        Ternary Operator 

console.log("comp1 == comp2 is : " , comp1 == comp2);
console.log("comp1 != comp2 is : " , comp1 != comp2);
console.log("comp1 === comp2 is : " , comp1 === comp2);
console.log("comp1 !== comp2 is : " , comp1 !== comp2);
console.log("comp1 < comp2 is : " , comp1 < comp2);
console.log("comp1 <= comp2 is : " , comp1 <= comp2);
console.log("comp1 > comp2 is : " , comp1 > comp2);
console.log("comp1 >= comp2 is : " , comp1 >= comp2);


// Logical Operators ....
let log1 = 5;
let log2 = 6;

//     &&       AND Operator
//     ||       OR Operator
//     !        NOT Operator

console.log((log1 > 10) && (log2 < 10));
console.log((log1 > 10) || (log2 < 10));
console.log(!(true));
console.log(!(false));