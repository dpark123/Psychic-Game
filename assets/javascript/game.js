var userGuess;
var wins = 0;
var losses = 0;
var guessCount = 9;
var listGuess = [];
var counter = 0;
var reset = false;
var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function (event) {
    var computerLetterIndex = Math.floor(Math.random() * letterList.length);
    var userGuess = event.key;
    console.log(userGuess);
    console.log(letterList[computerLetterIndex]);
    


    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;

    console.log(wins);
    console.log(losses);

    //document.getElementById("wins").innerHTML = wins;

    guessCount--;
    document.getElementById("guessCount").innerHTML = guessCount;

    listGuess.push(userGuess);
    console.log(listGuess);
    // listGuess.toString();
    // document.getElementById("userGuess").innerHTML = userGuess;
   
    function printLetters(){
        listGuess.toString();
        document.getElementById("listGuess").innerHTML = listGuess;
    }
     printLetters();

    /*var newList = document.getElementById("listGuess");
    var newP = document.createElement("p");
    newP.textContent = listGuess[counter];
    newList.appendChild(newP);*/

    counter++;

    if (userGuess == letterList[computerLetterIndex]) {
        wins++
        //alert("You win! Play Again");
        reset();
    }

    else if (guessCount == 0) {
        losses++;
       // alert("You lose :( Play again");
        reset();
    }
    function reset() {
        guessCount = 9;
        counter = 0;
        document.getElementById("listGuess").innerHTML = ' ';
        listGuess = [];
        document.getElementById("guessCount").innerHTML = guessCount;

    }
}

console.log(wins);
console.log(losses);