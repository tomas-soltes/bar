"use strict";


let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(letters[4]);

let newarr = letters;
newarr[4] = '*';

console.log(letters[4]);

let people = ["Harry", "Ron", "Hermione"];

people.push("Draco"); //["Harry", "Ron", "Hermione" ,"Draco"]
people.pop(); //["Harry", "Ron", "Hermione"]
people.push("Neville"); //["Harry", "Ron", "Hermione" ,"Neville"]
people.push("Luna"); //["Harry", "Ron", "Hermione" ,"Neville", "Luna"]
people = people.slice(0, 3); //["Harry", "Ron", "Hermione"]
people.splice(1, 0, "Cho"); //["Harry","Cho", "Ron", "Hermione"]
people[2] = "Ginny"; //["Harry","Cho", "Ginny", "Hermione"]
people.push("Fred", "George"); //["Harry","Cho", "Ginny", "Hermione" ,"Fred" , "George"]
const position = people.indexOf("Fred"); //4
people.splice(position, 1); ////["Harry","Cho", "Ginny", "Hermione", "George"]



var max = 255;
var min = 0;
let i = 0;
let x = 0;
let barArray = [];

createBars();

function createBars() {
    for (x = 0; x < 40; x++) {
        const newBarCollumn = document.createElement("div");
        const newBar = document.createElement("div");
        newBarCollumn.className = 'barColumn';
        newBar.className = 'bar';
        newBarCollumn.appendChild(newBar);
        document.getElementById('wrapper').appendChild(newBarCollumn);
    }
    createArray();
}

function createArray() {
    let bar = document.querySelectorAll('.bar');
    
    if (i < 40) {
        let randomHeight = Math.floor(Math.random() * (max - min + 1)) + min;
            barArray.push(randomHeight);
            bar[i].style.backgroundColor = "rgb(0," + barArray[i] + ",0)";
            bar[i].style.height = barArray[i] * 2 + "px"
    }
    else{
        barArray.pop();
        let randomHeight = Math.floor(Math.random() * (max - min + 1)) + min;
        barArray.unshift(randomHeight);
        for (x = 0; x < 40; x++) {
        bar[x].style.backgroundColor = "rgb(0," + barArray[x] + ",0)";
        bar[x].style.height = barArray[x] * 2 + "px";
        }
    }

    i++;
console.log(barArray);

 
    
    setTimeout(createArray, 100);
}