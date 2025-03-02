/*
Title: Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// const maxOfTwoNumbers = (x, y) => {
//     if (x => y) {
//         return x;
//     } else {
//         return x
//     }
// }
//
// console.log(maxOfTwoNumbers(5, 5));


/*
Title: Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number)
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/


// const isAudit = (x) => {
//     if (x > 18){
//         console.log("Adult")
//     }
//     else {
//         console.log("Minor")
//     }
// }
//
// (isAudit(19))


/*
Title: Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as
an argument. It should return true if the character is a vowel and
false otherwise. For the purposes of this exercise, the character
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// TODO: Finish later
const isCharAVowel = (y) => {
    if (y === 'a'||y === 'i'||y === 'u'||y === 'e'||y === 'o') {
        return true
    }
    else {
        return false
    }
}
console.log(isCharAVowel("u"))


/*
Title: Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings:
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com')
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// const generateEmail =(name, domain) => {
//     let email = name + '@' + domain;
//     return email;
// }
//
// console.log(generateEmail('steven', 'gmail.com'));


/*
Title: Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a
time of day (morning, afternoon, evening) and return a personalized
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/


// const greetUser = (time, name) => {
//     let greeting = (`Good ${time}, ${name}!`)
//     return greeting
// }
// console.log(greetUser('morning', 'Steven'));


/*
Title: Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

// const maxOfThree = (num1, num2, num3) => {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1
//     }
//     else if (num2 >= num1 && num2 >= num3) {
//         return num2
//     }
//     else if (num3 >= num1 && num3 >= num2) {
//         return num3
//     }
// }
// console.log(maxOfThree(3,1,2))

/*
Title: Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments:
the bill amount and the tip percentage (as a whole number).
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

// const calculateTip = (total, percent) => {
//     let result = total * (percent / 100)
//     return result
// }
//
// console.log(calculateTip(100, 20))


//Title: Exercise 8: convertTemperature()
/*
Write a function named convertTemperature.
It takes two arguments: a temperature and a string representing the
scale ('C' for Celsius, 'F' for Fahrenheit).
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

// const convertTemperature =(temp, type) => {
//     if (temp === "f" || temp === "F") {
//         let celcius = (type - 32) *5 / 9
//         return celcius
//     }
//     if (temp === "c" || temp === "C") {
//         let fahrenheit = (type * 9/5) +32
//         return fahrenheit
//     }
// }
// console.log(convertTemperature("c",10))

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator.
It should take three arguments: two numbers and a string representing
an operation ('add', 'subtract', 'multiply', 'divide').
Perform the provided operation on the two numbers.
In operations where the order of numbers is important,
treat the first parameter as the first operand and the
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

// const basicCalculator= (num1, num2, calculate) => {
//     if (calculate === "add" && num1 >= num2) {
//         let add = num1 + num2;
//         return add
//     }
//     if (calculate === "subtract" && num1 >= num2) {
//         let subtract = num1 - num2;
//         return subtract
//     }
//     else if (calculate === "subtract" && num1 < num2) {
//         let subtract = num2 - num1;
//         return subtract
//     }
//     if (calculate === "multiply" && num1 >= num2) {
//         let multiply = num1 * num2;
//         return multiply
//     }
//     if (calculate === "divide" && num1 >= num2) {
//         let divide = num1 / num2;
//         return divide
//     }
//     else if (calculate === "divide" && num1 < num2) {
//         let divide = num2 / num1;
//         return divide
//     }
// }
// console.log(basicCalculator(6,100,"subtract"))