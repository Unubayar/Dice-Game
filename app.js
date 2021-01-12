// playeruudiin eeljiig hadgalah huwisagch player1 =0; player2=1;
var activePlayer = 1;

//palyeruudiin tsugluulsan onoog hadgalah huwisagch
var scoresArr = [0, 0];


// playeruudiin eeljin dr tsugluulj bga onoog hadgalah huwisagch
var roundScore = 0;


// Shooniii ali talaaraa buusaniig hadgalah huwisagch hergetei, 1-6 gesen utgiig ene huwisagchid 
// sanamsargui uusgej ugnu
var diceNumber = Math.floor(Math.random()* 6 ) + 1;

// Programm ehleh
document.getElementById('#score-0').textContent = 20;
// document.querySelector('#score-0').textContent = 0; 
document.querySelector('#score-1').textContent = 0; 
document.querySelector('#current-1').textContent = 0; 
document.querySelector('#current-0').textContent = 0; 
document.querySelector('.dice').style.display = "none";

// hewleh
console.log('Шоо ' + dice);

