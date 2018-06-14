var letter = require("./letter.js");

function Word(){

    //Pick a word and make the letters for it
    var letters = [];

    var possible_words = [];
    var word = "stowaway";
    var split_word = word.split("");
    split_word.forEach( function(l){
        var temp = new letter(l);
        letters.push(temp);
    });

    this.letters = letters;

    // console.log(this.letters);


    this.showLetters = function(){
        var display = "";
        this.letters.forEach( function(letter){
            display += letter.getChar() + " ";
        });

        display = display.slice(0, -1);

        console.log(display);
        // console.log(this.letters.join(""));
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