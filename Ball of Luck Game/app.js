document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector("#grid")
    const choiceNumbers = document.querySelector('.choiceNumber')
    const choiceButton = document.querySelector('.choice')
    const choiceBalls = []

    //We place the balls in the grid structure
    function createBall(){
        for(let i=1; i<50; i++){
            const ball = document.createElement("div")
            ball.setAttribute("data-id", i)
            ball.setAttribute("id", i)
            ball.classList.add("ball")
            gridDisplay.appendChild(ball)
            ball.innerHTML = i
        }
    }
    createBall()

    //Every time the ball selection button is clicked, we select a ball.
    choiceButton.addEventListener("click", addChoiceBall)
    function addChoiceBall(){
        let ballId = Math.floor(Math.random() * 49) + 1
        let choiceBallId = document.getElementById(ballId)
        choiceBallId.classList.add("chosen")
        choiceBallId.classList.remove("ball")
        if(choiceBalls.includes(ballId)){
            ballId = Math.floor(Math.random() * 49) + 1
        }else{
            choiceBalls.push(ballId)
            choiceNumbers.innerHTML = "<b>Winner Numbers: </b>" + choiceBalls.sort();
            checkBallCount()
        }
    }

    //We check if the game is over
    function checkBallCount(){
        if(choiceBalls.length == 6 ){
            choiceButton.style.display = "none"
            choiceNumbers.style.fontSize = "25px"
            choiceNumbers.style.color = "red"
        }
    }

  })