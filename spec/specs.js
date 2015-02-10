describe('primes', function() {
  it("should return array of primes up to 3", function() {
    expect(primes(3)).to.eql([2,3]);
  });

  it("should return an array of primes up to 5", function() {
    expect(primes(5)).to.eql([2,3,5]);
  });

  it("should return an array of primes up to 10", function() {
    expect(primes(10)).to.eql([2,3,5,7]);
  });

  it("should return an array of primes up to 30", function() {
    expect(primes(30)).to.eql([2,3,5,7,11,13,17,19,23,29])
  });
});
