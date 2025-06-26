
//interaction for score.html

//get players
let fourPlayer = document.getElementsByClassName("player-4");
let fivePlayer = document.getElementsByClassName("player-5");
let sixPlayer = document.getElementsByClassName("player-6");
let sevenPlayer = document.getElementsByClassName("player-7");
let eightPlayer = document.getElementsByClassName("player-8");

//get interaction
let nameSubmit = document.getElementById("submit-player");
let numberOfPlayers = document.getElementById("player-number");

const setPlayerInput = () => {
    
    //removing previous displays
    let allGroups = [fourPlayer, fivePlayer, sixPlayer, sevenPlayer, eightPlayer]

    allGroups.forEach(player => {
        for (let names of player) {
        names.style.display = 'none'
        }
    });

    //adding clickability for number of players dropdown
    let group;

    if (numberOfPlayers.value === "4") {
        group = fourPlayer;
    }

    else if (numberOfPlayers.value === "5") {
        group = fivePlayer;
    }

    else if (numberOfPlayers.value === "6") {
        group = sixPlayer;
    }

    else if (numberOfPlayers.value === "7") {
        group = sevenPlayer;
    }

    else if (numberOfPlayers.value === "8") {
        group = eightPlayer;
    }

    if(group) {
        for (let groupnum of group) {
            groupnum.style.display = "flex"
        }
    }
}

console.log(nameSubmit, numberOfPlayers, fourPlayer)

nameSubmit.addEventListener("click", setPlayerInput)

//Record table script

// Get Player 1

let player1Input = document.querySelector('input[name="player-1"]');
let player1Button = document.getElementById('player-1-button');
let player1Output  = document.getElementById('name-1');

const playerOneStore = () => {
    player1Output.textContent = player1Input.value;
    player1Input.style.display = 'none';
    player1Button.style.display = 'none';
}

player1Button.addEventListener('click',playerOneStore);

// Get Player 2

let player2Input = document.querySelector('input[name="player-2"]');
let player2Button = document.getElementById('player-2-button');
let player2Output  = document.getElementById('name-2');

const playerTwoStore = () => {
    player2Output.textContent = player2Input.value;
    player2Input.style.display = 'none';
    player2Button.style.display = 'none';
}

player2Button.addEventListener('click',playerTwoStore);

// Get Player 3

let player3Input = document.querySelector('input[name="player-3"]');
let player3Button = document.getElementById('player-3-button');
let player3Output  = document.getElementById('name-3');

const playerThreeStore = () => {
    player3Output.textContent = player3Input.value;
    player3Input.style.display = 'none';
    player3Button.style.display = 'none';
}

player3Button.addEventListener('click',playerThreeStore);

// Get Player 4

let player4Input = document.querySelector('input[name="player-4"]');
let player4Button = document.getElementById('player-4-button');
let player4Output  = document.getElementById('name-4');

const playerFourStore = () => {
    player4Output.textContent = player4Input.value;
    player4Input.style.display = 'none';
    player4Button.style.display = 'none';
}

player4Button.addEventListener('click',playerFourStore);

// Get Player 5

let player5Input = document.querySelector('input[name="player-5"]');
let player5Button = document.getElementById('player-5-button');
let player5Output  = document.getElementById('name-5');

const playerFiveStore = () => {
    player5Output.textContent = player5Input.value;
    player5Input.style.display = 'none';
    player5Button.style.display = 'none';
}

player5Button.addEventListener('click',playerFiveStore);

// Get Player 6

let player6Input = document.querySelector('input[name="player-6"]');
let player6Button = document.getElementById('player-6-button');
let player6Output  = document.getElementById('name-6');

const playerSixStore = () => {
    player6Output.textContent = player6Input.value;
    player6Input.style.display = 'none';
    player6Button.style.display = 'none';
}

player6Button.addEventListener('click',playerSixStore);

// Get Player 7

let player7Input = document.querySelector('input[name="player-7"]');
let player7Button = document.getElementById('player-7-button');
let player7Output  = document.getElementById('name-7');

const playerSevenStore = () => {
    player7Output.textContent = player7Input.value;
    player7Input.style.display = 'none';
    player7Button.style.display = 'none';
}

player7Button.addEventListener('click',playerSevenStore);

// Get Player 8

let player8Input = document.querySelector('input[name="player-8"]');
let player8Button = document.getElementById('player-8-button');
let player8Output  = document.getElementById('name-8');

const playerEightStore = () => {
    player8Output.textContent = player8Input.value;
    player8Input.style.display = 'none';
    player8Button.style.display = 'none';
}

player8Button.addEventListener('click',playerEightStore);

//Assign players

//player grab for randomiser
let p1Grab  = document.getElementById('p1');
let p2Grab  = document.getElementById('p2');
let p3Grab  = document.getElementById('p3');
let p4Grab  = document.getElementById('p4');
let p5Grab  = document.getElementById('p5');
let p6Grab  = document.getElementById('p6');
let p7Grab  = document.getElementById('p7');
let p8Grab  = document.getElementById('p8');
let startButton =  document.getElementById('startMatchups');

