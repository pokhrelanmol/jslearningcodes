


// var myName = 'vinod bahadur thapa';
// var myAge = 26;

// console.log(myage);





// Naming Practice
// var _myName = "vinod";
// var 1myName = "thapa";
// var _1my__Name = "bahadur";
// var $myName = "thapa technical";
// var myNaem% = "thapa technical";

// console.log(myNaem%);






/**** Section 4👉 Data Types in JavaScript ****/


// var myName = "vinod thapa";
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var iAmThapas = false;
// console.log(iAmThapas);

// // typeof operator 
// console.log(typeof(iAmThapas));


// DataTypes Practice

// console.log( 10 + "20");
// 9 - "5"
// console.log( 9 - "5"); //bug
// "Java" + "Script"
// console.log( "Java "+ "Script");
// " " + " "
// console.log( " " + 0);
// " " + 0
// "vinod" - "thapa"
// true + true
// true + false
// false + true
// false - true


// console.log("vinod" - "thapa");





// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined? 


// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));
// //2nd javascript bug

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));


// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 


// var myPhoneNumber = 9876543210;
// var myName = "thapa technical";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myPhoneNumber)){
//     console.log("plz enter valid phone no");
// }




// NaN Practice 🤯

  

// NaN === NaN;        
// Number.NaN === NaN; 
// isNaN(NaN);         
// isNaN(Number.NaN);  
// Number.isNaN(NaN);


// console.log(Number.isNaN(NaN));




// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// var vs let vs const 




/**** Section 5👉 Arithmetic operators in JavaScript ****/



// console.log(5+20);


// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

// var x = 5; 
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y );

// I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x == y}`);


// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 27%4);






// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5; 
// console.log(num);
// console.log(newNum);


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.





//3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);








// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&opertor)  (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


// console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);






// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "vinod";

// console.log(myName + " thapa");
// console.log(myName + " bahadur");
// console.log(myName + " bahadur Thapa");





// 😳 4 Challenge Time 
// What will be the output of 3**3? 
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?



// sol 1: ✔
// console.log(9**2); // 9*9
// console.log(10 ** -1); 1/10


// sol 2:  ✔
// console.log(5 + "thapa");

// sol 3: ✔ 

// var a = 5;
// var b = 10;

// output b=5; a=10

// var c = b; //c = 10
// b = a; // b = 5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);


// sol 4: ✔

// var a = 5;
// var b = 10;

// // output b=5; a=10

// a = a + b; // a = 15
// b = a - b; // b = 5; 
// a = a - b; // a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);




// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?


// sol 
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 );

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 );



// ************************************************************


/**** Section 6👉 Control Statement - 
 * 
 * 1️⃣If...Else */
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.


// if raining = raincoat
// else no raincoat


// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }




// 🤩Challenge Time 
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.


// var year = 2020;
// debugger;
// if(year % 4 === 0){
  // if(year % 100 === 0){
    // if(year % 400 === 0){
      // console.log("The year " + year + " is a leap year");
    // }else{
      // console.log("The year " + year + " is not a leap year");
    // }
  // }else{
    // console.log("The year " + year + " is a leap year");
  // }
// }else{
  // console.log("The year " + year + " is not a leap year");
// }




// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 5){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }




// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands
// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");




// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1st without break statment 
// Find the Area of circle, triangle and rectangle?

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "circle" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   



// 🤗break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// 🤗continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.





// 4️⃣ While Loop Statement
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 

// var num=20;
// // block scope 
// while(num <= 10){
//   console.log(num); //infinte loop
//   num++;
// }

// 5️⃣ Do-While Loop Statement

// var num = 20;
// do{
//   debugger;
//   console.log(num); //infinte loop
//   num++;
// }while(num <= 10);

// 6️⃣ For Loop 

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }


// 😀6: challenge Time 🏁
// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
        //   8 * 2 = 16(8*2)
        //  => 8 * 10 = 80

// for(var num = 1; num<= 10; num++){
//     var tableOf = 12;  
//   console.log(tableOf + " * " + num + " = " + tableOf * num);
// }


//**** Section 5 👉 Functions in JavaScript ****//

// A JavaScript function is a block of code designed to perform a particular task.

//  1️⃣Function Definition 

// Before we use a function, we need to define it. 

// A function definition (also called a function declaration, or function statement)
// consists of the function keyword, followed by:The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.


// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }
//

// 2️⃣Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }

// sum();


// 3️⃣ Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.


// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum();
// sum(20,30);
// sum(50,50);
// sum(5,6)



 // **********************************************************************




// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫 

// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

  // OR

  // A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// DRY => do /not repeat yourself






// 4️⃣ Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// var funExp = sum(5,15);



// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"


// function sum(a,b){
//   return total = a+b;
// }

// var funExp = sum(5,25);

// console.log('the sum of two no is ' + funExp );


// 6️⃣ Anonymous Function
 
// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.


// var funExp = function(a,b){
//   return total = a+b;
// }

// var sum = funExp(15,15);
// var sum1 = funExp(20,15);

// console.log(sum > sum1 );
 
// ************************************************************


// 👻 Now It's Time for Modern JavaScript 😍😍 

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏

// 1️⃣ LET VS CONST  vs  VAR

// var myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);

// let myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);


// const myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);



// function biodata() {
//   const myFirstName = "Vinod";
//   console.log(myFirstName);

//   if(true){
//     const myLastName = "thapa";
//   }

//   // console.log('innerOuter ' + myLastName);
// }

// console.log(myFirstName);

// biodata();


// var => Function scope 
// let and const => Block Scope 





// 2️⃣ Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
        //   8 * 2 = 16(8*2)
        //  => 8 * 10 = 80

// for(let num = 1; num<= 10; num++){
//     let tableOf = 12;  
//   // console.log(tableOf + " * " + num + " = " + tableOf * num);
//   console.log( ` ${tableOf} * ${num} = ${tableOf * num}` );
// }








// 3️⃣  Default Parameters
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//   return a*b;
// }

