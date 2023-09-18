var button1 = document.querySelectorAll(".button1")
var button2 = document.querySelectorAll(".button2")
var button3 = document.querySelectorAll(".button3")
var button4 = document.querySelectorAll(".button4")
var button5 = document.querySelectorAll(".button5")
var button6 = document.querySelector(".button6")
var button7 = document.querySelector(".button7")
var sButton = document.querySelector(".sButton")
var button1R = document.querySelector(".button1R")
var button2R = document.querySelector(".button2R")
var button3R = document.querySelector(".button3R")
var button4R = document.querySelector(".button4R")
var button5R = document.querySelector(".button5R")
var sCard = document.querySelector(".sCard")
var card1 = document.querySelector(".card1")
var card2 = document.querySelector(".card2")
var card3 = document.querySelector(".card3")
var card4 = document.querySelector(".card4")
var card5 = document.querySelector(".card5")
var card6 = document.querySelector(".card6")
var card7 = document.querySelector(".card7")
var highscore = document.querySelector(".hScore")
var time = document.querySelector(".time")
var secondsLeft = 70
var RoR = document.querySelector(".RoR")
var RoR1 = document.querySelector(".RoR1")
var RoR2 = document.querySelector(".RoR2")
var RoR3 = document.querySelector(".RoR3")
var RoR4 = document.querySelector(".RoR4")
var fScore = document.querySelector(".pTxt1")
var score = 0
var submit = document.querySelector(".sub")
var eName = document.getElementById("highS")
var list = document.querySelector("list")

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--
        time.textContent = "Time: " + secondsLeft
        
        if(secondsLeft <= 0 || card6.style.visibility == "visible" || card7.style.visibility == "visible") {
            sCard.style.visibility = "hidden"
            card1.style.visibility = "hidden"
            card2.style.visibility = "hidden"
            card3.style.visibility = "hidden"
            card4.style.visibility = "hidden"
            card5.style.visibility = "hidden"
            card6.style.visibility = "visible"
            card7.style.visibility = "hidden"
            time.textContent = ""
            clearInterval(timerInterval)
            secondsLeft = 70
        }
    }, 1000);

}
button1.forEach((answer1) => {
  answer1.addEventListener("click", (event) => {
    card1.style.visibility = "hidden"
    card2.style.visibility = "visible"
    RoR.textContent = "Wrong"
    secondsLeft = secondsLeft - 10

  });
});
function R1(){
    card1.style.visibility = "hidden"
    card2.style.visibility = "visible"
    RoR.textContent = "Correct!"
    score = score + 1
}
button2.forEach((answer2) => {
    answer2.addEventListener("click", (event) => {
      card2.style.visibility = "hidden"
      card3.style.visibility = "visible"
      RoR1.textContent = "Wrong"
      secondsLeft = secondsLeft - 10
    });
  });
  function R2(){
    card2.style.visibility = "hidden"
    card3.style.visibility = "visible"
    RoR1.textContent = "Correct!"
    score = score + 1
}
  button3.forEach((answer3) => {
    answer3.addEventListener("click", (event) => {
      card3.style.visibility = "hidden"
      card4.style.visibility = "visible"
      RoR2.textContent = "Wrong"
      secondsLeft = secondsLeft - 10
    });
  });
  function R3(){
    card3.style.visibility = "hidden"
    card4.style.visibility = "visible"
    RoR2.textContent = "Correct!"
    score = score + 1
}
  button4.forEach((answer4) => {
    answer4.addEventListener("click", (event) => {
      card4.style.visibility = "hidden"
      card5.style.visibility = "visible"
      RoR3.textContent = "Wrong"
      secondsLeft = secondsLeft - 10
    });
  });
  function R4(){
    card4.style.visibility = "hidden"
    card5.style.visibility = "visible"
    RoR3.textContent = "Correct!"
    score = score + 1
}
  button5.forEach((answer5) => {
    answer5.addEventListener("click", (event) => {
      card5.style.visibility = "hidden"
      card6.style.visibility = "visible"
      RoR4.textContent = "Wrong"
      secondsLeft = secondsLeft - 10
      fScore.textContent = "Your final score is " + score
      time.textContent = ""
    });
  });
  function R5(){
    card5.style.visibility = "hidden"
    card6.style.visibility = "visible"
    RoR4.textContent = "Correct!"
    score = score + 1
    fScore.textContent = "Your final score is " + score
    time.textContent = ""
    
}
function sub(event){
event.preventDefault()
var Name = eName.value + " " + score
localStorage.setItem("highscore", Name)
card6.style.visibility = "hidden"
card7.style.visibility = "visible"
}
function view(){
sCard.style.visibility = "hidden"
card1.style.visibility = "hidden"
card2.style.visibility = "hidden"
card3.style.visibility = "hidden"
card4.style.visibility = "hidden"
card5.style.visibility = "hidden"
card6.style.visibility = "hidden"
card7.style.visibility = "visible"
}
function back(){
    card7.style.visibility = "hidden"
    sCard.style.visibility = "visible" 
}

sButton.addEventListener("click", function() {
    setTimer()
sCard.style.visibility = "hidden"
card1.style.visibility = "visible"
})
button1R.addEventListener("click", R1)
button2R.addEventListener("click", R2)
button3R.addEventListener("click", R3)
button4R.addEventListener("click", R4)
button5R.addEventListener("click", R5)
submit.addEventListener("click", sub)
highscore.addEventListener("click", view)
button6.addEventListener("click", back)