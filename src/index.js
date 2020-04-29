import init from "./pec2";

console.log("Benvinguts a JS per a programadors");


init('class', 'Druid');


const $classCard = document.getElementById('class');
let classFilter;
$classCard.addEventListener('change', (e) => {
    classFilter = $classCard.options[$classCard.selectedIndex].text;
    init('class', classFilter);
    console.log(`Class: ${classFilter}`);
});

const $setCard = document.getElementById('set');
let setFilter;
$setCard.addEventListener('change', (e) => {
    setFilter = $setCard.options[$setCard.selectedIndex].text;
    init('cardSet', setFilter);
    console.log(`Set: ${setFilter}`);
});

const $typesCard = document.getElementById('types');
let typesFilter;
$typesCard.addEventListener('change', (e) => {
    typesFilter = $typesCard.options[$typesCard.selectedIndex].text;
    init('type', typesFilter);
    console.log(`Type: ${typesFilter}`);
});

const $racesCard = document.getElementById('race');
let racesFilter;
$racesCard.addEventListener('change', (e) => {
    racesFilter = $racesCard.options[$racesCard.selectedIndex].text;
    init('race', racesFilter);
    console.log(`Race: ${racesFilter}`);
});

const $factionsCard = document.getElementById('faction');
let factionsFilter;
$factionsCard.addEventListener('change', (e) => {
    factionsFilter = $factionsCard.options[$factionsCard.selectedIndex].text;
    init('faction', factionsFilter);
    console.log(`Faction: ${factionsFilter}`);
});

const $rarityCard = document.getElementById('rarity');
let rarityFilter;
$rarityCard.addEventListener('change', (e) => {
    rarityFilter = $rarityCard.options[$rarityCard.selectedIndex].text;
    init('rarity', rarityFilter);
    console.log(`Rarity: ${rarityFilter}`);
});



function onload() {
    $classCard.selectedIndex = 0;
    $setCard.selectedIndex = 0;
    $typesCard.selectedIndex = 0;
    $racesCard.selectedIndex = 0;
    $factionsCard.selectedIndex = 0;
    $rarityCard.selectedIndex = 0;
}

onload();