var primes = function(n) {

  var allNumbers = [];
  for (var i = 2; i <= n; i++) {
    allNumbers.push(i);
  }

  for (var prime = 2; prime <= n; prime++) {
    allNumbers.forEach(function(number) {
      if (number % prime === 0 && number !== prime) {
        var index = allNumbers.indexOf(number);
        allNumbers.splice(index, 1);
      }
    });
  }
  return allNumbers;
};