// console.log(mult(3));

//  let adding= (a,b=6)=>{
//   return a+b;
// }
// console.log(adding(5));



// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

  //  ➡ Array Destructuring  🏁

  // const myBioData = ['vinod', 'thapa', 26];

  // let myFName = myBioData[0];
  // let myLName = myBioData[1];
  // let myAge = myBioData[2];
  
// let [myFName,myAge, myLName] = myBioData;
// console.log(myAge);

  // we can add values too 
  

  // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
  // console.log(myDegree);


  // ➡ Object destructuring 🏁
  // const myBioData = {
  //   myFname : 'vinod',
  //   myLname : 'thapa',
  //   myAge : 26
  // }

  // let age = myBioData.myAge;
  // let myFname = myBioData.myFname;

  // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
  // console.log(myLname);





// 5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 

      // let myName = "vinod";
      // const myBio = {
      //   [myName] : "hello how are you?",
      //   [20 + 6] : "is my age"
      // }

      // console.log(myBio);

  // ➡ no need to write key and value, if both are same 

  // let myName = "vinod thapa";
  // let myAge = 26;

  // const myBio = {myName,myAge}

  // console.log(myBio);




 
// 6️⃣ Fat Arrow Function 

// 👻 Normal Way of writing Function  

// console.log(sum()); 

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//  return `the sum of the two number is ${sum}`;
// }

// 👻 How to convert in into Fat Arrow Function 

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum()); 









// 7️⃣Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];

// console.log(MyFavColors);


// ES7 features 

// 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('green');
// console.log(isPresent);


// 2: **
// console.log(2**3); 



// ES8 Features 

// String padding
// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = { name: 'Fred', age: 87 };

// // // console.log( Object.values(person) );
// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));



// ES2018

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);


// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// x = 3.14; 
// console.log(x);





// ************************************************************



/**** Section 7👉 Arrays in JavaScript  ****/

// When we use var, we can stored only one value at a time. 
// var friend1 = 'ramesh';
// var friend2 = 'arjun';
// var friend3 = 'vishal';

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class. 

// example 🏁


// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];





// 1️⃣ Array Subsection 1 👉 Traversal in array✌ 
// navigate through an array

// if we want to get the single data at a time  and also 
// if we want to change the data 


// var myFriends = ['vinod','ramesh','arjun','vishal'];

// console.log(myFriends[myFriends.length - 1]);

// if we want to check the length of elements of an array 

// console.log(myFriends.length);

// we use for loop to navigate 

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too 

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// for(let elements in myFriends){
  // console.log(elements);
// }

// for(let elements of myFriends){
//   console.log(elements);
// }

// Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });





// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("Thapa", 3));





// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf("Thapa",3));







// Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value, 
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));








// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// price < 400
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem);

// console.log(  prices.find((currVal) => currVal > 1400 )  );



// // **********************************************************************



// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


// console.log( prices.findIndex((currVal) => currVal > 1400 )  );








// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// // price < 400
// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 1400;
// })
// console.log(newPriceTag);




// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());


// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers
// using filter






// 😀7: challenge Time  🏁

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction      Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}
  


// for asecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// for desecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// console.log(array1);







// 2: sort the array in descending order

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let aFruits = fruits.sort();

// //Array.prototype.reverse() 🙋‍♂️
// // The reverse() method reverses an array in place. 
// // The first array element becomes the last, and 
// // the last array element becomes the first.




// 4️⃣ Array Subsection 4 👉 Perform CRUD

// Array.prototype.push() 🙋‍♂️
// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');
// // console.log(count);

// animals.push('chicken', 'cats','cow');
// console.log(animals);


// Array.prototype.unshift() 🙋‍♂️
// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.



// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);


// 2nd example 

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);


// Array.prototype.pop() 🙋‍♂️
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);




// 😀8: challenge Time 🏁

// Array.prototype.splice() 🙋‍♂️
// Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?


// sol1: 
// const newMonth = months.splice(months.length,0,"Dec");
// console.log(months);

// sol2:
// console.log(newMonth);

// sol3: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,1,'june');
//   console.log(months);
// }else{
//   console.log('No such data found');
// }


// sol3: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('April');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,2);
//   console.log(months);
//   console.log(updateMonth);
// }else{
//   console.log('No such data found');
// }






// Map and Reduce method
// Array.prototype.map()
// let newArray = arr.map(callback(currentvalue[,index[,array]]){
//return element for newArray,after executing something
// }[,thisArg]);

// const array1 = [1,4,9,16,25];
// // condition :num > 9;
// // {}[,thisArg]);
// const newArr = array1.map((element,index,array)=>{
//     return element > 9;
//     })
//     console.log(array1);
//     console.log(newArr);
// let newArr = array1.map((element,index,array)=>{
//   return `index no = ${index} and value is ${element} belong to ${array}`
// })
// console.log(newArr);
//map method returnd new array without mutatinng the old one.


// challange 

// 1.find the square root of each element in an array?
// 2. multiply each element by 2 and return only those element
// which are greater then 10.
//solve 1:
//  let arr = [25,36,49,64,81];

// const newArr= arr.map((element)=>{
// return Math.sqrt(element);
// });
// console.log(newArr);

//we solve the problem using math object name Math.sqrt


// solve 2://here we have used map as a chainable method to chain filter in it.
// let arr = [2,3,4,6,8];
//  let arr2 = arr.map((element)=>{
//    return element *2;
//  }).filter((element)=>{
//     return element > 10;
//  })
//  console.log(arr2);


 //more shorter removing the braces and return keyword
// let arr = [2,3,4,6,8];

//  let arr2 = arr.map((element)=>element *2).filter((element)=> element > 10
// )
// console.log(arr2);
  

//reduce method  very very  IMPT
// flatten an array means to convert the 3rd or 2nd array into a 
// single dimentional array

// the reduce () method executes a reducer function (that you provide)
// on each element of the Array,resulting in single output value.

// The reducer function takes four arguement

