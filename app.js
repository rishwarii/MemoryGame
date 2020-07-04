document.addEventListener('DOMContentLoaded' ,()=> {
    //cardoptions

    const cardarrya = [
        {
            name:'fries',
            img: 'images/fries.png'
        }  ,

        {
            name:'cheeseburger',
            img:' images/cheeseburger.png'
        }
        ,

        {
            name:'hotdog',
            img:' images/hotdog.png'
        } ,

        {
            name:'ice-cream',
            img:' images/ice-cream.png'
        } ,

        {
            name:'milkshake',
            img:' images/milkshake.png'
        } ,

        {
            name:'pizza',
            img:' images/pizza.png'
        } 

        ,
        {
            name:'fries',
            img: 'images/fries.png'
        }  ,

        {
            name:'cheeseburger',
            img:' images/cheeseburger.png'
        }
        ,

        {
            name:'hotdog',
            img:' images/hotdog.png'
        } ,

        {
            name:'ice-cream',
            img:' images/ice-cream.png'
        } ,

        {
            name:'milkshake',
            img:' images/milkshake.png'
        } ,

        {
            name:'pizza',
            img:' images/pizza.png'
        } 

      
    ]

    cardarrya.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = Document.querySelectorAll('#result')
    var cardschosen = []
    var cardschosenId =[]
    var cardswon = []
    //creating board
    function createBoard(){
        for (let i =0;i<cardarrya.length;i++)
        {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id',i)
           // card.addEventListener('click',flipcard)
            grid.appendChild(cardarrya[cardId.name])
            cardschosenId.push(cardId)
        }
    }

    //check for match
    function checkforMatch()
    {
        var cards = document.querySelectorAll('img')
        const optiononeid = cardschosenId[0]
        const optiontwoid = cardschosenId[1]

        if(cardschosenId[0]==cardschosenId[1])
        {
            alert('You found a match')
            cards[optiononeid].setAttribute('src','images/white.png')
            cards[optiontwoid].setAttribute('src','images/white.png')
            cardswon.push(cardschosen)


        }

        else
        {
            cards[optiononeid].setAttribute('src','images/blank.png')
            cards[optiontwoid].setAttribute('src','images/blank.png')
            alert('Sorry Try Again!')

        }

        cardschosen = []
        cardschosenId =[]
        resultDisplay.textContent = cardswon.length

        if(cardswon.length== cardarrya.length/2)

        {
            resultDisplay.textContent = 'Congratulations! You Won !!'
            
        }
    }
    //createBoard()

    //flipcard 

    function flipCard()
    {
        var cardId = this.getAttribute('data-id')
        cardschosen.push(cardarrya[cardId].name)
        cardschosenId.push(cardId)
        this.setAttribute('src', cardarrya[cardId].img)
        if(cardschosen.length == 2)
        {
            setTimeout(checkforMatch,500)
        }

    }

}

)





