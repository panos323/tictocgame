<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
</head>
<body>
    <div class="wrapper">
        <div class="flexContainer">
            <div id="playerComputerTurn">
                <h1 class="ticTacTitle">Tic Tac</h1>
                <div  id="showPlayerTurn">
                    <h2>
                        you play
                    </h2>
                </div>
                <div class="d-none" id="showGuestTurn">
                    <h2>
                        guest play
                    </h2>
                </div>
            </div>
            <div class="boardOutline">
                <div class="scores">
                    <h3 id="playerCounter">Player A: </h3>
                    <h3 id="guestCounter">Player B:</h3>
                </div>
            <div class="gameContainer">
                <div class="firstGameStage">
                    <h1>Would you like to be X or O ?</h1>
                    <div class="chooseXO">
                        <p class="xoOptions" id="xOption">X</p>
                        <p class="xoOptions" id="oOption">O</p>
                    </div>
                </div>
                <div class="secondGameStage d-none">
                   <ul class="bordersList">
                       <li class="firstLI"></li>
                       <li class="secondLI"></li>
                       <li class="thirdLI"></li>
                       <li class="fourthLI"></li>
                       <li class="fifthLI"></li>
                       <li class="sixthLI"></li>
                       <li class="seventhLI"></li>
                       <li class="eightLI"></li>
                       <li class="nineLI"></li>
                   </ul>
                </div>
            </div>
            </div>
            <h2 id="resetGame" class="invisible">reset game</h2>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="js/main.js"></script>
</body>
</html>