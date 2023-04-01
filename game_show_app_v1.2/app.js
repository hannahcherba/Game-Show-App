let qwerty = document.getElementById('qwerty');

let phrase = document.getElementById('phrase');

let missed = 0;

let startButton = document.getElementById('start-btn');

let overlay = document.getElementById('overlay');

let ul = document.getElementById('phrase');

let h3Win = document.getElementById('h3-win');

let h3Lose = document.getElementById('h3-lose'); 

let heartImg = document.querySelectorAll("img");

let buttons = document.querySelectorAll('button');

let resetButton= document.querySelectorAll('.btn__reset'); 


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

startButton.addEventListener('click', e => {
    if (startButton) {
        overlay.style.display = 'none';
    }
});

 function getRandomPhraseAsArray(arr) {

    let phrase = arr[Math.floor(Math.random() * arr.length)];
    let chars = phrase.split("");
    return chars;
 };

const phraseArray = getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = (arr) => {
 
    arr.forEach((item)=>{

        let li = document.createElement("li");
        li.textContent= item;
        ul.appendChild(li);

        if (item === ' ') {
            li.className= 'space';
            
        } else {
            li.className = "letter";
        }

    })
};

addPhraseToDisplay(phraseArray); 

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', event => {
        
        buttons[i].className = "chosen";
        buttons[i].disabled = true;

        let letter = document.getElementsByClassName('letter'); 

        function checkLetter(btnClicked) {

            let letterMatch= null;
            
            for (let i=0; i < letter.length; i++){

                if (btnClicked.textContent === letter[i].textContent) {

                    letterMatch= letter[i];
                    letterMatch.classList.add('show');
                } 
            };

            return letterMatch;
        };
       
        const button= event.target;
        const letterFound = checkLetter(button);

        if (letterFound === null)   {

            heartImg[missed].src= "images/lostHeart.png";
            missed ++
        
        }
        
        const checkWin = () => {

            let lettersShown = document.getElementsByClassName('show');
            let startButtonText= document.getElementById('start-btn');
            
            
            if (lettersShown.length === letter.length) {

                overlay.classList.add('win');
                overlay.style.display= 'flex';
                h3Win.style.display= 'flex';
                startButtonText.innerHTML="Play again!"
                overlay.classList.remove('lose');
                h3Lose.style.display= 'none';
                
                
            } else if (missed >= 5) {
            
                overlay.classList.add('lose');
                overlay.style.display= 'flex';
                h3Lose.style.display= 'flex';
                startButtonText.innerHTML="Try again!"
                overlay.classList.remove('win');
                h3Win.style.display= 'none';
        
            }
        }
        checkWin();

    })   
}

function resetGame() {

    let letters = document.getElementsByTagName('li'); 

    if(heartImg.src !== "images/lostHeart.png"){

        for (let i=0; i< heartImg.length; i++){

            heartImg[i].src= "images/liveHeart.png";
            
        }    
    }
    for (let i=0; i< buttons.length; i++) {
       
        ul.innerHTML=''; 
        buttons[i].disabled = false;
        buttons[i].classList.remove('chosen');
    } 
    
    for (let i=0; i< letters.length; i++){

        letters[i].classList.remove('show');
        
    }

    missed= 0;
    const newPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(newPhrase); 

}

resetButton[0].addEventListener('click', e => {

    if (resetButton) {

        resetGame()

        overlay.style.display= 'none';
        
    }
})
