import { getCardsByClass, getCardById, filterCards, getSelectors } from './api.js';

const $deckDisplayer = document.getElementById('img-container');
const $resultsCounter = document.getElementById('results-counter');
const $selectorsResum = document.getElementById('selectors-resum');

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


    console.log(filteredCards);
    return filteredCards;

    // setTimeout(async () => {
    //     await getCardsByClass('Neutral');
    //     await filterCards('race', 'Mech');

    // }, 10000);
    // let cardId = await getCardById('GVG_114');
    // console.log(cardId);
}


