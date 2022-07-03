function getRandomElements<T>(arr: T[], n: number) {
  var result = new Array<T>(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len) {
    console.error('getRandom: more elements taken than available');
    return [];
  }
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default getRandomElements;
