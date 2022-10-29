// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array 
let result = ages[ages.length - 1] - ages[0];
console.log(result);

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(21);
result = ages[ages.length - 1] - ages[0];
console.log(result);

// Use a loop to iterate through the array and calculate the average age
let sumOfArray = 0;

for(let i = 0; i < ages.length; i++){
    sumOfArray += ages[i];
}

let average = sumOfArray / ages.length;
console.log(average);

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Use a loop to iterate through the array and calculate the average number of letters per name. 
let sumOfNames = 0;
for(let i = 0; i < names.length; i++){
    sumOfNames += names[i].length;
}
average = sumOfNames / names.length;
console.log(average);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let stringNames = ""
for(let i = 0; i < names.length; i++){
    stringNames += names[i] + " ";
}
console.log(stringNames);

// How do you access the last element of any array?
names[names.length - 1];

// How do you access the first element of any array?
names[0];

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add 
// the length of each name to the nameLengths array.
let nameLengths = [];
for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumOfLengths = 0;
for(let i = 0; i < nameLengths.length; i++){
    sumOfLengths += nameLengths[i];
}
console.log(sumOfLengths);

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function combineStrings(word, n){
    let resultString = "";

    for(let i = 0; i < n; i++){
        resultString += word;
    }
    return resultString;
}
console.log(combineStrings('Hello', 3));

// Write a function that takes two parameters, firstName and lastName, and returns a full name.
function fullName(firstName, lastName){
    let name = firstName + " " + lastName;
    return name; 
} 

console.log(fullName("Casey", "Irritating"));

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function arrayNum(arrayBers){
    let sumOfNum = 0;
    
    for(let i = 0; i < arrayBers.length - 1; i++){
        sumOfNum += arrayBers[i];
    } 
    if(sumOfNum > 100){
        return true;
    }else{
        return false;
    }
}
let arrayNumbers = [10,20,30,40,50,60];
console.log(arrayNum(arrayNumbers));

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function arrayAverage(arrayAv){
    let sumOfNum = 0;

    for(let i = 0; i < arrayAv.length -1; i++){
        sumOfNum =+ arrayAv[i];
    } 
    return sumOfNum / arrayAv.length;
}
console.log(arrayAverage(arrayNumbers));

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
//greater than the average of the elements in the second array.

function twoArrays(ray1, ray2){
    let sumOfNum1 = 0;
    let sumOfNum2 = 0;

    for(let i = 0; i < ray1.length -1; i++){
        sumOfNum1 += ray1[i];
    }
    for(let i = 0; i < ray2.length -1; i++){
        sumOfNum2 += ray2[i];
    }
    let avOfNum1 = sumOfNum1 / ray1.length;
    let avOfNum2 = sumOfNum2 / ray2.length;
    if(avOfNum1 > avOfNum2){
        return true;
    }else{
        return false;
    }
}
let arrayNumbers1 = [10,20,30,40,50,60];
let arrayNumbers2 = [10,20,30,40,50,60];
console.log(twoArrays(arrayNumbers1, arrayNumbers2));

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
// moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    }else{
        return false;
    }
}
console.log(willBuyDrink(true, 10.50));

// Create a function of your own that solves a problem. 
// I created a function that determined whether I should buy gas or not.
// It returns true if I'm low on fuel and if I have the money to buy gas. 
function buyGas(lowOnFuel, moneyInWallet){
    if(lowOnFuel && moneyInWallet >= 20){
        return true;
    }else{
        return false;
    }
}
console.log(buyGas(true, 20));