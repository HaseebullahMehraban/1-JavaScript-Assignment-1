// Equality Operators: == VS. ===

// 1. Note: Afghanistan shares boders with 6 countries that is why motre than one border is the correct option to be selected.
let numNeighbours = parseInt(prompt("How many neighbour countries does Afghanistan have?"));

// 2. 
if (numNeighbours == 1) {
    console.log("Only 1 border!");
}
// 3. the correct option.....
else if (numNeighbours > 1) {
    console.log("More than 1 border");
}
// 4. when there is no neighbor or zero neighbor 
else {
    console.log("No borders");
}

// 5. 

// 6. 
// Notice what happens when there is exactly 1 border! Why is this happening?
//    Asnwer: Becuase Afghnistan shares its border with 6 countries.

// 7. 

// 8. 

// Logical Operators

// 1. 

// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people, and is not an island.
let speaksEnglish = true;
let population = 40; // in millions
let isIsland = false;

// 3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria.
if (speaksEnglish && population < 50 && !isIsland) {
    // 4. If yours is the right country, log a string like this: 'You should live in Afghanistan :)'. If not, log 'Afghanistan does not meet your criteria :('
    console.log("You should live in Afghanistan :)");
} else {
    console.log("Afghanistan does not meet your criteria :(");
}

// 5.