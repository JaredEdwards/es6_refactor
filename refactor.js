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
      feed: function (){
        var candy = 'candy';
        console.log('mmm I love ' + candy + '!');
      }
    },
    {
      name: 'pikachu',
      type: 'electric',
      weaknesses: ['ground'],
      feed: function (){
        var candy = 'candy';
        console.log('mmm I love ' + candy + '!');
      }
    },
    {
      name: 'charmander',
      type: 'fire',
      weaknesses: ['ground', 'rock', 'water'],
      feed: function (){
        var candy = 'candy';
        console.log('mmm I love ' + candy + '!');
      }
    }
  ],

  speak: function (catchphrase){
    console.log(this.catchphrase);
  },
  rename: function(newName){
    this.name = newName || 'Jessie';
    console.log('My new name is ' + pokeMaster.name);
  },
  myPokemon: function() {
    this.pokedex.forEach(function(pokemon) {
      console.log('I am ' + pokemon.name + ' and I am a ' + pokemon.type + ' pokemon.' );
    });
  }
};
