const cardColor = ['dolar', 'dolar', 'euro', 'euro', 'funt','funt',
    'koronanorweska', 'koronanorweska','zlotypln', 'zlotypln', 'hrywna', 'hrywna', 'lewbulgarski',
    'lewbulgarski', 'kunachorwacka', 'kunachorwacka','lightgreen', 'lightgreen'];


let cards = document.querySelectorAll('div');
cards = [...cards];


const startTime = new Date().getTime();
let activeCard ='';
const activeCards = [];
const gamePairs = cards.length/2;
let gameResoult = 0;



const clickCard = function (e) {
    activeCard = this;

    if(activeCard === activeCards[0]){
       return null
    };
    activeCard.classList.remove('hidden');

    if (activeCards.length === 0) {

        activeCards[0] = activeCard;
        console.log('1');
    }
    else {
        console.log('2');
        cards.forEach(card=>{
            card.removeEventListener('click', clickCard);

            activeCards[1]=activeCard;

            setTimeout(function () {
                if(activeCards[0].className === activeCards[1].className){
                    console.log('wygrana');

                    activeCards.forEach(card=> card.classList.add('off'));
                    gameResoult ++;
                    cards = cards.filter(card=> !card.classList.contains('off'));
                    if(gameResoult === gamePairs){
                        const endTime = new Date().getTime();
                        const gameTime = (endTime-startTime)/1000;
                        alert(`udało sie twój czas to ${gameTime} sekundy`);
                        $('.time').innerText= 'ddd';
                        location.reload();
                    }
                }
                else{
                    console.log('przegrana');
                    activeCards.forEach(card=>{
                        card.classList.add('hidden')
                    })
                }
                activeCard = '';
                activeCards.length = 0;
                cards.forEach(card=> card.addEventListener('click', clickCard))
            }, 500)





        })
    }



};
const init = function () {
    cards.forEach( card => {
        const position = Math.floor(Math.random()*cardColor.length);

        card.classList.add(cardColor[position]);
        cardColor.splice(position,1);
        
    });

   setTimeout(function () {
       cards.forEach(card => {
           card.classList.add('hidden')
           card.addEventListener('click', clickCard)
       })
   },3000)

    


};

init();