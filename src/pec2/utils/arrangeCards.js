import Card from '../Classes/Card.js';

export default function arrangeCards(card) {
    let newCard = new Card();

    newCard.cardId = card.cardId;
    newCard.name = card.name;
    newCard.cardSet = card.cardSet;
    newCard.type = card.type;
    newCard.health = card.health ? card.health : null;
    newCard.text = card.text ? card.text : null;
    newCard.playerClass = card.playerClass;
    newCard.locale = card.locale;
    newCard.rarity = card.rarity ? card.rarity : null;
    newCard.faction = card.faction ? card.faction : null;
    newCard.race = card.race ? card.race : null;
    newCard.imageURL = `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.cardId}.png`;

    return newCard;
}


