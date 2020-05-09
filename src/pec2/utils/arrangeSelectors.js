import Selectors from '../Classes/Selectors.js';

export default function arrangeSelectors(selector) {
    let selectors = new Selectors();

    selectors.classes = selector.classes;
    selectors.sets = selector.sets;
    selectors.types = selector.types;
    selectors.races = selector.races;
    selectors.factions = selector.factions;
    selectors.qualities = selector.qualities;

    return selectors;
}