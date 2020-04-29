export default class DeckBuilder {
    constructor() {
        this.deckOfCards = [];
        this.cardsSessionCache = [];
        this.fetchedClassList = [];
        this.selectors = {
            class: '',
            cardSet: 'all',
            type: 'all',
            faction: 'all',
            rarity: 'all',
            race: 'all'
        };
    }

    addClassToCache(newClass) {
        this.fetchedClassList.push(newClass);
    }
    isClassAlreadyFetched(newClass) {
        return this.fetchedClassList.find(classFetched => classFetched == newClass);
    }
    addCardToCache(cardsRequest) {
        this.cardsSessionCache.push(cardsRequest);
    }

    addCardToDeck(newCard) {
        this.deckOfCards.push(newCard);
    }
    getDeckOfCards() {
        return this.deckOfCards;
    }

    getCardById(id) {
        return this.cardsSessionCache.find(card => card.cardId == id);
    }
    getCardsByClass(classCard) {
        return this.cardsSessionCache.filter(card => card.playerClass == classCard);
    }

    filterCards(selector, value) {
        this.selectors[selector] = value;

        let filteredResult = this.cardsSessionCache.filter((cards) => {
            return cards.playerClass == this.selectors.class;
        });

        const keysSelector = Object.keys(this.selectors);
        keysSelector.splice(0, 1);

        for (let keys of keysSelector) {
            if (this.selectors[keys] !== 'all') {
                filteredResult = filteredResult.filter((cards) => {
                    return cards[keys] === this.selectors[keys];
                });
            }
        }
        return filteredResult;
    }
}
