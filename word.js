var letter = require("./letter.js");
var rand_word = require("random-words");

function Word(){

    //Pick a word and make the letters for it
    var letters = [];

    var possible_words = [];
    // var word = "stowaway";

    //Get a random word
    var word = rand_word();
    this.word = word;
    var split_word = word.split("");

    //Make a Letter instance for each letter
    split_word.forEach( function(l){
        var temp = new letter(l);
        letters.push(temp);
    });

    this.letters = letters;


    //Display word with letters shown or hidden
    this.showLetters = function(){
        var display = "";
        this.letters.forEach( function(letter){
            display += letter.getChar() + " ";
        });

        display = display.slice(0, -1);

        console.log(display);
    }

    this.checkGuess = function( guess ){
        var matches_found = 0;
        this.letters.forEach( function(letter){
            if( letter.guessed === false && letter.checkGuess(guess) === true){
                letter.guessed = true;
                matches_found++;
            }
        });

        return matches_found;
        
    }
}

module.exports = Word;