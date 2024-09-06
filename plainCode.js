// code 1 / truthy or falsy with (!!) (double negation sign)
var a = 0;
console.log(!!a);

// code 2 / truthy or falsy / with (!) (logical not sign)
var b = 0;
console.log(!b);

// code 3 / practical uses of isNaN function
const one = isNaN("11");
console.log(one);
// output is false because 11 is a number

// code 4 / practical uses of isNaN function
const two = isNaN(2-10);
console.log(two);
// output is false because -8 is a number

// code 5 / putting quotation marks in a string
let favMovie = "Is \"Titanic\" Your Favorite Movie?";
console.log(favMovie);

// code 6 / creating and calling a function
function square(number){
    console.log('value of the number parameter', number);
    const calc = number*number;
    console.log(calc);
}
square(6);
square(13);

// code 7 / function of many parameters
function addAll(num1, num2, num3){
    const total= num1+num2+num3;
    console.log(total);
}
addAll(3, 4, 5);
addAll(67, 56, 57);
addAll(56, 35); //argument should be according to the parameter! if value is less than the parameter, output is NaN, else (please see the comment of next line)
addAll(3, 5, 6, 7, 8); // output is the total or sum of the first three number

// code 8 / uses of 'return' keyword in a function
function addBill(bill1, bill2){
    const total = bill1+bill2;
    return total;
}
const bill = addBill(150, 250);
console.log(bill);

// code 9 / conditional 'return' in function
function isEven(number){
    if (number%2 === 0){
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(10));
console.log(isEven(15));

// code 10 / Sum of All Numbers in an array
function sumOfNumbers(numbers){
    let sum = 0;
    for (const number of numbers){
        console.log(number);
        sum += number;
    }
    return sum;
}
const numbs = [20, 30, 40, 50]
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is:', sum);

// code 11 /
