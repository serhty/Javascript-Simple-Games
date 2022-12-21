const cardArray = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardsChoisen = []
let cardsChoisenId = []
const cardsWon = []

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()
function checkMatch(){
    const cards = document.querySelectorAll("img")
    const optionOneId = cardsChoisenId[0]
    const optionTwoId = cardsChoisenId[1]

    if(optionOneId === optionTwoId){
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("You have clicked to same image!")
    }
    if(cardsChoisen[0] === cardsChoisen[1]){
        alert("You found a match!")
        cards[optionOneId].setAttribute("src", "images/white.png")
        cards[optionTwoId].setAttribute("src", "images/white.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChoisen)
    } else {
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("Sorry try again!")
    }
    resultDisplay.textContent = cardsWon.length
    cardsChoisen = []
    cardsChoisenId = []

    if(cardsWon.length === (cardArray.length/2)){
        resultDisplay.textContent = "Congratulations, you found them all!"
    }
}

function flipCard(){
    let cardId = this.getAttribute("data-id")
    cardsChoisen.push(cardArray[cardId].name)
    cardsChoisenId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if(cardsChoisen.length === 2){
        setTimeout(checkMatch,  500)
    }
    
}