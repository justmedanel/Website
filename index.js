//console.log(`Hello`);
//console.log(`I like pizza`);



//window.alert(`This is an alert!`);
//window.alert(`I like pizza`);
/*
This is a comment
*/

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

const form = document.getElementById("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("input");
    const email = input.value;
    alert(`${email} s-a abonat`);
    input.value = "";
});
