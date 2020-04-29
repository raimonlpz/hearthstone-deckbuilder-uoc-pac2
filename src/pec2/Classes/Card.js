export default class Card {
    constructor(cardId, dbfId, name, cardSet, type, health, text, playerClass, img, imgGold, locale, rarity, faction, race, quality, imageURL) {
        this.cardId = cardId;
        this.dbfId = dbfId;
        this.name = name;
        this.cardSet = cardSet;
        this.type = type;
        this.health = health;
        this.text = text;
        this.playerClass = playerClass;
        this.img = img;
        this.imgGold = imgGold;
        this.locale = locale;
        this.rarity = rarity;
        this.faction = faction;
        this.race = race;
        this.quality = quality;
        this.imageURL = imageURL;
    }
}