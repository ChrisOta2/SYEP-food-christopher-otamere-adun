console.log("script.js loaded");

const reviews = [
  {
    id: 1,
    name: "Judith ",
    job: "Social Worker",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Christopher is bright, caring, and full of ambition. He is passionate about studying nursing and is eager to help others and learn new things. I’m proud of the kind, thoughtful young man he’s becoming.",
  },
  {
    id: 2,
    name: "Adesuwa Sheriff",
    job: "Nurse",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "Chris is a bright, driven, and caring individual with a passion for learning and helping others. His determination and curiosity make him a natural leader, and his kindness leaves a lasting impact on everyone he meets.", 

  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});



    





































window.addEventListener("DOMContentLoaded", function () {
console.log("Hello World");

//string has quotes/Number no quotes;
let myTest = 123;
console.log(typeof myTest); 

console.log(10 + " eggs");
console.log(10 + 8 + "eggs");
console.log("eggs " + 10 + 8);

//Both conditions need to be true
console.log(7>3)&&(5>2);

//Only one condition must be true
console.log(10>3) ||(10>12);

//Logical not
console.log(!5>3);

function introduction(name,age){
    console.log("Hello, my name is "+ name +" and i am "+ age + " years old");
}
introduction("christopher", 15)


const hour = new Date().getHours();
let greeting = "";

if (hour<12){
    greeting = "Good morning ☀️";
}else if (hour<18){
    greeting = "Good afternoon";
}else{
    greeting = "Good evening";
}

document.getElementById("greeting").innerText = greeting;
});