//Array creation for shuffling
let pGrabArray4 = [p1Grab, p2Grab, p3Grab, p4Grab];
let pGrabArray6 = [p1Grab, p2Grab, p3Grab, p4Grab, p5Grab, p6Grab];
let pGrabArray8 = [p1Grab, p2Grab, p3Grab, p4Grab, p5Grab, p6Grab, p7Grab, p8Grab];

let referenceArray4 =[player1Output, player2Output, player3Output, player4Output];
let referenceArray6 =[player1Output, player2Output, player3Output, player4Output, player5Output, player6Output];
let referenceArray8 =[player1Output, player2Output, player3Output, player4Output, player5Output, player6Output, player7Output, player8Output];



// simulator function
const matchupSimulator = () => {

//fisher-yates shuffle method
if (numberOfPlayers.value === '8') {

    for (let i=0; i<pGrabArray8.length; i++) {

        let j = Math.floor(Math.random()*(i+ 1));
        [pGrabArray8[i],pGrabArray8[j]] = [pGrabArray8[j], pGrabArray8[i]];
        
        }

    for (let k=0; k<referenceArray8.length;k++) {
        pGrabArray8[k].textContent = referenceArray8[k].textContent;
        }

    startButton.style.display = 'none'


    }

else if (numberOfPlayers.value === '6') {

    for (let i=0; i<pGrabArray6.length; i++) {

        let j = Math.floor(Math.random()*(i+ 1));
        [pGrabArray6[i],pGrabArray6[j]] = [pGrabArray6[j], pGrabArray6[i]];
            
        }

    for (let k=0; k<referenceArray6.length;k++) {
        pGrabArray6[k].textContent = referenceArray6[k].textContent;
        }

    startButton.style.display = 'none'


    }
    
else if (numberOfPlayers.value === '4') {

    for (let i=0; i<pGrabArray4.length; i++) {

        let j = Math.floor(Math.random()*(i+ 1));
        [pGrabArray4[i],pGrabArray4[j]] = [pGrabArray4[j], pGrabArray4[i]];
            
        }

    for (let k=0; k<referenceArray4.length;k++) {
        pGrabArray4[k].textContent = referenceArray4[k].textContent;
        }

    startButton.style.display = 'none'


    }

else {
    alert("To play you must enter players with even numbers between 4-8")
}

}


startButton.addEventListener('click', matchupSimulator);

//adding mutation observer

let matchupThree = document.getElementById('matchup3');
let matchupFour = document.getElementById('matchup4');


//mutation observers for matchups 3 and 4 depending on number of players.

//matchup4 mutation observer
const observe3 = new MutationObserver ((mutations3) => {
    
       for (let mutation of mutations3) {
        if (mutation.type === 'characterData' 
        || mutation.type === 'childList') {
          matchupThree.style.display = "flex";     
        }
    } 

})

observe3.observe(matchupThree, {characterData: true, subtree: true, childList: true});


//mathcup4 mutation observer
const observer = new MutationObserver ((mutations4) => {

    for (let mutation of mutations4) {
        if (mutation.type === 'characterData' 
        || mutation.type === 'childList') {
          matchupFour.style.display = "flex";     
        }
    }

})

observer.observe(matchupFour, {characterData: true, subtree: true, childList: true});


// Score from MatchUp1

//get score components
let winningMessage1 = document.getElementById('winningMessage1');
let drawMessage1 = document.getElementById('drawMessage1')
let p1Score = document.getElementById('p1Score');
let p2Score = document.getElementById('p2Score')
let winningPlayer1 = document.getElementById('winPlayer');
let winResult1 = document.getElementById('p1w1');
let winResult2= document.getElementById('p2w1');
let drawResult1 = document.getElementById('p1d1');
let drawResult2 = document.getElementById('p2d1');


let sumbitScore1 = document.getElementById('submitScore1')

const determineWinner = () => {
    
    if (p1Score.value > p2Score.value) {
        drawMessage1.style.display = 'none'; //removes any other message
        winningMessage1.style.display = 'block'
        winningPlayer1.style.fontWeight = 'bold';
        winningPlayer1.textContent = p1Grab.textContent;
        winResult1.textContent = p1Score.value;
        winResult2.textContent = p2Score.value;
    }

    else if (p2Score.value > p1Score.value) {
        drawMessage1.style.display = 'none'; //removes any other message
        winningMessage1.style.display = 'block';
        winningPlayer1.style.fontWeight = 'bold';
        winningPlayer1.textContent = p2Grab.textContent;
        winResult1.textContent = p2Score.value;
        winResult2.textContent = p1Score.value;
    }

    else {
        winningMessage1.style.display = 'none'; //removes any other message
        drawMessage1.style.display = 'block';
        drawResult1.textContent = p1Score.value;
        drawResult2.textContent = p2Score.value;
    }

}

sumbitScore1.addEventListener('click', determineWinner);