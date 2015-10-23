describe('bottlesOfBeer', function() {
  it("will return only the final part of the song if 0 bottles are given", function() {
    expect(bottlesOfBeer(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
});