# Games-of-Chance

## Synopsis:

#### Create a constructor that builds objects representing generic playing cards.
A playing card should keep track of its suit and value (Ace, 2, 3, ... Jack, Queen, King).

#### Create a constructor that builds objects representing six sided dice.
A die should keep track of the current value (what side is up, a number between 1-6)
and have a roll method that will simulate rolling the die.
Rolling the die should change the current value of the die.

#### Create a function called getProbabilities 
(it does NOT live on the constructor) that will simulate rolling two dice 1000 times. 
The function should return an array that shows the number of times the sum of the two die added up to
2, 3, 4, ... 12. For example:

```
var result = getProbabilities();
console.log(result);
// Shows:
// [
//    30,
//    55,
//    80,
//    110,
//    140,
//    170,
//    140,
//    110,
//    80,
//    55,
//    30,
// ]
```
### Motivation 
Day-18 of Front End at the Iron Yard
Daily Assignment