// Accumulator = means collect
// current value
// current index
// source Array 


// const arr = [5,6,2];

// let sum = arr.reduce((Accumulator,element,index,array)=>{
// return Accumulator += element;
// },7)//incase we have a initial value
// //7 will store as a initial value in accumulator and it procceds further
// console.log(sum);


// let arr = [2,3,4,6,8];
// let newArr = arr.map((element,index,array)=>element*2).filter((element,index,array)=> element > 10).reduce((Accumulator,element,index,array)=>Accumulator +=element)
// console.log (newArr);

// how to flatten array
// converting 2nd and 3rd array into one dimensional array
// const arr =[
// ['zone_1','zone_2'],
// ['zone_4','zone_4'],
// ['zone_5','zone_6'],
// ['zone_7','zone_8']];

// const flatArr = arr.reduce((accu,elem)=>{
//   return accu.concat(elem);

// })
// console.log(flatArr);


             // STRING IN JS 
// javascript string is zero or more character written inside quotes
// javascript strings are used for storing and maniplating text
// you can also use single or doubble quotes
// string can be created as primitives
// from string literals or as object using the string () constructor

// let myName = "Anmol Pokhrel";
// let myDearName = new String("babu"); // not recommeded using string constructor
// console.log(myName);
// console.log(myDearName);

// How to find a length of a string 
//string.prototype.length
// reflect the length of a string

// let myName = "Anmol Pokhrel";
// console.log(myName.length);//counts space in length so 12+space =13


// // Escape character

// let anySentence = "we are so-called \"vikings\" from the north."
// console.log(anySentence);

//  //if you dont want to put escape chahracter then simple use '""' when you are using '' for once
//  let anySentence = 'we are so-called "vikings" from the north.'
// console.log(anySentence);

//finding string in a string

// string.prototype.indexOf(searchvalue[,fromIndex])
// he indexOf() method returns the index of (the position of) the first
// occurrence of a specified text in a string

// mySelf = 'hy my name is anmol pokhrel and my age is 18'
// console.log(mySelf.indexOf('my' ,5)); //searches from front to back;


// string.prototype.lastIndexOf(searchValue[,fromIndex])
// returns the Index  within the calling string object of the 
// last occurence of searchValue,or -1 if not found

// mySelf = 'hy my name anmol pokhrel and my age is 18'
// console.log(mySelf.lastIndexOf('my')); //searches from front to back;
//  lastIndexOf  searches from last so it find my at a index of 29 when we count
// it from front 


// Searching for a string in a string

//string.prototype.search()
// search method searches a string for a specified 
// values and returns the position of the match if not 
// it returns -1;
// the search method cannot take a second start position argument like index in indedOf method.

// const myBioData = 'i am the anmol pokhrel';
// const searchData = myBioData.search('the');
// console.log(searchData);


// extracting String parts

// there are 3 method for extracting a part of a String;

// 1. slice(start,end)
// 2. substring(start, end)
// 3. substr(start,end)

// The slice () method
//slice () extract a part of a string and returns the exttracted part 
// in a new string

// the method takes 2 parameters :the start at CurrenttPosition,
// and the end position (end not includes)

// let str = "apple,banana,guava";
// let slc = str.slice(0,4);
// console.log(slc);

// here we get output "appl" why?
// because the slice method select the element starting at the
// given start arguement -here 0th index , and ends at 4th but 
// it does not included a given end argument that is 'e' in 'apple'
// note : the original array will not changed

// let str = "apple, banana, guava";
// let slc = str.slice(7,-2);
// console.log(slc);

// here we get 'banana' and 'gua' in output 
// because in sevent index there in banana and -2 means it reaches the 
// end of the array and substracct -2 from it so guava-2=gua;
//note:if we only passes start argument like 7 the it will return all the string forward to it


// challange
// display only 280 characters of a string like the 
// only used in twitter?

//  let myTweets = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem rerum doloribus repellendus laborum quibusdam quam maxime, hic mollitia, labore ipsam omnis ipsa molestiae eos, quo iste. In, officia quaerat ad consequatur quis quam nisi suscipit! Vel rem placeat fuga? Eius est, nam et officia non obcaecati reprehenderit voluptates magni similique ipsa iste consectetur dicta labore corrupti a rerum voluptatum assumenda itaque aspernatur illum ipsam error. Id illo sunt nobis alias eos, quisquam maiores officia temporibus inventore, excepturi deleniti optio recusandae sed eum. Veniam minima, sunt modi eaque sit ea nulla est ipsam, repellat excepturi a, maxime nobis accusamus vero tenetur explicabo accusantium possimus eveniet debitis labore. Quod eligendi, sequi blanditiis tempora commodi quas aliquam, eveniet, cumque similique voluptatem a unde dolores nostrum fuga reprehenderit? Doloribus laudantium, nihil eligendi dicta quos reiciendis aut minima ipsam magnam voluptatibus quia ut perferendis perspiciatis dignissimos accusamus iusto cum illo necessitatibus facere debitis nobis. Aliquam eveniet quia commodi? Officia delectus eaque alias cupiditate ipsum, ducimus iste dolor debitis quis deserunt eius ullam veritatis quae! Quas, est? Illum accusamus ab, cum sapiente earum a incidunt aperiam amet commodi sed. Laudantium error minus asperiores eveniet facilis aliquid at pariatur, quisquam esse, maxime quis numquam mollitia rerum repellendus, ipsa dolores earum iure quibusdam rem ex. Voluptatum ex officiis esse excepturi velit eius quo? Iste officia temporibus aliquid rem necessitatibus. Architecto dolores quibusdam nesciunt iste eum ipsam! At recusandae atque unde ea dolores ipsum dolore incidunt eveniet ad, explicabo inventore quidem minus voluptatum, blanditiis tempora totam. Nesciunt repellat sequi ab voluptas necessitatibus et. Unde consequuntur iste esse, sed in autem pariatur mollitia sunt quis doloribus odio itaque dolor harum quas accusamus necessitatibus. Vitae, omnis nemo. Quisquam eius ullam quam veritatis facilis placeat qui explicabo saepe a commodi reprehenderit mollitia architecto minus voluptate nisi, labore possimus dicta culpa. Possimus?'
 
