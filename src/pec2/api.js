import { API, API_KEY, API_ENDPOINT } from './config.js';
import DeckBuilder from './Classes/DeckBuilder.js';
import arrangeCards from './utils/arrangeCards.js';

let myDeck = new DeckBuilder();

async function getEndpoint(url) {
    const headers = new Headers();
    headers.append('x-rapidapi-host', API);
    headers.append('x-rapidapi-key', API_KEY);

    try {
        console.log('Fetching card/s...')
        const response = await fetch(url, { method: 'GET', headers });
        const apiData = await response.json();

        return apiData;
    } catch (err) {
        console.log('Fetch failed...', err);
    }
}


export async function getCardsByClass(classCard) {
    let classIsAlreadyFetched = myDeck.isClassAlreadyFetched(classCard);
    if (classIsAlreadyFetched) {
        myDeck.selectors.class = classCard;
        return myDeck.getCardsByClass(classCard);
    }
    await getEndpoint(`${API_ENDPOINT.BY_CLASS}${classCard}`).then((cards) => {
        try {
            cards.map((card) => {
                let newCard = arrangeCards(card);
                myDeck.selectors.class = classCard;
                myDeck.addCardToCache(newCard);
            });
        } catch (e) {
            throw new Error('Class not found.');
        }
    });
    myDeck.addClassToCache(classCard);
    console.log(myDeck);
    return myDeck.getCardsByClass(classCard);
}


export async function getCardById(cardId) {
    let card = myDeck.getCardById(cardId);
    if (!card) {
        let newCard;
        await getEndpoint(`${API_ENDPOINT.BY_ID}${cardId}`).then((_card) => {
            if (_card.length > 0) {
                newCard = arrangeCards(_card[0]);
                myDeck.addCardToCache(newCard);
            } else {
                throw new Error('ID not found');
            }
        });
        return newCard;
    } else {
        return card;
    }
}


export async function filterCards(selector, value) {
    let filteredCards = myDeck.filterCards(selector, value);
    console.log(`${filteredCards.length} cards found`);
    console.log(filteredCards);
    return filteredCards;
}

export async function getSelectors() {
    return myDeck.selectors;
}