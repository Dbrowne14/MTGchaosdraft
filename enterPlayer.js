
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