//  let myActualTweet = myTweets.slice(0,280);
//  console.log(myActualTweet);


// the substring method
// substring method is similar to slice ()
// the difference is that substring cannot accept 
// nagative indexes 


// let str = 'apple,banana,kiwi';
// let res = str.substring(8,-2);
// console.log(res);

// here we are geeting apple,ba as a result
// the substring method does not accept nagative indexes 
// here like -2 but whenn we put -2 it counts the string from 0th and returns 
// the result


// The substr () method
// substr is similar to slice()
// The difference is that the second parameter specifies the
// length of the extracted part




// let str = 'apple,banana,kiwi';
// let result = str.substr(7,-2)// no output when we use -2
// lets use to get string from backwards
// let result = str.substr(-4); //result will be kiwi it counts from backward
// console.log(result);
 


// Replacing string content
//  String.prototype.replace(searchFor,replaceWith)
// The replace method replace a specified value
// with another value in a string

// let myBioData = 'i m anmol pokhrel from lingsey anmol'
// let replace = myBioData.replace('anmol','Anmol');
//it replaces the value which it found in the first like here anmol 
// console.log(replace);
//output i m anmol pokhrel from Anmol


// points to remember

// 1: the replace method does not change the string
//  it is called onabort. it returns a new string
// 2: by default ,the replace method replaces only the 
// the first match
//  3: by default the replace () method is case sensitive 
    // writing VINOD (with upper-case) will not work
    

    // EXTRACTING STRING PARTS

    // there are three method  of extracting string characters
       
    //  1. charAt(position)
    //  2. chatCodeAt(position)
    //  3. property MediaKeySystemAccess[]

    // The charAt method
    // the charAt () method returns the character at a 
    // specified index (position) in a string

  //   let str = "HELLO WORLD";
  //    let charAt = str.charAt(4)
  // console.log(charAt)//result O bcoz counts from 0;


// The charCodeAt () method
// the charCodeAt method returns the unicode of the 
// character at a specified index in a string
// the method returns a UTF- 16 code
// (an integers between 0 and 65535).

// the unicode standard provides unique numbers for every 
// character, no matter the plateform ,device,application.,
// or language. UTF-8 is a popular unicode encoding which
// has 88-bit code units.

// let str = "HELLO WORLD"
// console.log(str.charCodeAt(4)); //result 79 bcoz unicode of o is  79;



  // challange
  // return the unicodde of last character in a string
 
  // let str = "HELLO WORLD";
  // let lastIn = str.length -1;
  // console.log(str.charCodeAt(lastIn));



  // PROPERTY ACCESS
  // ECMAScript 5 (2009) allows property access[] on strings
  // let myName ='Anmol pokhrel';
  // console.log(myName[1]);
  //like in a array property access is used in string to get the valaue.




//OTHER USEFUL METHODS

// let myName = 'Anmol Pokhrel';
// console.log(myName.toUpperCase());//to capilize the characters
// console.log(myName.toLowerCase());// lowerize the character


// The concat Method
// concat () joins two or a more string
// let fName = 'Anmol';
// let lName = 'Pokhrel';
// console.log(fName.concat(lName));//result AnmolPokhrel
// console.log(fName.concat(" " ,lName))//result Anmol Pokhrel,due to the empty string.


// String.trim()
// the trim () method removes whitespace from both sides of a string

// let str = '          HELLO WORLD          '
// console.log(str.trim());  

//  converting a string to an array
// string can be converted to array using 
// split() method



// let text  = 'a,b,c,d,e*';//string
// console.log(text.split(',')); //split and put commas
// console.log(text.split(' '));// split and put space //retirns as it is .

// let txt  = 'a,b,|,d,e*';//string

// console.log(txt.split("|"));//divides into different section for e.g=> ["a,b,", ",d,e*"]


  //  DATE AND TIME IN JAVASCRIPT

  // javascript date object represents a single moment in time in a 
  // plateform-independent formmat. Date object contain a number 
  // that represents milliseconds since 1st january 1970 UTC. 

// creating date object 
// there are 4 ways to create a new-date object;

// new Date ()
// new Date ( year,month,day ,hour,minutes,seconds,millisecond)
// //it takes 7 arguements

// new Date(millisecond);
// //we cannot avoid months section
// new Date(date String);

          // new Date()
          // Date objects are created with new Date() constructor

// let currDate = new Date();

// console.log(currDate); Mon Feb 15 2021 19:41:12 GMT+0530 (India Standard Time)

// console.log(new Date()) //same output
// console.log(currDate.toLocaleString ()); //it  will give a local time using 12 hr fomat. e.g  2/15/2021, 7:41:12 PM
// console.log(currDate.toString); // result same as the first one.


// Date Now ()
// returns the numeric value corresponding to the current time-the number
//  of milliseconds elapsed since january 1 ,1970 UTC.
// console.log(Date.now()); //result:   return time since 1 jan 1970 in ms =>1613399080153 


// new Date (year,months,...)
// 7 numbers specifies year.months,day,hour,minutes,second and milisecond (in that orde)
// Note:javascript counts months from 0-11
// jan is 0 december is 11

// let d = new Date(2021,1,0,21,30,40,4000);//we can set our own date here 
//Note: months arguement is compulsory
// console.log(d.toLocaleString());//result =>1/31/2021, 9:30:44 PM
 
// new Date (dateString)
// new Date (date string ) creates a new date object from a date string 

// let dt = new Date ('february 16,2021 9:13:00');
// console.log(dt.toLocaleString()); //output: 2/16/2021, 9:13:00 AM


// new Date(millisecond)
// new Date (millisecond) creates a new DAte object as Zero time plus millisecond

