
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

let pGrabArray = [p1Grab, p2Grab, p3Grab, p4Grab, p5Grab, p6Grab, p7Grab, p8Grab];
let referenceArray =[player1Output, player2Output, player3Output, player4Output, player5Output, player6Output, player7Output, player8Output];
let startButton =  document.getElementById('startMatchups');

// simulator function
const matchupSimulator = () => {

//fisher-yates shuffle method

for (let i=0; i<pGrabArray.length; i++) {

    let j = Math.floor(Math.random()*(i+ 1));
    [pGrabArray[i],pGrabArray[j]] = [pGrabArray[j], pGrabArray[i]];
    
    }

for (let k=0; k<referenceArray.length;k++) {
    pGrabArray[k].textContent = referenceArray[k].textContent;
    }

startButton.style.display = 'none'


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