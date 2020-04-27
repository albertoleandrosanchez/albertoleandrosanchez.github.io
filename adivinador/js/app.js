document.addEventListener("DOMContentLoaded", () => {
    //opciones de cartas
    const cardArray = [
        {
            name:"rojo",
            img: "../imagenes/cuad-r.png"
        },
        {
            name:"rojo",
            img: "../imagenes/cuad-r.png"
        },
        {
            name:"azul",
            img: "../imagenes/cuad-a.png"
        },
        {
            name:"azul",
            img: "../imagenes/cuad-a.png"
        },
        {
            name:"violeta",
            img: "../imagenes/cuad-v.png"
        },
        {
            name:"violeta",
            img: "../imagenes/cuad-v.png"
        },
        {
            name:"celeste",
            img: "../imagenes/cuad-c.png"
        },
        {
            name:"celeste",
            img: "../imagenes/cuad-c.png"
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    //crear el board

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    function createBoard(){
        for (let i=0; i < cardArray.length ;i++){
            
            var card = document.createElement("img")
            card.setAttribute("src", "../imagenes/cuad-signo.png")
            card.setAttribute("data-id",i )
            card.addEventListener("click",flipCard)
            grid.appendChild(card)
            
        }
    }
    // function createBoard() {
    //     for (let i = 0; i < cardArray.length; i++) {
          
    //       var card = document.createElement('img')
    //       card.setAttribute('src', '../img/cuad-signo.png')
    //       card.setAttribute('data-id', i)
    //       card.addEventListener('click', flipCard)
    //       grid.appendChild(card)
    //     }
    //   }
    //girar carta
    function flipCard(){
        var cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    //buscar emparejamiento
    function checkForMatch(){
        var cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0]=== cardsChosen[1]){
            alert("hiciste match!")
            cards[optionOneId].setAttribute("src","../imagenes/cuad-ok.png")
            cards[optionTwoId].setAttribute("src","../imagenes/cuad-ok.png")
            cardsWon.push(cardsChosen)
        }
        else{
            alert("proba de nuevo")
            cards[optionOneId].setAttribute("src","../imagenes/cuad-signo.png")
            cards[optionTwoId].setAttribute("src","../imagenes/cuad-signo.png")
        }
        cardsChosenId = []
        cardsChosen = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "felicidades! Ganaste el juego!"
        }

    }
    createBoard()
})
