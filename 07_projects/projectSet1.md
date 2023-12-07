# Solution 

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  // console.log(button)
  button.addEventListener('click', function (e) {
       console.log(e)
       console.log(e.target)
       if(e.target.id === 'grey'){
         body.style.backgroundColor = e.target.id
       }
       if(e.target.id === "yellow"){
         body.style.backgroundColor = e.target.id
       }
       if(e.target.id === "white"){
         body.style.backgroundColor = e.target.id
        }
       if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id
       }
       
       
  })
})

// Project 2 solution Bmi calculator

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
       results.innerHTML= `Please give a valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
       results.innerHTML= `Please give a valid weight ${weight}`;
  }else{
   const bmi =  (weight/((height*height)/10000)).toFixed(2)

   //show the result

  results.innerHTML =`<span>${bmi}</span>`
  if(bmi < 18.5){
    remarks.innerHTML = "You are underweight"
  }
   if (bmi > 18.5 && bmi < 24.9) {
    remarks.innerHTML = "You are healthy"
  }
   if (bmi > 24.9 ) {
    remarks.innerHTML = "you are overweight"
  }
  }

  // Proct 3 solution

  const clock = document.getElementById('clock')

  let date = new Date()
  console.log(date.toLocaleTimeString())

  setInterval(function(){
  let date = new Date()
// console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
  },1000)


  //Project 4 solution
  let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess} `;
}
})

// project 6 solution code
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor((Math.random()*16 ))]
  }
  return color
}
let intervalId;

const startChangingColor = function () {

  changeBackgroundColor = function(){
    document.body.style.backgroundColor = randomColor()
  }
  if(!intervalId){
    intervalId = setInterval(changeBackgroundColor, 1000)
  }
}

const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null
}


document.getElementById('start').addEventListener('click', startChangingColor)
```