//https://api.punkapi.com/v2/beers/random we generate random beer selector using api

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".beer-button")
    const randomBeer = document.querySelector(".random-beer")
    const descriptionDisplay = document.querySelector(".description")

    function getData(e){
        e.preventDefault()
        fetch("https://api.punkapi.com/v2/beers/random")
        .then(response => {
            return response.json()
        })
        .then(data => {
            const name = data[0].name
            const description = data[0].description
            const {volume} = data[0]
            const volumeValue = volume.value
            const volumeUnit = volume.unit
    
            randomBeer.innerHTML = name + " " + volumeValue + volumeUnit
            descriptionDisplay.innerHTML = description
        })
    }

    startButton.addEventListener("click", getData)

})