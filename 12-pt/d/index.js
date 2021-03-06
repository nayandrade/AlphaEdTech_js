const cards = document.querySelector('.card-back');
const shuffleButton = document.querySelector('.shuffle');
const resetButton = document.querySelector('.reset');
const deck = [
    {
        name: 'Ace',
        value: 14,
        suit: 'clubs',
        image: './assets/images/clubs/clubsAce.svg',
    },
    {
        name: 'Two',
        value: 2,
        suit: 'clubs',
        image: './assets/images/clubs/clubs2.svg',
    },
    {
        name: 'Three',
        value: 3,
        suit: 'clubs',
        image: './assets/images/clubs/clubs3.svg',
    },
    {
        name: 'Four',
        value: 4,
        suit: 'clubs',
        image: './assets/images/clubs/clubs4.svg',
    },
    {
        name: 'Five',
        value: 5,
        suit: 'clubs',
        image: './assets/images/clubs/clubs5.svg',
    },
    {
        name: 'Six',
        value: 6,
        suit: 'clubs',
        image: './assets/images/clubs/clubs6.svg',
    },
    {
        name: 'Seven',
        value: 7,
        suit: 'clubs',
        image: './assets/images/clubs/clubs7.svg',
    },
    {
        name: 'Eight',
        value: 8,
        suit: 'clubs',
        image: './assets/images/clubs/clubs8.svg',
    },
    {
        name: 'Nine',
        value: 9,
        suit: 'clubs',
        image: './assets/images/clubs/clubs9.svg',
    },
    {
        name: 'Ten',
        value: 10,
        suit: 'clubs',
        image: './assets/images/clubs/clubs10.svg',
    },
    {
        name: 'Jack',
        value: 11,
        suit: 'clubs',
        image: './assets/images/clubs/clubsJack.svg',
    },
    {
        name: 'Queen',
        value: 12,
        suit: 'clubs',
        image: './assets/images/clubs/clubsQueen.svg',
    },
    {
        name: 'King',
        value: 13,
        suit: 'clubs',
        image: './assets/images/clubs/clubsKing.svg',
    },
    {
        name: 'Ace',
        value: 14,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamondsAce.svg',
    },
    {
        name: 'Two',
        value: 2,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamonds2.svg',
    },
    {
        name: 'Three',
        value: 3,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamonds3.svg',
    },
    {
        name: 'Four',
        value: 4,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamonds4.svg',
    },
    {
        name: 'Five',
        value: 5,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamonds5.svg',
    },
    {
        name: 'Six',
        value: 6,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamonds6.svg',
    },
    {
        name: 'Seven',
        value: 7,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamonds7.svg',
    },
    {
        name: 'Eight',
        value: 8,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamonds8.svg',
    },
    {
        name: 'Nine',
        value: 9,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamonds9.svg',
    },
    {
        name: 'Ten',
        value: 10,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamonds10.svg',
    },
    {
        name: 'Jack',
        value: 11,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamondsJack.svg',
    },
    {
        name: 'Queen',
        value: 12,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamondsQueen.svg',
    },
    {
        name: 'King',
        value: 13,
        suit: 'diamonds',
        image: './assets/images/diamonds/diamondsKing.svg',
    },
    {
        name: 'Ace',
        value: 14,
        suit: 'hearts',
        image: './assets/images/hearts/heartsAce.svg',
    },
    {
        name: 'Two',
        value: 2,
        suit: 'hearts',
        image: './assets/images/hearts/hearts2.svg',
    },
    {
        name: 'Three',
        value: 3,
        suit: 'hearts',
        image: './assets/images/hearts/hearts3.svg',
    },
    {
        name: 'Four',
        value: 4,
        suit: 'hearts',
        image: './assets/images/hearts/hearts4.svg',
    },
    {
        name: 'Five',
        value: 5,
        suit: 'hearts',
        image: './assets/images/hearts/hearts5.svg',
    },
    {
        name: 'Six',
        value: 6,
        suit: 'hearts',
        image: './assets/images/hearts/hearts6.svg',
    },
    {
        name: 'Seven',
        value: 7,
        suit: 'hearts',
        image: './assets/images/hearts/hearts7.svg',
    },
    {
        name: 'Eight',
        value: 8,
        suit: 'hearts',
        image: './assets/images/hearts/hearts8.svg',
    },
    {
        name: 'Nine',
        value: 9,
        suit: 'hearts',
        image: './assets/images/hearts/hearts9.svg',
    },
    {
        name: 'Ten',
        value: 10,
        suit: 'hearts',
        image: './assets/images/hearts/hearts10.svg',
    },
    {
        name: 'Jack',
        value: 11,
        suit: 'hearts',
        image: './assets/images/hearts/heartsJack.svg',
    },
    {
        name: 'Queen',
        value: 12,
        suit: 'hearts',
        image: './assets/images/hearts/heartsQueen.svg',
    },
    {
        name: 'King',
        value: 13,
        suit: 'hearts',
        image: './assets/images/hearts/heartsKing.svg',
    },
    {
        name: 'Ace',
        value: 14,
        suit: 'spades',
        image: './assets/images/spades/spadesAce.svg',
    },
    {
        name: 'Two',
        value: 2,
        suit: 'spades',
        image: './assets/images/spades/spades2.svg',
    },
    {
        name: 'Three',
        value: 3,
        suit: 'spades',
        image: './assets/images/spades/spades3.svg',
    },
    {
        name: 'Four',
        value: 4,
        suit: 'spades',
        image: './assets/images/spades/spades4.svg',
    },
    {
        name: 'Five',
        value: 5,
        suit: 'spades',
        image: './assets/images/spades/spades5.svg',
    },
    {
        name: 'Six',
        value: 6,
        suit: 'spades',
        image: './assets/images/spades/spades6.svg',
    },
    {
        name: 'Seven',
        value: 7,
        suit: 'spades',
        image: './assets/images/spades/spades7.svg',
    },
    {
        name: 'Eight',
        value: 8,
        suit: 'spades',
        image: './assets/images/spades/spades8.svg',
    },
    {
        name: 'Nine',
        value: 9,
        suit: 'spades',
        image: './assets/images/spades/spades9.svg',
    },
    {
        name: 'Ten',
        value: 10,
        suit: 'spades',
        image: './assets/images/spades/spades10.svg',
    },
    {
        name: 'Jack',
        value: 11,
        suit: 'spades',
        image: './assets/images/spades/spadesJack.svg',
    },
    {
        name: 'Queen',
        value: 12,
        suit: 'spades',
        image: './assets/images/spades/spadesQueen.svg',
    },
    {
        name: 'King',
        value: 13,
        suit: 'spades',
        image: './assets/images/spades/spadesKing.svg',
    },
];

