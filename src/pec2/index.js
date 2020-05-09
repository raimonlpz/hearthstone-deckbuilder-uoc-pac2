import { getCardsByClass, getCardById, getInfoApi, getSelectors, filterCards } from './api.js';

const $deckDisplayer = document.getElementById('img-container');
const $resultsCounter = document.getElementById('results-counter');
const $selectorsResum = document.getElementById('selectors-resum');

const $classesSelectorOptions = document.getElementById('class');
const $setsSelectorOptions = document.getElementById('set');
const $typesSelectorOptions = document.getElementById('type');
const $racesSelectorOptions = document.getElementById('race');
const $factionsSelectorOptions = document.getElementById('faction');
const $raritiesSelectorOptions = document.getElementById('rarity');


let optionsSetUp = false;


export default async function init(selector, value) {

    $resultsCounter.innerHTML = '<span style="color:pink; text-shadow:-1px 1px 0 black;"><i>Loading Data...</i></span>';

    if (selector == 'class') {
        await getCardsByClass(value);
    }
    let filteredCards = await filterCards(selector, value);
    filteredCards.reverse();

    let selectors = await getSelectors();
    $resultsCounter.innerHTML = `${filteredCards.length} cards found`;
    $selectorsResum.innerHTML = `<h4>Selectors:</h4>
                                <strong>Class:</strong> <i>${selectors.class}</i> |
                                <strong>Set:</strong> <i>${selectors.cardSet}</i><br>
                                <hr>
                                <strong>Type:</strong> <i>${selectors.type}</i> |
                                <strong>Faction:</strong> <i>${selectors.faction}</i> <br>
                                <hr>
                                <strong>Quality:</strong> <i>${selectors.rarity}</i> |
                                <strong>Race:</strong> <i>${selectors.race}</i><br>`;

    $deckDisplayer.innerHTML = '';

    for (let card of filteredCards) {
        let img = document.createElement('img');

        img.src = card.imageURL;
        img.onerror = function () {
            img.classList.add('invisible');
        }
        img.setAttribute('class', 'imgbox');
        $deckDisplayer.appendChild(img);
    }

    let infoGame = await getInfoApi();

    if (!optionsSetUp) {
        // OPTIONS - CLASS 
        infoGame.classes.map((_class) => {
            let option = document.createElement('option');
            option.setAttribute('value', _class);
            let textnode = document.createTextNode(_class);
            option.appendChild(textnode);
            $classesSelectorOptions.appendChild(option);
        });

        // OPTIONS - SET 
        infoGame.sets.map((set) => {
            let option = document.createElement('option');
            option.setAttribute('value', set);
            let textnode = document.createTextNode(set);
            option.appendChild(textnode);
            $setsSelectorOptions.appendChild(option);
        });

        // OPTIONS - TYPE 
        infoGame.types.map((type) => {
            let option = document.createElement('option');
            option.setAttribute('value', type);
            let textnode = document.createTextNode(type);
            option.appendChild(textnode);
            $typesSelectorOptions.appendChild(option);
        });

        // OPTIONS - RACE
        infoGame.races.map((race) => {
            let option = document.createElement('option');
            option.setAttribute('value', race);
            let textnode = document.createTextNode(race);
            option.appendChild(textnode);
            $racesSelectorOptions.appendChild(option);
        });

        // OPTIONS - FACTION
        infoGame.factions.map((faction) => {
            let option = document.createElement('option');
            option.setAttribute('value', faction);
            let textnode = document.createTextNode(faction);
            option.appendChild(textnode);
            $factionsSelectorOptions.appendChild(option);
        });

        // OPTIONS - QUALITY
        infoGame.qualities.map((quality) => {
            let option = document.createElement('option');
            option.setAttribute('value', quality);
            let textnode = document.createTextNode(quality);
            option.appendChild(textnode);
            $raritiesSelectorOptions.appendChild(option);
        });

        optionsSetUp = true;
    }


    console.log('INFO GAME:');
    console.table(infoGame);

    console.log('SELECTORS/FILTERS Search:');
    console.table(selectors);

    console.log('CARDS by CLASS (+ selectors/filters) Search:')
    console.log(filteredCards);


    let cardId = await getCardById('ICC_314t5');
    console.log('CARD by ID Search:')
    console.table(cardId);


    return filteredCards;
}
