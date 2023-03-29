// Get the element with the ID of qwerty and save it to a variable.

let qwerty = document.getElementById('qwerty');

// Get the element with the ID of phrase and save it to a variable.

let phrase = document.getElementById('phrase');

// Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses 
//the player has missed (remember, if the player guesses wrong 5 times, they lose the game) (**i.e. check)

let missed = 0;

//Get the element with the class of btn_reset and save it to the variable startButton.

let startButton = document.getElementsByClassName('btn__reset');

/*Create a phrases array that contains at least 5 different phrases as strings.
Make sure that each phrase contains only letters and spaces, so players won’t need to guess punctuation or special characters.*/

const phrases= [
    "total depravity",
    "unconditional election",
    "limited atonement",
    "irresistible grace",
     "perseverance of the saints",
    "sola scriptura",
     "solus christus",
    "sola gratia",
     "sola fide",
     "soli deo gloria",
    ];

//Attach an event listener to the “Start Game” button to hide the start screen overlay.

startButton[0].addEventListener('click', e => {
    if (startButton) {
        document.getElementById('overlay').style.display = 'none';
    }
});

/*Create a getRandomPhraseAsArray function.
This function should randomly choose a phrase from the phrases array and split that phrase into a new array of characters. The function should 
then return the new character array. Keep in mind that you’ll need to write this function so that it is reusable-- meaning that it can take any
 given array of strings (with no special characters) and return an array of characters. To do that, you’ll write 
 the function so that it takes an array as a parameter. */

 function getRandomPhraseAsArray(arr) {

    let phrase = arr[Math.floor(Math.random() * arr.length)];
    let chars = phrase.split("");
    return chars;
 };

//  getRandomPhraseAsArray(phrases);

 /* Set the game display.
 =========================
Create an addPhraseToDisplay function that loops through an array of characters. Inside the loop, 
for each character in the array, you’ll create a list item, put the character inside of the list 
item, and append that list item to the #phrase ul in your HTML. If the character in the array is 
a letter and not a space, the function should add the class “letter” to the list item.
You’ll need to write the addPhraseToDisplay function so that it can take any array of letters 
and add it to the display. To do that, the function will need to take an array as a parameter */

const phraseArray = getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = (arr) => {

    let ul = document.getElementById('phrase');
 
    phraseArray.forEach((item)=>{

        let li = document.createElement("li");
        li.textContent= item;
        ul.appendChild(li);

        if (item === ' ') {
            li.className= 'space';
            
        } else {
            li.className = "letter";
        }

    })
    
    /*for loop to loop through an array of characters
    * for each character in the array in the loop:
     -create list item (li) 
     -put character in each list item
     -append list item to #phrase ul in html
     -(if the character is a letter, not a space, function
        should add class "letter" to the li item, otherwise,
        class 'space') */
   

};

//To use the function, you’ll get the value returned by the getRandomPhraseAsArray, save it to a variable, and pass it to addPhraseToDisplay as an argument:


addPhraseToDisplay(phraseArray); 



/*Add an event listener to the keyboard.
========================================
Use event delegation to listen only to button events from the keyboard. When a player chooses a letter, 
add the “chosen” class to that button so the same letter can’t be chosen twice. Note that button elements
 have an attribute you can set called “disabled” that when set to true will not respond to user clicks. 
 See the MDN documentation for more details.
Pass the button to the checkLetter function, and store the letter returned inside of a variable called 
letterFound. At this point, you can open the index.html file, click any of the letters on the keyboard, 
and start to see the letters appear in the phrase. */

/* Create a checkLetter function inside the keyboard Event Listener.
==================================
The checkLetter function will be used inside of the event listener you’ll write in the next step.
This function should have one parameter: the button the player has clicked when guessing a letter.
The checkLetter function should get all of the
elements with a class of “letter” (remember that we added the letter class to all of the letters 
    and none of the spaces when we made the game display). The function should loop over the letters
     and check if they match the letter in the button the player has chosen.
If there’s a match, the function should add the “show” class to the list item containing that letter,
 store the matching letter inside of a variable, and return that letter.
If a match wasn’t found, the function should return null. */

/*Count the missed guesses in the game.
========================================
If the checkLetter function returns a null value, the player has guessed the wrong letter. 
In the keyboard event listener, after checkLetter is called, write a statement to check the 
value of the letterFound variable. If the value is null, remove one of the tries from the scoreboard. 
If you haven't created it yet, make sure you have a missed variable to store the state of the scoreboard 
(initialized to 0). When you remove a try from the scoreboard, make sure to increase the missed count by 1. 
Then change a liveHeart.png image to a lostHeart.png image. */

/*Create a checkWin function.
=================================
Each time the player guesses a letter, this function will check whether the game has been won or lost.
 At the very end of the keyboard event listener, you’ll run this function to check if the number of 
 letters with class “show” is equal to the number of letters with class “letters”. If they’re equal,
  show the overlay screen with the “win” class and appropriate text. Otherwise, if the number of misses
   is equal to or greater than 5, show the overlay screen with the “lose” class and appropriate text. */

   let button = document.querySelectorAll('button');
   for (let i = 0; i < button.length; i++) {

        button[i].addEventListener('click', () => {
             
            //when button chosen add 'chosen' class to that button
            //button elements with 'chosen' class should be disabled and set to true
            
            button[i].className = "chosen";
            document.getElementsByClassName("chosen").disabled = true;
            
           
            let letterFound = document.getElementsByClassName('chosen'); //pass to checkLetter function

                function checkLetter(btnClicked) {
                    let letterMatch= null;
                    let letter = document.getElementsByClassName('letter'); 
                    
                    for (let i=0; i < letter.length; i++){

                        if (btnClicked.textContent === letter[i].textContent) {

                            letterMatch= letter[i];
                            letterMatch.classList.add('show');
                            return letterMatch;
                        }
                    
                    //loop through letter variable to see if match
                    //'if' match, add the 'show' class to list item containing that letter
                    //store the matching letter inside a variable, and return that letter
                    //'else' function returns null
                    
                    //Return function
                    return letterMatch;
                    };
                };
               checkLetter(letterFound);


                // if (letterFound === null)   {

                    //remove one of the tries from the scoreboard
                    //make sure to increase the missed count by 1
                    //change a liveHeart.png to a lostHeartpng image

                // } 
                // const checkWin = () => {

                    //each (for each statement?) time the player guesses letter check whether game won or lost
                    //check 'if' the number of letters with class 'show' is equal to the number of letters with class 'letters'
                    //'if' equal, show overlay screen with the class 'win'
                    // 'else if' ('number of misses >= 5) show the overlay with the screen with the class 'lose'

                // };

        })
}