// let dt = new Date (0);
// console.log(dt); return : Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
// let dts = new Date (1613399080153 );
// console.log(dts); //output =>Mon Feb 15 2021 19:54:40 GMT+0530 (India Standard Time)

 //Dates Method 

//  const currDate = new Date ();
//  //how to get only indivisual Data
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());

// how to set our own indivisual date
// console.log(currDate.setFullYear(2022));
// // the setFullYear also sets months and day optionally
// console.log(currDate.setMonth(10));
// console.log(currDate.setDate(5));
// console.log(currDate.toLocaletring());
// Note output will be in ms that is =>1668573217730 


// Time MEthod

// const curTime = new Date ();

//how to get an individual time ;
// console.log(curTime.getTime());
// the getTime () method returns the number of milliseconds
// since januaury 1,1970
// console.log(curTime.getHours());
// // the get hour method returns the hour of a date as a number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


//how to set an individual time.

// let sDAte = new Date();
// // console.log(sDAte.setTime());
// document.write(sDAte.setHours(5));
// console.log(sDAte.setMinutes(5));
// console.log(sDAte.setSeconds(5));
// console.log(sDAte.setMilliseconds(5));

// impt Note : above method returns the time in ms in a console. but whe we use a event function it will 
// give a put like we get in new date ();

// Practice Time

// var tmy = new Date().toLocaleString();//to only get time
// var tmy=new Date().toLocaleDateString();//to get date
//  var tmy=new Date().toLocaleTimeString();//to get date and  time 
//  console.log(tmy);


// MATH OBJECT IN JAVSCRIPT

// the js math object allows you to perform mathematicals tasks in Numbers.

// to get PI value 
// console.log(Math.PI);//we get the value of PI that is 3.141

// Math.round()
// return the value of x rounded to its nearest integers
//  let num = 12.2224;
// console.log(Math.round(num)) //outout 12 
// there is rule in maths that if the numbers after . is less the 5 the it
// will print the 12 like here but if we write 12.6254 the we will gey output as 13.


// Math.pow()
// Math.pow(x,y) returns the value of x to the power of y
//  console.log(Math.pow(2,3)); //output = 8 same as we know 2**3;

// Math.sqrt();
// Math.sqrt(x) returns the squae root of x
// console.log(Math.sqrt(10))
// console.log(Math.sqrt(81))
// console.log(Math.sqrt(14))

// Math.abs()
// Math.abs(x) returns the absolute positive value of x

// console.log(Math.abs(-66)); //output =66 it converts -66 to 66
// console.log(Math.abs(-66.6)) //output 66.4
// console.log(Math.abs(8-10)) //output 2 instead of -2

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integers

// console.log(Math.ceil(4.33))// output:5 opposite of round method ceil always increment the number 1 no matters
// if it is .6 or .1 after decimal
// console.log(Math.ceil(99.1)) //output: 100.

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest
// it returns the value before the decimal no matter 
// if it is .99 or .1 it will return the value before the decimal only

// console.log(Math.floor(4.7))//output: 4
// console.log(Math.floor(99.1)) // output 99

//  Math.min()
// Math.min() can be used to find the lowest value in a list of arguement
// console.log(Math.min(100,-100,-1,-1000))//output -1000


// Math.max()
// Math.max() cna be used to find the lowest value in the arguement
// console.log(Math.max(100,-100,-1,-1000))//output 100


// Math.random()
// Math.random () returns a random number between 0 (inclusive), and 1(exculsive).

// console.log(Math.random()) // output will between 0-1 with decimal e.g 0.14758773241421141

// console.log(Math.random()*10); //output will between 0-9 with decimal.

// if we dont want to dislay the num after decimal then 
// we can use Math.floor() with Math.random()

// console.log(Math.floor(Math.random()*10)) //output =  between 0-9 


// Math.trunc()
// the trunc() method returns the number before of decimal
// console.log(Math.trunc(100.54))//output 100
// console.log(Math.trunc(-99.22))// output -99


// important to remember
// if the arguement is positive number,math.trunc is equivalent to
// Math.floor(),
// otherwise Math.trunc() is ewuivalent to Math.ceil();

 
// DOCUMENT OBJECT MODEL IN JAVASCRIPT

// window is the main container or we can say the
// global object or any operation related to entire
// broweser window can be a part of window object

// for e.g the history or to find the url etc
// whereas the DOM is the child of window object
// All the members like object,method or properties.
// if they are the part of window object then we do not refer
// so you do not have to write the window 
// - it will be figured out by the runtime 

    // *********DOM VS BOM **********

      // --------DOM-------
// The DOM is a document object model ,which deals with the document,
// the html elements themselves e.g document and all traversal you 
// woukd do in it,events,etc

// for example
// chnage the background color to red 
// document.body.style.background ='red'

     //---------BOM--------

    //  The BOM is a brower object model, which deals with the browser  compoents
    // aside from the document ,like history,location,navigator and screen 
    // (as wel as somee other that vary by browser) OR
    // In simple meaning all the window operations which comes under BOM are perfomed 
    // using BOM.


    // lets see more practical on history object
    // Function alert/confirm/prompt are also  a part of BOM 
    // // they are directly not relate to document ,
    // bur represent pure browser methods of communicating with the user

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }


// ----------DOM NAVIGATION---------
//  // navigate through Dom

// 1.document.documentElement
   // returns the element that is root element of the document
  //  2.document.head// to find the head tag content
  // 3. document.body // to find body tag content
  // 4. document.childnodes(include tab,enter and whitespace)
     // list of direct children only

     //PRACTICE TIME

  //  1.  to find if the element have childnodes or not we use
    //  document.body.hasChildNodes

