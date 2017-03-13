/*
getPrimes function to generate a list of prime numbers from 0 to n
*/

var getPrimes = function(n) {
  var result = [2];

  // Ensure input is a positive integer
  if (n === undefined || typeof n !== 'number' || n < 0) {
    return "Invalid input. This function only takes positive integers.";
  }

  // Since 2 is the lowest prime number
  else if (n < 2) {
    return [];
  }

  else if ( n === 2) {
    return result;
  }

  else {
    // to reduce the number of loops, 
    // iterate through odd since any number that 
    // can be divided sucessfully by 2
    // cannot be prime
    for (var i = 3; i < n + 1; i += 2) {
      // define a value to hold a boolean 
      // that would act as switch for 
      // pushing values to our list of primes
      var prime = true;
      // despite the reduction in loops by more than half
      // it still seems to be O(n^2)
      for (var k = 2; k < Math.sqrt(i) + 1; k++) {
        if (i % k === 0) {
          prime = false;
          // Break out the loop once number 
          // is not prime to reduce number of loops.
          break;
        }
      }
      if (prime) {
        result.push(i);
      }
    }
    return result;
  } 
}

module.exports = getPrimes;
