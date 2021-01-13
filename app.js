var isNewGame;
var activePlayer;
var scoresArr;
var roundScore;

var diceDom = document.querySelector('.dice');
initGame();

// Programm ehleh bvgdiig 0 lj uguh
function initGame () {
    isNewGame = true;
    // playeruudiin eeljiig hadgalah huwisagch player1 =0; player2=1;
  activePlayer = 0;

  //palyeruudiin tsugluulsan onoog hadgalah huwisagch
  scoresArr = [0, 0];


  // playeruudiin eeljin dr tsugluulj bga onoog hadgalah huwisagch
   roundScore = 0;

  document.getElementById('score-0').textContent = '0'; 
  document.getElementById('score-1').textContent = '0'; 
  document.getElementById('current-1').textContent = '0'; 
  document.getElementById('current-0').textContent = '0'; 

//   toglogchdiin neriig butsaaj gargah

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}
initGame ();

function switchToNextPlayer() {
    // Ene toglogchiin eeljinde tsugluulsan onoog 0 bolgono.
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0; 

    // herew idewhitei toglogch ni 0 bwl idewhitei toglogchiig 1 bolgono
    // ugui bol idewhitei toglogchiig 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    
    // ulaan tsegiig solij ugnu
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog tur alga bolgoh
    diceDom.style.display = "none";
}

//shoog shideh event list-ni eer 
document.querySelector('.btn-roll').addEventListener('click', function(){
   if (isNewGame === true){
       // Shooniii ali talaaraa buusaniig hadgalah huwisagch hergetei, 1-6 gesen utgiig ene huwisagchid 
    // sanamsargui uusgej ugnu
    var diceNumber = Math.floor(Math.random()* 6 ) + 1; 
    //  shoog randomoor buulgah
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';

    // buusan too ni 1 ees ylgaatai bol idewhitei toglogchiin onoon dr nemj ugnu
    if (diceNumber !== 1){
        // 1ees ylgaatai too buuwal toglogchiin onoo ni dr nemj ugnu
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore; 
    }else {
        // 1 buusan bol toglogchiin eeljiin toog solij ugnu

       switchToNextPlayer();
    }
   }else {
       alert("Тоглоом дууссан NEW GAME товчийг дарж шинээр эхэлнэ үү!!!")
   }
});

// HOLD button iin event
document.querySelector(".btn-hold").addEventListener("click", function (){
  if (isNewGame){
      //    Ug toglogchiin tsugluulsan onoog undsen onoon dr nemj ugnu
  scoresArr[activePlayer] = scoresArr[activePlayer] + roundScore;

  // delgets dr onoog uurchlunu
  document.getElementById("score-" + activePlayer).textContent = scoresArr[activePlayer];

  // Ug toglogch hojson esehiig shalgah
  if(scoresArr[activePlayer] >= 100){
    isNewGame = false;
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document.querySelector(".player-"+ activePlayer +"-panel").classList.add("winner");
    document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active");
    
   } else {
    switchToNextPlayer();
     }  
  }else{
    alert("Тоглоом дууссан NEW GAME товчийг дарж шинээр эхэлнэ үү!!!")
  }
});

// NE GAME towchnii event list
document.querySelector(".btn-new").addEventListener("click", function (){
    initGame();
});

