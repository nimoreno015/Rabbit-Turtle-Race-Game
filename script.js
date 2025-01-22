
function race() {

    let randomNum = [Math.floor(Math.random() * (8-3)+3)];
    let randomNum1 = [Math.floor(Math.random() * (8 - 3) + 3)];

    if (randomNum > randomNum1) {
        document.getElementById("landscape").style.animation = `landscape ${randomNum}s linear `;
        document.getElementById("road").style.animation = `landscape ${randomNum}s linear `;
    } else {
        document.getElementById("landscape").style.animation = `landscape ${randomNum1}s linear `;
        document.getElementById("road").style.animation = `landscape ${randomNum1}s linear `;
    }
 

    document.getElementById("turtle").animate([{ transform: 'translateX(0px)' },
        { transform: 'translateX(85%)' }], { duration: randomNum * 1000 });

    document.getElementById("rabbit").animate([{ transform: 'translateX(0px)' },
        { transform: 'translateX(85%)' }], { duration: randomNum1 * 1000 });

    if (randomNum > randomNum1) {

        setTimeout(() => {
            document.getElementById("landscape").style.animation = "none";
            document.getElementById("road").style.animation = "none";
            alert("The rabbit has won!!");

        }, randomNum1 * 1000)
     
    } else if (randomNum < randomNum1) {

        setTimeout(() => {
            document.getElementById("landscape").style.animation = "none";
            document.getElementById("road").style.animation = "none";
            alert("The turtle has won!!");
           
        }, randomNum * 1000)
    } else {
        setTimeout(() => {
            document.getElementById("landscape").style.animation = "none";
            document.getElementById("road").style.animation = "none";
            alert("There was a tie!!");
           
        }, randomNum * 1000)
    }
}


function bet() {
    let rabbit = document.getElementById("rabbit");
    let turtle = document.getElementById("turtle");
    
    let randomNum = [Math.floor(Math.random() * (8 - 3) + 3)];
    let randomNum1 = [Math.floor(Math.random() * (8 - 3) + 3)];
    


   let msg = prompt("Please enter your bet by inputting the animal").toLowerCase();

    if (msg == 'rabbit') {
        alert("You have chosen the rabbit, good luck with your bet");
    } else if (msg == 'Rabbit') {
        alert("You have chosen the rabbit, good luck with your bet");
    } else if (msg == 'RABBIT') {
        alert("You have chosen the rabbit, good luck with your bet");
    } else if (msg == 'turtle') {
        alert("You have chosen the turtle, good luck with your bet");
    } else if (msg == 'Turtle') {
        alert("You have chosen the turtle, good luck with your bet");
    } else if (msg == 'TURTLE') {
        alert("You have chosen the turtle, good luck with your bet");
    }
    else {
        alert("You have inserted a wrong input, try again please");
    }


    if (msg == "rabbit" || msg == "turtle") {

        if (randomNum > randomNum1) {
            document.getElementById("landscape").style.animation = `landscape ${randomNum}s linear `;
            document.getElementById("road").style.animation = `landscape ${randomNum}s linear `;
            document.getElementById("turtle").animate([{ transform: 'translateX(0px)' },
            { transform: 'translateX(85%)' }], { duration: randomNum * 1000 });

            document.getElementById("rabbit").animate([{ transform: 'translateX(0px)' },
            { transform: 'translateX(85%)' }], { duration: randomNum1 * 1000 });

        } else {
            document.getElementById("landscape").style.animation = `landscape ${randomNum1}s linear `;
            document.getElementById("road").style.animation = `landscape ${randomNum1}s linear `;
            document.getElementById("turtle").animate([{ transform: 'translateX(0px)' },
            { transform: 'translateX(85%)' }], { duration: randomNum * 1000 });

            document.getElementById("rabbit").animate([{ transform: 'translateX(0px)' },
            { transform: 'translateX(85%)' }], { duration: randomNum1 * 1000 });

        }
        
    }

    if (randomNum > randomNum1 && msg == "rabbit") {

        setTimeout(() => {
            alert("You have won the bet. The rabbit has won!!");
            location.reload();
        }, randomNum1 * 1000)


    } else if (randomNum < randomNum1 && msg == "rabbit") {

        setTimeout(() => {
            alert("You have lost the bet. The turtle has won!!");
            location.reload();
        }, randomNum * 1000)
    } 
    else if (randomNum < randomNum1 && msg == "turtle"){
        
            setTimeout(() => {
                alert("You have won the bet. The turtle has won!!");
                location.reload();
            }, randomNum * 1000)

        } else if (randomNum > randomNum1 && msg == "turtle") {

            setTimeout(() => {
                alert("You have lost the bet. The rabbit has won!!");
                location.reload();
            }, randomNum1 * 1000)
        } else {
            setTimeout(() => {
                alert("There was a tie. Bet again");
                location.reload();
            }, randomNum1 * 1000)
    }    
    
}    
