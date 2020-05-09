import init from "./pec2";

console.log("Benvinguts a JS per a programadors");


init('class', 'Death Knight');


const $classCard = document.getElementById('class');
$classCard.addEventListener('change', (e) => {
    const classFilter = $classCard.options[$classCard.selectedIndex].text;
    init('class', classFilter);
});

const $setCard = document.getElementById('set');
$setCard.addEventListener('change', (e) => {
    const setFilter = $setCard.options[$setCard.selectedIndex].text;
    init('cardSet', setFilter);
});

const $typesCard = document.getElementById('type');
$typesCard.addEventListener('change', (e) => {
    const typesFilter = $typesCard.options[$typesCard.selectedIndex].text;
    init('type', typesFilter);
});

const $racesCard = document.getElementById('race');
$racesCard.addEventListener('change', (e) => {
    const racesFilter = $racesCard.options[$racesCard.selectedIndex].text;
    init('race', racesFilter);
});

const $factionsCard = document.getElementById('faction');
$factionsCard.addEventListener('change', (e) => {
    const factionsFilter = $factionsCard.options[$factionsCard.selectedIndex].text;
    init('faction', factionsFilter);
});

const $rarityCard = document.getElementById('rarity');
$rarityCard.addEventListener('change', (e) => {
    const rarityFilter = $rarityCard.options[$rarityCard.selectedIndex].text;
    init('rarity', rarityFilter);
});


