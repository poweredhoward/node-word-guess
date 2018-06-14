function Letter(letter){
    this.letter = letter;
    this.guessed = false;

    //How to display each letter
    this.getChar = function(){
        if(this.guessed === false){
            return "_";
        }
        else{
            return this.letter;
        }
    }
    
    this.checkGuess = function(guess){
        if(guess === this.letter){
            this.guessed = true;
            return true;
        }
        else{
            return false;
        }
    }

}

module.exports = Letter;