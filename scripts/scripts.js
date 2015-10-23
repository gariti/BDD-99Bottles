function bottlesOfBeer(numOfBottles) {
  var lyrics = "";
  var lastBottleLyric = "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, No more bottles of beer on the wall. "
  var noBottlesLyric = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."

  //build lyrics dynamically when 'numOfBottles' is 2 or greater
  for (var i = numOfBottles; i > 1; i--) { 
    lyrics = lyrics + i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall. "
  }


  //determine output of function
  if (numOfBottles > 1) {
    return lyrics + lastBottleLyric + noBottlesLyric;
  } else if (numOfBottles === 1) {
    return lastBottleLyric + noBottlesLyric;
  } else {
    return noBottlesLyric;
  }
}
