
//**Declare Variables**//
//Make a dictionary of words
var words = [
    "bulma",
    "goku",
    "krillin",
    "tenshinha",
    "piccolo",
    "vegeta",
    "cell",
    "trunks",
    "goten",
    "baba",
    "babidi",
    "kami"
];
//These are the legal letters
var letters = "abcdefghijklmnopqrstuvwxyz"
console.log(letters)
//Capture Wins,Capture Losses
var wins = 0
var losses = 0
var totalGuess=10
//Capture goodguess,Capture badguess
var goodguess=""
var badGuesses=[]
//this is going to be the string variable that needs to be repeated based on length of the word
var underscore ="_"
function spaces(word){
	//return the number of underscores needed
	var numUnderscores = parseInt(word.length);
	var underscores = underscore.repeat(numUnderscores);
	//The result of this will equal my currentword
	return (underscores);
}   


    //The computer is going to choose a word for the player to guess
var computerChoice = Array.from(words[Math.floor(Math.random() * words.length)]);
var currentword = Array.from(spaces(computerChoice));
console.log(computerChoice);
console.log(currentword);


// Need to Press to guess
document.onkeyup = function(event){

    //Add the current word to page
    document.querySelector("#currentWord").innerHTML= currentword
    console.log("Game Start")

    var playerGuess= event.key;

    //check to see if player has guessed a correct letter
    for(i=0; i<computerChoice.length; i++){
        if(computerChoice.includes(playerGuess)){
            console.log(playerGuess);
            
            //grab the index of playerGuess
            //Then if I want to insert the letter, 
                //I need to find the index of the guessed letter in person and to do that
                //I can use the .indexOf with if statement saying if letter in person to return the index of letter 
            var x = computerChoice.indexOf(playerGuess,0);
            //I need to match the index of letter in computerchoice with the proper index of currentword. 
            //var currentword = playerGuess;
            document.querySelector("#currentWord").innerHTML= currentword.splice(x,1,playerGuess)

        }else{
            console.log("nope");
            badGuesses.push(playerGuess);
            totalGuess--;
            document.querySelector("#alreadyGuess").innerHTML = badGuesses.slice(1,[]);
        }
            
            // document.querySelector("#currentWord").innerHTML = currentword(x+2)
            
                //convert the currentword/aka"underscore return" to the proper amount of spaces
            //So that my person.length is equal to currentword.length
            




            //I need to match X with the proper index of currentword. So to do that
            //convert the currentword/aka"underscore return" to the proper amount of spaces
            //So that my computerChoice.length is equal to currentword.length

            
            
            // if
    }

    
    


}


//Side note as the player guess letters, I could remove the letter from
//the computer guess so that duplicate letters can be detected
//called wordtracking array and use a push. Then once the word tracking length matches the
//computerChoice length the game can stop.

//Once I have the index of the letter in person( aka person[2] for example)
        // person.charAt(person[i]) = currentword(person[i+2])
        // unless person[i] ===person[0]
        // then enter person.charAt(person[i]) = currentword.charAt(0)





//This is an array to use to 
//var realcurrentword = person.split(",")
// for (int i = 0; i < currentword.length(); i=i+2){
// 	return(i)
// }
//I need to return such that the index of realcurrentword[index] = currentword[index+1]





//**Connect variables to screen**//
//**Do on keyup to start my loop**//
//Randomly choose one of the words from my dictionary
// Replace those spaces as the correct letters are chosen







//and then letter.textContent to currentword[index]








//* ALTERNATIVES *//

//Make spaces display for chosen words in  function
// function spaces(word){
//     var underscore = "";
//     for(i=0; i < word.length;i++){
//        return (underscore = underscore +"_");        
//     }
// };
// var goku = "goku"
// console.log(spaces(goku))
