//inport des images dans un tableau
const cardsArray = [
    {
        name :'monkey',
        'img' : './img/1.webp',   
    },
    {
        name :'buffle',
        'img' : './img/2.webp',   
    },
    {
        name :'pork',
        'img' : './img/3.webp',   
    },
    {
        name :'otherMonkey',
        'img' : './img/4.webp',   
    },
    {
        name :'croco',
        'img' : './img/5.webp',   
    },
    {
        name :'elephant',
        'img' : './img/6.webp',   
    },
]
//création du tableau sur le DOM
 const game =document.getElementById('game')
const grid = document.createElement('div')
grid.setAttribute('class','grid')
game.appendChild(grid)

//
cardsArray.forEach((item) =>{
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name
    card.style.backgroundImage = 'url('+item.img+')'
    grid.appendChild(card)
})