// 2. HOW TO FIND CHILDNODES IN DOM TREE
       //firstChild vs firstElementChild
       //lastChild vs lastElementChild
       //const.body.firstElementChild;
      //  undefined
      // data
      // Data.firstElementChild
      // Data.firstElementChild.firstElementChild
      // Data.firstElementChild.firstElementChild.style.color = "red";
          // VS
      //  document.querySelector(".container").getElementsByClassName.color = 'yellow'

  // 3. HOW TO FIND THE PARENT NODES
  //  document.body.parentNode
  // Document.parent.parentElement

  // 
  //4. HOW TO FIND OR ACCESS THE SIBLING

      // document.body.nextSibling
      // document.body.nextElementSibling
      // document.body.previousSibling
      // document.body.previousElementSibling


      // playing with HTML 

      // const changeColor = ()=>{
      //   // document.getElementById('heading').style.color = 'red';
      //   // document.getElementById('heading').innerHTML= 'change to red';
         
      //   // reference method
      //   // const refrncmetd = document.getElementById('heading');
            //  refrncmetd.innerHTML = 'change heading';

              // document.getElementById('heading').style.color = 'red';

// getting the number of class using  

//  console.log(document.getElementsByClassName('heading'));
//   };

// console.log( document.getElementsByTagName('td'));}


// QUERY SELECTOR && QUERY SELECTOR ALL
// querySelector change the first matching data
// querySelectorAll  DO NOT change the multiple data 
// it only tells the number of the elements 
  
// const qSel = document.querySelector('.heading');
// qSel.innerHTML = 'this is done using query selector';
// qSel.style.background = 'blue';


// console.log(document.querySelectorAll('.heading'));
 
// steps to get number of heading?
// 1.go to console
// 2. click on the onlick event
// 3. get the number of heading in the of list form in console 
/// same for document.getElementsByClass and document.getElemenyByTagName

      // }

      // difference between  getElementByID and queryselector
      //  1. we need to add the # in query selector but not in getElementById
      //  2. if we want to get the content of the tag which doesnot have a element then 
      // we can easily get it using querySelector('ul li.anmol-class').innerHTML;
      // console.log(document.querySelector('table tr .some').innerHTML);
       

      // const changeColor = ()=>{
//   // document.getElementById('heading').style.color = 'red';

// // getting the number of class using  

// //  console.log(document.getElementsByClassName('heading'));
// //   };

// // console.log( document.getElementsByTagName('td'));}
// }


               //  EVENTS IN JAVASCRIPT 
// HTML events are 'things' that happen to HTML element
// when javscript is used in html pages , javascript can ;react on these events


// HTML EVENTS
//  An HTML events can be something that browser does or something a user does
    // here are some example of html events

  //  1.an html web page has finish loading 
  // 2. an html input field wad changed
  // 3 an html button was clicked
  // 4. often when events happen you may want to do something
  
  // javascript let you execute code when events are decleared

  //  html allow event handler attributes,with javascript ConvolverNode,to be added  to html elements.
      
//  4 ways of writing events in javascript 
// 1: using alert();
// 2:by calling a function ();
// 3: writing inline Event(HTML onclick="" property.element.onclick)
// 4: using events listeners(addEventListener and IE's attachEvent)

    // practical on index.html

// WHAT IS EVENT OBJECT?
//  event object is the parent of the event object
// example: MouseEvent,FocusEvent,KeyboardEvent
// events in js
// defining  function - 2nd way of writing events 
// const FunctionOnclick= ()=>{
//   alert('this is onclick event using function calling')

// }
// 3rd way of writing events
// const idEvent  = document.getElementById('idEvent');
// //the below used is anynomous function
// idEvent.onclick = function(){
//alert('this is the event using id onclick')

// }

  // 4th way to write the function
  // const eventListener = document.querySelector('#eventListener');
  //     eventListener.addEventListener('click',()=>{
  //     eventListener.style.color = 'white'; 
  //     })
//  end of html events

// WHAT IS EVENT OBJECT?
  // Event object is the parent of the event object
  // example:
  // MouseEvent,FocusEvent,KeyboardEvent
  // to get all the information of the event we can use event object

// const eventListener = document.getElementById('eventListener');
//   const checkEvent = ()=>{
//     alert('this is event object')
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type)

//   }
//   eventListener.addEventListener('click',checkEvent)
 
  // the above code returns the detail of the event on the  console
   
// code output on console

   
  // MouseEvent {isTrusted: true, screenX: 332, screenY: 431, clientX: 622, clientY: 496, …}altKey: falsebubbles: truebutton: 0buttons: 0cancelBubble: falsecancelable: trueclientX: 622clientY: 496composed: truectrlKey: falsecurrentTarget: nulldefaultPrevented: falsedetail: 1eventPhase: 0fromElement: nullisTrusted: truelayerX: 622layerY: 496metaKey: falsemovementX: 0movementY: 0offsetX: 161offsetY: 37pageX: 622pageY: 496path: (5) [button#eventListener, body, html, document, Window]relatedTarget: nullreturnValue: truescreenX: 332screenY: 431shiftKey: falsesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: true}srcElement: button#eventListenertarget: button#eventListenertimeStamp: 23197.60000007227toElement: button#eventListenertype: "click"view: Window {window: Window, self: Window, document: document, name: "", location: Location, …}which: 1x: 622y: 496__proto__: MouseEvent
  //  <button style=​"width:​ 220px;​" id=​"eventListener" onclick=​"FunctionOnclick()​">​ eventListener ​</button>​
  //  click


  // MOUSE EVENT IN JAVASCRIPT
    // The mouseEvent object events that occur when the mouse
    // interects with the html document belong to mouse event object

    //mouse up and down

// function mUp (){
//   const mouseUp =  document.querySelector('#myPara');
//   mouseUp.style.color = 'blue';
//   }
//   function mDown (){
//   const mouseDown =  document.querySelector('#myPara');
  
//   mouseDown.style.color = 'black';
//   }
  
//mouse enter and leave

// const mEnter = document.getElementById('mouseEnter');
// mEnter.addEventListener('mouseenter',()=>{
// mEnter.style.background = 'gray';
// console.log('mouse is entered bro');
// });

// mEnter.addEventListener('mouseleave',()=>{
// mEnter.style.background = 'white';
// console.log('mouse is leaved bro');
// });



