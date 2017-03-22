function renderHTML() {
  $('body').append('<div class="deckOfCardsContainer"></div><div class"diceContainer"></div><div class="probabilitiesContainer"></div>')

}
console.log('heybabe');

// Create a constructor that builds objects representing generic playing cards.
// A playing card should keep track of its suit and value
// (Ace, 2, 3, ... Jack, Queen, King).


function PlayingCard(suit, value) {
  'use strict';
  var suitArray = ["club", "hearts", "spade", "diamond"];
  var cardValueArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K','A'];
  this.suit = suitArray[Math.floor(Math.random()*suitArray.length)];
  // console.log(Math.floor(Math.random()*suitArray.length));
  this.value = cardValueArray[Math.floor(Math.random()*cardValueArray.length)];
  // console.log(Math.floor(Math.random()*cardValueArray.length));




};


// Create a constructor that builds objects representing six sided dice.
// A die should keep track of the current value (what side is up, a number between 1-6)
// and have a roll method that will simulate rolling the die
function SixSidedDie() {
    'use strict';
    this.currentValue = 1;
    this.roll = function () {
      var result = (Math.ceil(Math.random()*6));
      this.currentValue = result;
      return result;
    }
};

// Rolling the die should change the current value of the die.
var die = new SixSidedDie();

// Create a function called getProbabilities (it does NOT live on the constructor)
// that will simulate rolling two dice 1000 times.
// The function should return an array that shows the number of times the sum of the two die added up to 2, 3, 4, ... 12. For example:

function getProbabilities() {
    // create two vars that call the Die constructor
    var diceSetOne = new SixSidedDie;
    var diceSetTwo = new SixSidedDie;
    var totalArr = [];
    // 1,000 times; Create a loop of 1,000
    for (var i = 1; i <= 1000; i++) {
      var firstRoll = (diceSetOne.roll());
      var secondRoll = (diceSetOne.roll());
      var sum = (firstRoll + secondRoll);
      totalArr.push(sum);
    };

    // store the result of each roll of the die
  return totalArr;
}
// The function should return an array that shows the number of times the sum of the two die added up to 2, 3, 4, ... 12. For example:

var results = getProbabilities();
console.log(results);
