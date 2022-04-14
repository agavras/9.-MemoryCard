let score=document.getElementById("score");
let counter=document.getElementById("counter");

let img = new Array;
let nbrOfClick = 0;
let timerShowCard = 0;
let firstCard = 0;
let secondCard = 0;
let playerScore = 0;

let card1Found = 0;
let card2Found = 0;
let card3Found = 0;
let card4Found = 0;
let card5Found = 0;
let card6Found = 0;
let needReset = 0;

for (let i=1; i<13; i++) {
    img[i] = document.getElementById("img"+i);
    img[i].addEventListener("click", function(){showCard(i)});
}

function showCard(id) {

    if (timerShowCard === 0) {

        if (nbrOfClick === 0) {
            nbrOfClick = 1;
            firstCard = id;
            console.log(nbrOfClick);
        } else if (nbrOfClick === 1) {
            nbrOfClick = 2;
            secondCard = id;
            console.log(nbrOfClick);
        }
        
        img[id] = document.getElementById("img"+id).src = "./ressources/"+id+".svg";
    }

    if (nbrOfClick === 2) {
        timerShowCard = 1;
        document.body.style.cursor = "wait";
        counter.innerHTML = "Wait";
        console.log("Wait");

        setTimeout(function() {
        nbrOfClick = 0; 
        document.body.style.cursor = "pointer";
        counter.innerHTML = "play again";
        console.log("play again");
        timerShowCard = 0;
        if (needReset === 1) {ResetCard();}
        }, 1000);

        if (firstCard === 1 && secondCard === 7 || firstCard === 7 && secondCard === 1) {
            playerScore++;
            card1Found = 1;
            console.log("card1Found");
        } else if (firstCard === 2 && secondCard === 8 || firstCard === 8 && secondCard === 2) {
            playerScore++;
            card2Found = 1;
            console.log("card2Found");
        } else if (firstCard === 3 && secondCard === 9 || firstCard === 9 && secondCard === 3) {
            playerScore++;
            card3Found = 1;
            console.log("card3Found");
        } else if (firstCard === 4 && secondCard === 10 || firstCard === 10 && secondCard === 4) {
            playerScore++;
            card4Found = 1;
            console.log("card4Found");
        } else if (firstCard === 5 && secondCard === 11 || firstCard === 11 && secondCard === 5) {
            playerScore++;
            card5Found = 1;
            console.log("card5Found");
        } else if (firstCard === 6 && secondCard === 12 || firstCard === 12 && secondCard === 6) {
            playerScore++;
            card6Found = 1;
            console.log("card6Found");
        } else {
            needReset = 1;
        }

        score.innerHTML = playerScore + " / 6";

    firstCard = 0;
    secondCard = 0;
    }
}

function ResetCard() {
    console.log("RESET CARD");
    if (card1Found === 0) {
        img[1] = document.getElementById("img1").src = "./ressources/Question.png";
        img[7] = document.getElementById("img7").src = "./ressources/Question.png";
    }
    if (card2Found === 0) {
        img[2] = document.getElementById("img2").src = "./ressources/Question.png";
        img[8] = document.getElementById("img8").src = "./ressources/Question.png";
    }
    if (card3Found === 0) {
        img[3] = document.getElementById("img3").src = "./ressources/Question.png";
        img[9] = document.getElementById("img9").src = "./ressources/Question.png";
    }
    if (card4Found === 0) {
        img[4] = document.getElementById("img4").src = "./ressources/Question.png";
        img[10] = document.getElementById("img10").src = "./ressources/Question.png";
    }
    if (card5Found === 0) {
        img[5] = document.getElementById("img5").src = "./ressources/Question.png";
        img[11] = document.getElementById("img11").src = "./ressources/Question.png";
    }
    if (card6Found === 0) {
        img[6] = document.getElementById("img6").src = "./ressources/Question.png";
        img[12] = document.getElementById("img12").src = "./ressources/Question.png";
    }
}