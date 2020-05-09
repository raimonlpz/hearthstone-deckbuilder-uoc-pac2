export default class DeckBuilder {
    constructor() {
        this.deckOfCards = [];
        this.cardsSessionCache = [];
        this.fetchedClassList = [];
        this.gameSelectorsOptions = {};
        this.selectors = {
            class: '',
            cardSet: 'all',
            type: 'all',
            faction: 'all',
            rarity: 'all',
            race: 'all'
        };
    }

    getSelectors() {
        return this.selectors;
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

        for (let key of keysSelector) {
            if (this.selectors[key] !== 'all') {
                filteredResult = filteredResult.filter((cards) => {
                    return cards[key] === this.selectors[key];
                });
            }
        }
        return filteredResult;
    }

    saveSelectorsOptions(infoSelectors) {
        this.gameSelectorsOptions = infoSelectors;
    }

    getSelectorsOptions() {
        return this.gameSelectorsOptions;
    }
}
