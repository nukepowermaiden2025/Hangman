
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
console.log(words)

//Capture Wins,Capture Losses
var wins = 0
var losses = 0
console.log(wins,losses)

//Capture goodguess,Capture badguess
var goodguess=[]
var badguess=[]
console.log(goodguess,badguess)

//this is the word that will act as test argument		
var person = "goku"	
//this is going to be the string variable that needs to be repeated based on length of the word
var underscore ="_ "
function spaces(word){
	//return the number of underscores needed
	var numUnderscores = parseInt(word.length);
	var underscores = underscore.repeat(numUnderscores);
	//The result of this will equal my currentword
	return (underscores);
    }   
var currentword = spaces(person)
console.log(currentword)
console.log("Game Start")

var computerGuess = words[Math.floor(Math.random() * words.length)];
console.log(computerGuess);
// Need to Press any key to start and to get a computer guess and print spaces to the screen
document.onkeyup = function(event){
    event.key;
    console.log(computerGuess);
    console.log(currentword);
    //Add the page
    document.querySelector("#currentWord").textContent = currentword
}

//Need to listen for subsequent keys that will be recognized as guess of the computer word

document.addEventListener

    


//Then if I want to insert the letter, 
//I need to find the index of the guessed letter in person and to do that
//I can use the .indexOf with if statement saying if letter in person to return the index of letter 
//I need to match the index of letter from person with the proper index of currentword. So to do that
//convert the currentword/aka"underscore return" to the proper amount of spaces
//So that my person.length is equal to currentword.length

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