//To practice the features of ES6 we have learned, and to get into the practice of refactoring our code to be more DRY and cleaner: refactor me with ES6!

var pokeMaster = {
  name: 'Ash',
  age: 11,
  catchphrase: 'gotta catch em all!',

  pokedex: [
    {
      name: 'squirtle',
      type: 'water',
      weaknesses: ['electric', 'grass'],
      feed(){
        const candy = 'candy';
        console.log(`mmm I love ${candy}!`);
      }
    },
    {
      name: 'pikachu',
      type: 'electric',
      weaknesses: ['ground'],
      feed(){
        const candy = 'candy';
        console.log(`mmm I love ${candy}!`);
      }
    },
    {
      name: 'charmander',
      type: 'fire',
      weaknesses: ['ground', 'rock', 'water'],
      feed(){
        const candy = 'candy';
        console.log(`mmm I love ${candy}!`);
      }
    }
  ],

  speak(catchphrase){
    console.log(this.catchphrase);
  },
  rename(newName="jessie"){
    this.name = newName
    console.log(`My new name is ${pokeMaster.name}`);
  },
  myPokemon(){
    this.pokedex.forEach(function(pokemon){
      var { name, type } = pokemon;
      console.log(`I am ${name} and I am a ${type} pokemon.`);
    });
  }
};
