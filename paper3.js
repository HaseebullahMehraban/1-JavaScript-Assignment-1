// Functions

// 1.

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// 2.
let descriptionJapan = describeCountry('Japan', 126, 'Tokyo');
let descriptionBrazil = describeCountry('Brazil', 213, 'Brasília');
let descriptionRussia = describeCountry('Russia', 144, 'Moscow');

console.log(descriptionJapan);
console.log(descriptionBrazil);
console.log(descriptionRussia);

// Function Declarations vs. Expressions

// 1.
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// 3. 
let percentageAfghanistan = percentageOfWorld1(38);
let percentageJapan = percentageOfWorld1(126);
let percentageChina = percentageOfWorld1(1441);

console.log(percentageAfghanistan);
console.log(percentageJapan);
console.log(percentageChina);

// 4. 
let percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
};

let percentageAfghanistan2 = percentageOfWorld2(38);
let percentageJapan2 = percentageOfWorld2(126);
let percentageChina2 = percentageOfWorld2(1441);

console.log(percentageAfghanistan2);
console.log(percentageJapan2);
console.log(percentageChina2);