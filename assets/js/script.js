var button1 = document.querySelectorAll(".button1")
var button2 = document.querySelectorAll(".button2")
var button3 = document.querySelectorAll(".button3")
var button4 = document.querySelectorAll(".button4")
var button5 = document.querySelectorAll(".button5")
var button6 = document.querySelector(".button6")
var button7 = document.querySelector(".button7")
var sButton = document.querySelector(".sButton")
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

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--
        time.textContent = "Time: " + secondsLeft
        
        if(secondsLeft === 0) {

        }
    }, 1000);

}
button1.forEach((answer1) => {
  answer1.addEventListener("click", (event) => {
    card1.style.visibility = "hidden"
    card2.style.visibility = "visible"
    
  });
});
button2.forEach((answer2) => {
    answer2.addEventListener("click", (event) => {
      card2.style.visibility = "hidden"
      card3.style.visibility = "visible"
    });
  });
  button3.forEach((answer3) => {
    answer3.addEventListener("click", (event) => {
      card3.style.visibility = "hidden"
      card4.style.visibility = "visible"
    });
  });
  button4.forEach((answer4) => {
    answer4.addEventListener("click", (event) => {
      card4.style.visibility = "hidden"
      card5.style.visibility = "visible"
    });
  });
  button5.forEach((answer5) => {
    answer5.addEventListener("click", (event) => {
      card5.style.visibility = "hidden"
      card6.style.visibility = "visible"
    });
  });
sButton.addEventListener("click", function() {
    setTimer()
sCard.style.visibility = "hidden"
card1.style.visibility = "visible"
})
