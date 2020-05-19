window.addEventListener('DOMContentLoaded', (event) => {
    showPlayerCounter();
    showGuestCounter();
    secondStage();
    fillBoxes();
    resetGame();
});

let hasPlayed = false;

function showPlayerCounter(){
    if (sessionStorage.hasOwnProperty("playerCounter")) {
        playerCounter = sessionStorage.getItem("playerCounter");
        document.getElementById("playerCounter").innerHTML += sessionStorage.getItem("playerCounter");
    } else {
        playerCounter = 0;
        document.getElementById("playerCounter").innerHTML += playerCounter;
    }
}

function showGuestCounter(){
    if (sessionStorage.hasOwnProperty("guestCounter")) {
        guestCounter = sessionStorage.getItem("guestCounter");
        document.getElementById("guestCounter").innerHTML += sessionStorage.getItem("guestCounter");
    } else {
        guestCounter = 0;
        document.getElementById("guestCounter").innerHTML += guestCounter;
    }
}

//on X or O clicked go to second layout
function secondStage() {
    let firstStage = document.querySelector(".firstGameStage");
    let secondGameStage = document.querySelector(".secondGameStage");
    let options = document.querySelectorAll(".xoOptions");

    options.forEach(element => {
        element.addEventListener("click", function() {
            
            //save selected option
            sessionStorage.setItem("selectedOption", element.innerHTML);

            //save guest option
            if (sessionStorage.getItem("selectedOption") == "X") {
                sessionStorage.setItem("guestOption", "O");
            } else {
                sessionStorage.setItem("guestOption", "X");
            }
            
            //hide first stage and go to second stage
            firstStage.classList.add("d-none");
            secondGameStage.classList.remove("d-none");

        });

    });

}

//put X or O to boxes
function fillBoxes() {
    let boxes = document.querySelectorAll(".bordersList li");
    let playerArr = [];
    let guestArr = [];

    //draw selected option in boxes
    boxes.forEach(element => {
        element.addEventListener("click", function(e) {
            //show reset button option
            document.getElementById("resetGame").classList.remove("invisible");

            if (hasPlayed) {
                showTurnMessage("showPlayerTurn", "showGuestTurn");
                //if box doesnt have player option fill randomly one box
                if (element.innerHTML != sessionStorage.getItem("selectedOption")) {
                    element.innerHTML = sessionStorage.getItem("guestOption");
                }

                //push into arrays
                guestArr.push(element.className);

                //winning
                winningRows(guestArr, winning=false);


                hasPlayed = false;
            } else {               
                showTurnMessage("showGuestTurn", "showPlayerTurn");

                element.innerHTML = sessionStorage.getItem("selectedOption");

                 //push into arrays
                 playerArr.push(element.className);

                //winning
                winningRows(playerArr, winning=true);

                hasPlayed = true;
            }
            
        });

    });
   
    
}

function showTurnMessage(firstElem, secondElem) {
    document.getElementById(""+firstElem).classList.remove("d-none");
    document.getElementById(""+secondElem).classList.add("d-none");
}

function winningRows(playedArr, winning) {
    if(playedArr.includes("firstLI") && playedArr.includes("secondLI") && playedArr.includes("thirdLI")) {
        hightLightWinningRow("firstLI", "secondLI", "thirdLI");
        setTimeout(() => {
            winningMsg(winning);
        }, 800);
    } 
    else if (playedArr.includes("fourthLI") && playedArr.includes("fifthLI") && playedArr.includes("sixthLI")) {
        hightLightWinningRow("fourthLI", "fifthLI", "sixthLI");
        setTimeout(() => {
            winningMsg(winning);
        }, 800);
    } else if (playedArr.includes("seventhLI") && playedArr.includes("eightLI") && playedArr.includes("nineLI")) {
        hightLightWinningRow("seventhLI", "eightLI", "nineLI");
        setTimeout(() => {
            winningMsg(winning);
        }, 800);
    } else if (playedArr.includes("firstLI") && playedArr.includes("fourthLI") && playedArr.includes("seventhLI")) {
        hightLightWinningRow("firstLI", "fourthLI", "seventhLI");
        setTimeout(() => {
            winningMsg(winning);
        }, 800);
    } else if (playedArr.includes("secondLI") && playedArr.includes("fifthLI") && playedArr.includes("eightLI")) {
        hightLightWinningRow("secondLI", "fifthLI", "eightLI");
        setTimeout(() => {
            winningMsg(winning);
        }, 800);
    } else if (playedArr.includes("thirdLI") && playedArr.includes("sixthLI") && playedArr.includes("nineLI")) {
        hightLightWinningRow("thirdLI", "sixthLI", "nineLI");
        setTimeout(() => {
            winningMsg(winning);
        }, 800);
    } else if (playedArr.includes("firstLI") && playedArr.includes("fifthLI") && playedArr.includes("nineLI")) {
        hightLightWinningRow("firstLI", "fifthLI", "nineLI");
        setTimeout(() => {
            winningMsg(winning);
        }, 800);
    }  else if (playedArr.includes("thirdLI") && playedArr.includes("fifthLI") && playedArr.includes("seventhLI")) {
        hightLightWinningRow("thirdLI", "fifthLI", "seventhLI");
        setTimeout(() => {
            winningMsg(winning);
        }, 800);
    } else if(playedArr.length == 5) {
        setTimeout(() => {
            drawMsg();
        }, 800)
    }
}

function hightLightWinningRow(firstElem, secondElem, thirdElem) {
    document.querySelector("."+firstElem).style.color = "red";
    document.querySelector("."+secondElem).style.color = "red";
    document.querySelector("."+thirdElem).style.color = "red";
}

function drawMsg() {
    Swal.fire({
        icon: 'info',
        title: 'It"s a draw',
        timer: 5000,
        showClass: {
          popup: 'animated fadeInDown faster'
        },
        hideClass: {
          popup: 'animated fadeOutUp faster'
        }
    }).then(function() {
        endOfGame();
    })
}

function winningMsg(winning) {
    if (winning) {
        
        updatePlayerCounter();

        Swal.fire({
            icon: 'success',
            title: 'Well done! You won',
            timer: 5000,
            showClass: {
              popup: 'animated fadeInDown faster'
            },
            hideClass: {
              popup: 'animated fadeOutUp faster'
            }
        }).then(function() {
            endOfGame();
        })
    } else {
        updateguestCounter();

        Swal.fire({
            icon: 'error',
            title: 'Computer won! You can try again',
            timer: 5000,
            showClass: {
              popup: 'animated fadeInDown faster'
            },
            hideClass: {
              popup: 'animated fadeOutUp faster'
            }
        }).then(function() {
            endOfGame();
        })
    }
}

function updatePlayerCounter(){
    playerCounter++;
    sessionStorage.setItem("playerCounter", playerCounter);
}

function updateguestCounter(){
    guestCounter++;
    sessionStorage.setItem("guestCounter", guestCounter);
}

function endOfGame() {
    localStorage.removeItem("selectedOption");
    localStorage.removeItem("guestOption");
    location.reload();
}

function resetGame() {
    document.getElementById("resetGame").addEventListener("click", function() {
        Swal.fire({
            icon: 'info',
            title: 'Game has been reseted',
            timer: 5000,
            showClass: {
              popup: 'animated fadeInDown faster'
            },
            hideClass: {
              popup: 'animated fadeOutUp faster'
            }
        }).then(function() {
            endOfGame();
        })
    });
}