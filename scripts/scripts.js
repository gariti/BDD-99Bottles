function bottlesOfBeer(numOfBottles) {
  var oneBottleLyric = "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, No more bottles of beer on the wall. "
  var finalLyric = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."

  if (numOfBottles > 0) {
    return oneBottleLyric + finalLyric;
  } else {
    return finalLyric;
  }
}