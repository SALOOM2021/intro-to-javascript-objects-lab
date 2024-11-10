const pokemon = require('./data.js');

// Exercise 1
console.log("=================={ 1 }==================")
console.dir(pokemon, { maxArrayLength: null })

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
    // Exercise 3

    difficulty: ["Easy", "Med", "Hard"],
    // Exercise 13
    gymstatus: function () {
        const gymTally = {
            completed: 0,
            incomplete: 0
        }
        for (let i = 0; i < this.gyms.length; i++) {
            if (this.gyms[i].completed === true) {
                gymTally.completed++;
            }
            else {
                gymTally.incomplete++
            }

        }
        console.log(gymTally)
    },
    // Exercise 14
    partyCount: function () {
        let numOfPoki = 0;
        for (let i = 0; i < this.party.length; i++) {
            numOfPoki++;
        }
        console.log(numOfPoki)
    }
}
// Exercise 2
console.log("=================={ 2 }==================")
console.log(game)

// Exercise 3
console.log("=================={ 3 }==================")
console.log(game.difficulty)

// Exercise 4
console.log("=================={ 4 }==================")
game.party.push(pokemon[0])
console.log(game.party)

// Exercise 5
console.log("=================={ 5 }==================")
game.party.push(pokemon[55])
game.party.push(pokemon[18])
game.party.push(pokemon[24])
console.log(game.party)


// Exercise 6
console.log("=================={ 6 }==================")
for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;
    }
}
console.log(game.gyms)

// Exercise 7

console.log("=================={ 7 }==================")
for (let i = 0; i < game.party.length; i++) {
    let starterPokemon = game.party[i]; 

    if (game.party[i].starter=== true) {

        let starterIdx = pokemon.indexOf(starterPokemon); 
        let evolvedPokemon = pokemon[starterIdx + 1];

        game.party.splice(i, 1, evolvedPokemon);
        game.party[i].starter = true // after replacing the starter , i used this line to convert the starter from false to true
    }
    /* these line of code will not only gonna upgrade the name , but also the hp,type, and number because 
    we cannot upgrade the name only while other characteristics remain the same*/
}
console.log(game.party)


// Exercise 8
console.log("=================={ 8 }==================")
for (let i = 0; i < game.party.length; i++) {
    console.log(game.party[i].name)
}

// Exercise 9
console.log("=================={ 9 }==================")
for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].starter === true)

        console.log("Pokemon Number: " + pokemon[i].number + " Name: " + pokemon[i].name)
}

// Exercise 10
console.log("=================={ 10 }==================")
game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj)
}
game.catchPokemon(pokemon[7])
console.log(game.party)

// Exercise 11
console.log("=================={ 11 }==================")
game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj)
    game.items[1].quantity-- 
}
game.catchPokemon(pokemon[79])
console.log(game.items)

game.catchPokemon(pokemon[89])
console.log(game.items)

// Exercise 12
console.log("=================={ 12 }==================")
for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 6) {
        game.gyms[i].completed = true;
    }
}
console.log(game.gyms)
// Exercise 13
console.log("=================={ 13 }==================")
game.gymstatus()

// Exercise 14
console.log("=================={ 14 }==================")
game.partyCount()

// Exercise 15
console.log("=================={ 15 }==================")
for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 8) {
        game.gyms[i].completed = true;
    }
}
console.log(game.gyms)

// Exercise 16
console.log("=================={ 16 }==================")
console.log(game)

