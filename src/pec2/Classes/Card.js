export default class Card {
    constructor(cardId, name, cardSet, type, health, text, playerClass, locale, rarity, faction, race, imageURL) {
        this.cardId = cardId;
        this.name = name;
        this.cardSet = cardSet;
        this.type = type;
        this.health = health;
        this.text = text;
        this.playerClass = playerClass;
        this.locale = locale;
        this.rarity = rarity;
        this.faction = faction;
        this.race = race;
        this.imageURL = imageURL;
    }
}