//KEYBOARD EVENTS IN JAVASCRIPT

// Events that occurs when the user presses the key in the keyboard
// belong to keyboard event object


    //  KEYPRESS
    // const keyPress = ()=>{
    //   document.getElementById('keys').innerHTML = `you press ${event.key} and its code is ${event.code}`;
    // }
// output:    you press a and its code is KeyA
    // we write the above code by taking reference of the empty p  tag and print the above 
    // output in it. 

    //  KEY up and down
    // const keyUp = ()=>{
    //   document.getElementById('keys').innerHTML = 'the key is up';
    //   // when we click backspace to delete then it will run
    // }

    // const keyDown = ()=>{
    //   document.getElementById('keys').innerHTML = 'key is down';
    //   // when we click backslah to delete then it will run

    // }


    //INPUT EVENTS IN JAVASCRIPT
    //  the onchange event occur when the value the value of an element has changed

    // for radio buttons and checkboxes the onchange events occur when the checked state has been changed
          
// // ONCHAGE EVENT
// const selectElement = ()=>{
//   const inputchange = document.getElementById('name').value;
//  const iceCreams = document.getElementById('iceCreams').value;

//   const results = document.getElementById('results');
//   results.innerHTML =  ` mr/mrs ${inputchange} love ${iceCreams} flavor;  ` ;
// } 

// same thing using addEventListener

//  const iceCreams = document.getElementById('iceCreams');
//  iceCreams.addEventListener('change',()=>{

//     const inputchange = document.getElementById('name').value;
//  const iceCreams = document.getElementById('iceCreams').value;

//   const results = document.getElementById('results');
//   results.innerHTML =  ` mr/mrs ${inputchange} love ${iceCreams} flavor;  ` ;

//  });

// DIFFERENCE BETWEEN ONCLICK AND addEventListener

// the adEventListener does not overwrite existing events handlers,
// where as onclick overrides any existing onclick = function event handlers
 
 

// TIMING BASED EVENTS IN JAVASCRIPT
  
// 1. setTimeout()
// 2. setInterval()
// 3. clear TimeOut()
// 4.clearInterval()

// Javascript timing events

// The window object allows execution of code at specified time interval
// these time intetrvals are called timing events
// the two key method to use with javascript are

// setTimeout(function,millisecond)
// Executes a function after waiting a specified number of milliseconds.

// setInterval(function,milliseconds)
// same as setTimeOut() but repeats the execution of function continiously

 
//practicing settimeout


// const myName = document.getElementById('showMyName');
// const btn = document.getElementById('btn');
// const showMyName = ()=>{
//   myName.innerHTML = 'loading...'
//   setTimeout(()=>{
//    myName.innerHTML = 'anmol pokhrel'
//   },2000)

// }
// btn.addEventListener('click',showMyName);

// the above code return my name anmol pokhrel  After 1000ms
// clicking the button 

// practicing cleartimeout
//  const click = document.querySelector('#click');
// function myFunction() {
//   click.style.color = 'blue';
// }

// the above code is set to change the color of the paragraph tag to yellow after 2sec
// the code with not get executed if we press stop button which 
// holds the cleartimeout  event


// practicing setInterval()

// const stopNum = document.querySelector('p');
// const btn = document.querySelector('#btn')
// const stopInterval = document.querySelector('#btn1')
// let timeref;
// let num = 0;
// const showMyNum = ()=>{

// timeref = setInterval(()=>{
//    stopNum.innerHTML = `${num}`
//    num++;

//  },100)

// }
// btn.addEventListener('click',showMyNum);

// stopIntetrval.addEventListener('click',()=>{
//   clearInterval(timeref);
// });

// OBJECTS  ORIENTED JAVASCRIPT

// 1. what is object literals
//  => object literals is simply a key value pair data structure
// storing variable and function in a one container
// we can refer this  as an object

// How to create an object?

// 1st way
//  const myObj = {
//    name:'anmol',
//    age:18,
//    college:'no',
//    getData : function() {
// console.log("my name is"+ myObj.name + 'and my age is'+ myObj.age);     
//    }
   
   
//  }
//  console.log(myObj.age)// in objects we have to use . and key to get the data

// console.log(myObj.getData());//calling function


// 2nd way => no need to write function as well in es6

// const myObj = {
//   name:'anmol',
//   age:18,
//   college:'no',
//   getData () {
// console.log("my name is"+ myObj.name + 'and my age is'+ myObj.age);     
//   }
// }  
// myObj.getData();

  // //  what if we want object inside an object?
//   const myObj = {
//     name:{
//       first: 'anmol',
//       last:'pokhrel'
//     },
//     age:18,
//     college:'no',
//     getData () {
//   console.log("my name is"+ myObj.name + 'and my age is'+ myObj.age);     
//     }
//   }  
// console.log(myObj.name.first)
      

// WHAT IS THIS OBJECT
//  The defination of 'this' object is that it contains the current context
// the 'this' object have different values depending on where it is placed
 // for example 1

//  console.log(this);
//  it refer to current context and that is window global object

// e.g 2
// function myName() {
//   console.log(this)

// }
// myName();

// again the above code gives window context

// E.g 3
// var myNames = 'anmol';
// function myName(){
//   console.log(this.myNames)
// }
// myName();

// in above code also we are getting window context 

// e.g 4
// const obj ={
//   myAge :18,
//   myName(){
//     console.log(this.myAge);
//   }
// }
// obj.myName();

// now when we run a funtion inside of the object then we are not getting the window context

// e.g 5

// this object will not work with arrow function
//  what will be the output of
// const obj = {
//   myAge : 18,
//   myName :()=>{
//     console.log(this);
//   }
// }
// obj.myName();

// we are again getting window object  that is =>>>Window {window: Window, self: Window, document: document, name: "", location: Location, …}

  //  what will be the output of the below code

