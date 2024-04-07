//console.log(`Hello`);
//console.log(`I like pizza`);



//window.alert(`This is an alert!`);
//window.alert(`I like pizza`);
/*
This is a comment
*/
//Variables

/*let age = 19;
let price = 10.99;
let grade = 5.00;
let firstName = "Daniel";
let favoriteFood = "pizza";
let email = "danielu07.16@gmail.com"

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${grade}`);*/
/*
let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);
console.log(`Daniel is ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);*/
/*
let fullName = "Daniel Ursu";
let age = 19;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;*/
/*

//Arithmetic Operators
let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extreStudents = students % 3;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;

console.log(students);*/

//let result = 6 / 2 ** (2 + 5);

//console.log(result);
//ACCEPT USER INPUT 
/*let age = window.prompt("How old are you?");
age = Number(age);

age +=1;
console.log(age, typeof age);*/

/*let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/



//CONSTS

/*const PI = 3.14159;
let radius;
let circumference;
-

document.getElementById('mySubmit').onclick = function(){
    radius = document.getElementById('myText').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myH3').textContent = circumference + 'cm';
}*/



//COUNTER

/*const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
//HTML script
<label id="countLabel">0</label><br>
    <div id="btnContainer">
        <button id="decreaseBtn" class="buttons">decrease</button>
        <button id="resetBtn" class="buttons">reset</button>
        <button id="increaseBtn" class="buttons">increase</button>
    </div>

//CSS script

#countLabel{
    display:block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica;
}
#btnContainer{
    text-align: center;
}
.buttons{
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    background-color: hsl(214, 100%, 74%);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;
}
.buttons:hover{
    background-color: hsl(214, 100%, 56%);
}

*/


//MATH


/*Math.PI

console.log(Math.PI);
console.log(Math.E);
*/


//let x = 3;
//let y = 2;
//let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(y, x);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);

//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);



//console.log(max);
//console.log(min);

//RANDOM NUMBER GENERATOR

/*const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);
*/


/*const myBtn = document.getElementById("myBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}*/

/*

Beautiful code site!!!

const form = document.getElementById("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("input");
    const email = input.value;
    alert(`${email} s-a abonat`);
    input.value = "";

    JS part
<div class="container">
        <form id="form" class="input-form">
            <h1>Drumul spre senior in 5 min pe zi</h1>
            <h3>Aboneazate la newsletter</h3>
            <input type="text" id="input" placeholder="Email">
            <button id="tryBtn" type="submit">Ma abonez</button>
        </form>
    </div> });


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root{
    --font: 'Poppins', sans-serif;
}
body{
    padding:0;
    margin:0;
    font-family: var(--font);
    background: rgb(238, 174, 202);
    background: radial-gradient(
        circle,
        rgba(238, 174, 202, 1) 0%,
        rgba(148, 187, 233, 1) 100%
    );
    color: white;
}
#tryBtn{
    border: none;
    height: 40px;
    border-radius: 5px;
    background-color: rgb(147, 39, 180);
    cursor: pointer;
    font-family: var(--font);
    color: white;
    font-weight: 600;
}

input{
    height: 40px;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    font-family: var(--font);
    padding-left: 5px;
    outline: none;
}


.input-form{
    max-width: 25%;
    filter: drop-shadow(0 0 0.75rem rgb(121, 96, 116));
    display: flex;
    flex-direction: column;
    text-align: center;

}

.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


#myBtn{
    font-size: 3em;
    padding: 5px 25px;
    border-radius: 5px;
}
.myLabels{
    font-size: 3em;
}



*/

/*
let age = 17;

if(age >= 18){
    console.log("You are old enough to enter this site")
}
else{
    console.log("You must be 18+ to enter this site");
}*/

/*let time = 14;

if(time < 12){
    console.log("Good morning");
}
else{
    console.log("Good afternoon");
}*/

/*let isStudent = true;

if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are not a student!");
}*/



//IF STATEMENTS 


//let age = 19;
/*let hasLicense = true;

if(age >= 18){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license");
    }
    else{
        console.log("You do not have your license yet!");
    }
}
else{
    console.log("You must be 18+ to have a license");
}*/


/*const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){


    age = myText.value;
    age = Number(age);
    if(age >= 100){
        resultElement.textContent = "You are too old to enter this site";
    }
    else if(age == 0){
        resultElement.textContent = "You can't enter. You were just born.";
    }
    else if(age >= 18){
        resultElement.textContent = "You are old enough to enter this site";
    }
    else if(age < 0){
        resultElement.textContent = "Your age can't be below 0";
    }
    else{
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}

//HTML script
<label>Enter your age:</label><br><br>
    <input type="text" id="myText"><br><br>
    <button type="submit" id="mySubmit">submit</button>
    <p id="resultElement"></p>



*/

//CHECKED

/*const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else {
        subResult.textContent = "You are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You selected Visa";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = "You selected MasterCard";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You selected PayPal";
    }
    else{
        paymentResult.textContent = "You didn't selected any payment method";
    }
}


//HTML script
    <input type="checkbox" id="myCheckBox">
    <label for="myCheckBox">subscribe</label><br><br>

    <input type="radio" id="visaBtn" name="card">
    <label for="visaBtn">Visa</label><br>
    <input type="radio" id="masterCardBtn" name="card">
    <label for="masterCardBtn">MasterCard</label><br>
    <input type="radio" id="payPalBtn" name="card">
    <label for="payPalBtn">PayPal</label><br><br>

    <button type="submit" id="mySubmit">submit</button>

    <p id="subResult"></p>
    <p id="paymentResult"></p>


*/


//TERNARY OPERATORs

/*let age = 12;

let message = age >= 18 ? console.log("You are an adult") : console.log("You're a minor");


let time = 9;
let greeting = time< 12 ? console.log("Good Morning") : console.log("Good AfterNoon");


let isStudent = true;
let message = isStudent ? console.log("You are a student") : console.log("You are not a student");


let purchaseAmnt = 150;
let discount = purchaseAmnt > 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmnt - purchaseAmnt * (discount/100)}`);*/


//SWITCH STATEMENTS

/*let day = "pizza";
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
        break;
}

let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
        break;
}

console.log(letterGrade)*/


//STRINGS 


/*console.log(userName.charAt(1));
console.log(userName.indexOf("n"));
console.log(userName.lastIndexOf("i"));
console.log(userName.length);



//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();
//userName = userName.repeat(3);

let userName = "DanielUrsu";

//let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
let result = userName.includes(" ");


if(result){
    console.log("Your username can't include a space");
}
else{
    console.log(userName);
}

let phoneNumber = "123-456-7890";

//phoneNumber = phoneNumber.replaceAll("-", "/");
//phoneNumber = phoneNumber.padStart(20, "0");
phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);*/
//STRING SLICING

/*const fullName = "Daniel Ursu";

let firstName = fullName.slice(0,6);
let lastName = fullName.slice(7, 11);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);
console.log(firstChar);
console.log(lastChar);
console.log(firstName);
console.log(lastName);


const fullName = "Daniel Ursu";
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);


const email = "Daniel@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
*/

//METHOD CHAININGs
/*
// ---- NO METHOD CHANTING

let username = window.prompt("Enter your username");

username = username.trim();
let letter = username.charAt(0);
letter - letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);


// ---- METHOD CHAINING

let username = window.prompt("Enter your username");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username); 
*/
