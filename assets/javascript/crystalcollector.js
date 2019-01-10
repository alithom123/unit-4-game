// I know what to look out for on scoping but I don't understand each case.
// I'm nervous about merging in git and we haven't done any examples.  


// Initialize variables
var target;
var gem1Value, gem2Value, gem3Value, gem4Value;
var gemValues;
var wins = 0;
var losses = 0;
var score = 0;
var gameState = 'start';

$( document ).ready(function() {
    console.log( "ready to run javascript for crystal collector!" );
    startGame();

});


/* 
<div id='gems'>
<button class='gem-button' id='gem-1-button'><img src="assets/images/images_Gem1.png"></button>
<button class='gem-button' id='gem-2-button'><img src="assets/images/images_Gem2.png"></button>
<button class='gem-button' id='gem-3-button'><img src="assets/images/images_Gem3.png"></button>
<button class='gem-button' id='gem-4-button'><img src="assets/images/images_Gem4.png"></button>
</div> 
*/




// $( "#target" ).click(function() {
//     alert( "Handler for .click() called." );
//   });

{/* <div>
<h2 id="target">Target Value: 99</h2>
</div>
<div>
<h2 id="score">Your score is: 0</h2> */}

$('button.gem-button').click(function() {
    console.log("in click of gem button.");
    // Get attribute that determines which gem was pressed.
    var gemNum =$(this).attr( "data-gemNum" );
    console.log("Clicked gem " + gemNum);
    score = score + gemValues[gemNum-1];
    $('#score').text(score);
    
    if(checkWin()) {
        displayWin();
    }
});

$('#play-button').click(function() {
    console.log("in click of play button.");
    resetGame();
});


function checkWin() {
    if(score === target) {
        return true;
    } else {
        return false;
    }
}

function startGame() {
    wins = 0;
    losses = 0;
    score = 0;
}

function resetGame() {
    // The target is between 19 - 120.
    target = getTargetValue();
    $('#target').text(target);

    // Each crystal is between 1 - 12.
    gemValues = [];
    for(var i=0; i<4; i++) {
        gemValues.push(getGemValue());
    }

    console.log("gemValues = ");
    console.log(gemValues);
    // gem1Value = getGemValue();
    // gem2Value = getGemValue();
    // gem3Value = getGemValue();
    // gem4Value = getGemValue();    
}

function getTargetValue() {
    return Math.floor(Math.random() * 101) + 19; 
}

function getGemValue() {
    return Math.floor(Math.random() * 12) + 1;
}