//  let bioData = {
//    myName:{
//      first:'anmol',
//      last:'pokhrel'
//    },
// myAge : 18,
// getData (){
//   console.log(`my first name is ${this.myName.first} and my last name is ${this.myName.last}  and my age is ${this.myAge}`)
// }

//  }
// bioData.getData();
  
// the output is = my first name is anmol and my last name is pokhrel  and my age is 18
// because this method refers to bioData here
// so bioData.myName.first is similar to this.myName.first

// DESTRUCTURING IN ES6
// The destructuring assignment syntax is a javascript expression
// that make it possible to unpack values from arrays
// or properties from objets into distinct variable.

// Array destructuting
// const myBioData =['anmol','pokhrel',18]

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let age = myBioData[2];
// console.log(age);
 
// we will get 18 here

// more shorter
// let[myFName,myLName,age] = myBioData;
// console.log(age);
// we will again get 18 here 
    
  // we can also add a value
// let[myFName,myLName,age,myLove='babu'] = myBioData;
// console.log(myLove);
        
//  Object destructuring
      // const myBio = {
      //   myFName :'anmol',
      //   myLName:'pokhrel',
      //   age:18
      // }
// let age = myBio.age;
// let myFName = this.myFName;
// console.log(age);
//we can get a value from the above process also 
// but it is so unproductive and lengthy

// so we are using the below code
// let{myFName,myLName,age,myLove='babu'} = myBio;
// console.log(myFName)

// object Properties

// we can use dynamic properties


// let myName = 'anmol'
// const myInfo = {
//   [myName] :"how are you",//to add a dynamic data we can use []
//   [20+6]: 'is my age'
// }
// console.log(myInfo)//output:{26: "is my age", anmol: "how are you"}.

// =>> no need to write key and value if both are same

// normal situation

// let myName = 'anmol'
// let myAge = 26;
// const myBio ={
//   myName:myName,
//   myAge :myAge
// }
// console.log(myBio);

// without writing keys and value


// let myName = 'anmol'
// let myAge = 26;
// const myBio ={myName,myAge }
// console.log(myBio);

 //output will be same


//  SPREAD OPERATOR
// normal situation
// const colors = ['green','pink','red','yellow','voilet'];
// if we want to add color after creating new array
// const myColor = ['green','pink','red','yellow','voilet','black','white']
 
// using spread operator we can use 3 dots ... to copy the values

// const myColor = [...colors,'black','white']
// console.log(myColor)


// ECMAScript 2016/ES7


// 1. array.prototype.includes()//we have already seen
  

// 2. Exponentiation Operator //we alraedy have seen that this oprator is use to find the powerof 
 
// console.log(3**4); //output should be 82 bcoz 3 to the power 4 is 81


// ECMAScript 2017/ES8
// 1.string padding()//provides space between strings
// 2.object.values()
// 3.object.entries()

   
//  String padding
    //  =>padStart()
    //  =>padEnd()
// const message ='welcome';
// const padding = message.padStart(10)// padStart means padding at the start 
// console.log(padding); //we are getting 3 spaces before messsage 
//bcoz 7 length of message is 7 .

// padding at the end
// const message ='welcome';
// const padding = message.padEnd(10)
// console.log(padding)

  //  Object.values 
  // this is use to get only values  instead of key+values
 
  // const person = {name:'anmol',age:18};
// console.log(Object.values(person)); //result ['anmol',18]
//
// to get both key and values we can use objects.entries()
// here we will get the key value pair stored in a seperate array
// console.log(Object.entries(person));  //output: ["name", "anmol"] ["age", 18]

// ECMAScript 2018/ES9
// rest/spread // this is same as spread operator in string now es9 has introduce this for a object also
// const person1 = {name:'anmol',age:18};
// const person2 ={person1};
// console.log(person1);//result :name:'anmol',age:18
// console.log(person2);//result :name:'anmol',age:18
      
// ECMAScript 2019/ES10

// how to flatten array
// converting 2nd and 3rd array into one dimensional array
// const arr =[
// ['zone_1','zone_2'],
// ['zone_4','zone_4'],
// ['zone_5','zone_6'],
// ['zone_7',['zone_8','zone_9']]];

// const flatArr = arr.reduce((accu,elem)=>{
//   return accu.concat(elem);

// })
// console.log(flatArr);

// when we use array reduce it contact only 1 dimension array but not the two dimentional array
// e.g 
// 0: "zone_1"
// 1: "zone_2"
// 2: "zone_4"
// 3: "zone_4"
// 4: "zone_5"
// 5: "zone_6"
// 6: "zone_7"
// 7: (2) ["zone_8", "zone_9"]
 
//  too tackle this problem we have flat method in es10
 
// console.log(arr.flat(2));// by puttig the 2 we are telling to flat the second array inside of 1st but  if 
// you want to flat all the array inside the array the we can use infinity in brackets

 // object.fromEntries()
// const person = {name:'anmol',age:18};

// const arrObj = Object.entries(person);  //output: ["name", "anmol"] ["age", 18]
// // in the entries method we are getting data iin the form of array now to convert 
// // it into normal object we can use object.fromEntries()
// console.log(Object.fromEntries(arrObj));

// ECMAScript2020/ES11
// 1. BigInt
    // console.log(Number.MAX_SAFE_INTEGER);//result :9007199254740991.
// in javascript we have a maximum limit to perform operations with numbers and that is 9007199254740991
// if we want to perform operation beyond this number the we have a rule and the number beyond this 
// in javascript is called BigInt

// we have to add 'n' to this number 9007199254740991 to perform operations

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// newNum = (9007199254740991n + 12n); //this is big int
// console.log(newNum); // result:9007199254741003n
// console.log(typeof (newNum))// result :bigint

// ECMAScript 2014 

//  "use strict"

// without strict mode
// x = 3.14;
// console.log(x);//output :3.14;

//  "use strict"
// x = 3.14;
// console.log(x);//output :error;
// //we have to define the type either let,const,or var 
//   // correct way
//    let x = 3.14;
// console.log(x);//output :3.14;




