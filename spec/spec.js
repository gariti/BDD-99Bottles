describe('bottlesOfBeerSong', function() {
  it("will return only the final part of the song if 0 bottles are given", function() {
    expect(bottlesOfBeerSong(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
  it("will return 1 lyric, then the final lyric if 1 bottle is given", function() {
    expect(bottlesOfBeerSong(1)).to.equal("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, No more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
  it("will return 2 lyrics, then the final lyric if 2 bottles are given", function() {
    expect(bottlesOfBeerSong(2)).to.equal("2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall. 1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, No more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
  it("will return 5 lyrics, then the final lyric if 5 bottles are given", function() {
    expect(bottlesOfBeerSong(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer. Take one down and pass it around, 4 bottles of beer on the wall. 4 bottles of beer on the wall, 4 bottles of beer. Take one down and pass it around, 3 bottles of beer on the wall. 3 bottles of beer on the wall, 3 bottles of beer. Take one down and pass it around, 2 bottles of beer on the wall. 2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall. 1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, No more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });

});
