var scores, roundScore, activePlayer,dice;




//var x =document.querySelector('#score-0').textContent; //output 43 will copy textcontent from HTML page of Score-0
//console.log(x);

init();



//Dice roll --event handler
document.querySelector('.btn-roll').addEventListener('click',function(){
    // 1 Randon number
    var dice= Math.floor(Math.random()*6)+1;

    //2 display the result
    var diceDOM= document.querySelector('.dice');
    diceDOM.style.display='block'; //this is to display the dice
    diceDOM.src='dice-'+ dice + '.png';  //this is telling which dice image to pick

    //3 update the score if the roll dice is not 1
    if (dice !==1)
    {
        roundScore +=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }
    else {
        NextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    //add current score to global score
    //scores[activePlayer]=scores[activePlayer]+roundScore;
    scores[activePlayer]+=roundScore;

    //update this score to UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    // check if there is a winner
    if (scores[activePlayer] >=30)
    {
        document.querySelector('#name-' + activePlayer).textContent='Ye hai asli Shakuni!!!';
        document.querySelector('.dice').style.display='none';
    }
    else{
     //switch the player 
     NextPlayer();
    }
});

function NextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer= 0;
    roundScore=0;
    //will put the current score to zero
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    //change the active player by accessing the active class in HTML
    //document.querySelector('.player-0-panel').classList.remove('active');
   // document.querySelector('.player-1-panel').classList.add('active');
   //better way of these line use "toggle"

   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   //hide the dice when the second player chance comes
   document.querySelector('.dice').style.display='none';
}

//creating Init function and actions on new button

document.querySelector('.btn-new').addEventListener('click',init);
 
function init(){
    scores=[0,0]; //It is an array
    roundScore=0;
    activePlayer=0;

    document.querySelector('.dice').style.display='none';  //.display is CSS property //"." in query selector is to point a class.// "style" is a method//

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Ashish';
document.getElementById('name-1').textContent='Sonakshi';

}









dice=Math.floor(Math.random()*6)+1;   //Math.floor--> will change decimal to number //Math.random will give you randome number between 0-1


//document object will give access to the DOM // "#"is used to select values from CSS.

document.querySelector('#current-'+activePlayer).textContent=dice;
//.textcontent will change the text