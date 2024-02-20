// Introduction to Arrays

// 1. Note: population in million 
let populations = [38, 67, 38, 211];

// 2. Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length === 4);

// 3. .......confusing point......
let percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

// Basic Array Operations (Methods)

// 1. Note: 6  neighboring countries of Afghanistan
let neighbours = ['Iran', 'Pakistan', 'Turkmenistan', 'Uzbekistan', 'Tajikistan', 'China'];

// 2. Utopia is written on the paper ....
neighbours.push('Utopia');

// 3. 
neighbours.pop();

// 4. 
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

// 5. Note: text edited for my own choice. One of Afghanistan's neighboring countries changed ....
let index = neighbours.indexOf('Iran');
if (index !== -1) {
    neighbours[index] = 'Republic of Iran';
}

console.log(neighbours);