var diceOne = document.querySelector(".valueOne");
var diceTwo = document.querySelector(".valueTwo");
var refreshBtn = document.querySelector(".btn");
var announce = document.querySelector("h2");

refresh=()=>{
    var randNumOne = Math.floor((Math.random()*6)+1);
    var randNumTwo = Math.floor((Math.random()*6)+1);

    if (randNumOne > randNumTwo){
        announce.textContent = "1st player won!!";
    }
    else if(randNumOne < randNumTwo){
        announce.textContent = "2nd player won!!"; 
    }
    else{
        announce.textContent = "Draw!!";
    }

    diceOne.innerHTML = randNumOne;
    diceTwo.innerHTML = randNumTwo;
    
}

refreshBtn.addEventListener("click",refresh);




