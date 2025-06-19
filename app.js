const pokemon = require('./data.js')

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
  gameDifficulty: "Med",
  catchPokemon: function (pokemonObj) {
    game.party.push(pokemonObj);
    game.items[1].quantity--;
  },
  completeLevel: function (difficultyL) {
    game.gyms.forEach(level => {
        if(level.difficulty==difficultyL){
            level.completed=true;
        }
    });
  }

};


console.dir(pokemon, { maxArrayLength: null });


console.log(game);

console.log ("--------------------------");


//Exercise 4

game.party.push(pokemon[0]);

console.log(game.party[0]);

console.log ("--------------------------");


//Exercise 5

game.party.push(pokemon[4]);
game.party.push(pokemon[7]);
game.party.push(pokemon[25]);

console.log ("--------------------------");


//Exercise 6

game.gyms.forEach(element => {
    if(element.difficulty==3){
        element.completed=true;
    }
});

console.log(game.gyms);

console.log ("--------------------------");


//Exercise 7

for (let i = 0;i < game.party.length;i++) {
    if(game.party[i].starter){
        game.party[i]=pokemon[game.party[i].number];
    }
    // finding the index of the pokemon
}

console.log(game.party);

console.log ("--------------------------");


//Exercise 8
console.log("Pokemon List: ")

game.party.forEach(poky => {
   console.log(poky.name + ' ');
});

console.log ("--------------------------");

//Exercise 9

console.log("Starter Pokemon List: ")

pokemon.forEach(poky => {
    if(poky.starter){
        console.log(poky.name + ' ');
    }
});

console.log ("--------------------------");

//Exercise 10

game.catchPokemon(pokemon[20]);

console.log(game.party);

//Exercise 11

console.log("Before quantity of pokeballs: ");
console.log(game.items[1].quantity);

game.catchPokemon(pokemon[22]);

console.log("The quantity after catching the pokemon: ");
console.log(game.items[1].quantity);

//Exercise 12

game.completeLevel(6);

console.log(game);