let gameCards = [...deck];
let myCards = [];
let result = false;

shuffleButton.addEventListener('click', shuffleCards);
cards.addEventListener('click', handleCards);
resetButton.addEventListener('click', resetTable);

function shuffleCards() {
    gameCards.sort(shuffle);
    console.log(gameCards);
}

function shuffle() {
    return Math.random() - 0.5;
}

function handleCards() {
    let cardsCounter = myCards.length;
    console.log(gameCards, cardsCounter);
    if (cardsCounter < 5) {
        myCards.push(gameCards.pop());
        console.log(cardsCounter);
    } else {
        document.querySelector('h1').innerHTML = 'Voc?? j?? escolheu 5 cartas';
    }
    console.log(myCards);
    renderCards();
}

function renderCards() {
    let cardsCounter = myCards.length;
    console.log('render' + cardsCounter);
    const hands = document.querySelector('.my-hand');
    hands.innerHTML = '';
    myCards.forEach((card) => {
        hands.innerHTML += `
        <div class="card-front">
            <img src="${card.image}" alt="${card.name}">
        <div>
        `;
    });
    if (cardsCounter === 5) {
        checkResult();
    }
}

function checkResult() {
    console.log('checando resultados');
    isPair();
    isHighCard()
}
function isHighCard() {
    if (!result) {
        let highCard = 0;
        let highCardName = '';
        myCards.forEach((card) => {
            if (card.value > highCard) {
                highCard = card.value;
                highCardName = `${card.name} of ${card.suit}`;
            }
        });
        result = true;
        document.querySelector(
            'h1'
        ).innerHTML = `Voc?? tem uma de maior valor ${highCardName}`;
    }
}

function isPair() {
    let repeatedCards = [];
    if (!result) {  
        for (let i = 0; i < myCards.length; i++) {
            for (let j = i+1; j < myCards.length; j++) {
               if (myCards[i].value === myCards[j].value) {
                    repeatedCards.push(myCards[i]);
                }
            }
        }  
        renderPairs(repeatedCards) 
    }         
}

function renderPairs(repeatedCards) {
    console.log(repeatedCards)
    if (repeatedCards.length === 6) {
        result = true;
        document.querySelector('h1').innerHTML = 'Voc?? fez uma quadra!';
    }if (repeatedCards.length === 4) {
        result = true;
        document.querySelector('h1').innerHTML = 'Voc?? fez um fullhouse!';
    } else if (repeatedCards.length === 3) {
        result = true;
        document.querySelector('h1').innerHTML = 'Voc?? fez uma trinca!';
    } else if (repeatedCards.length === 2) {
        result = true;
        document.querySelector('h1').innerHTML = 'Voc?? fez dois pares!';
    } else if (repeatedCards.length === 1) {
        result = true;
        document.querySelector('h1').innerHTML = 'Voc?? fez um par!';
    }    

}

function resetTable() {
    const hands = document.querySelector('.my-hand');
    myCards = [];
    gameCards = [...deck];
    hands.innerHTML = '';
    document.querySelector('h1').innerHTML = '';
    result = false;
}
