
export function capitalizer(str) {
  let trimmed = String(str).trim();
  let chars = trimmed.split('');
  chars[0] = chars[0].toUpperCase();
  return chars.join('');
}

export function reverser(str) {
  let trimmed = String(str).trim();
  return trimmed.split('').reverse().join('')
}

export const calculator = {
  add(a,b) { return a + b},
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  substract(a, b) { return a - b}
}
export function caesarCypher(str, recur = 3) {
  let text = String(str).trim().split(``);
  let recured = Number(recur);
  let expression = /[A-z]/;

  const minLetter = `abcdefghijklmnopqrstuvwxyz`;
  const majLetter = minLetter.toUpperCase();

  const codedMinLetter = [...minLetter.split(``).slice(recur), ...minLetter.split(``).slice(0, recur)].join(``);
  const codedMajLetter = codedMinLetter.toUpperCase();

  let coded = text.map((letter) => {
    if(letter.match(expression)) {
      let realIndex = 
      minLetter.indexOf(letter) === -1 ? majLetter.indexOf(letter) : minLetter.indexOf(letter);


      let newLetter = letter !== letter.toUpperCase() ? codedMinLetter.at(realIndex) : codedMajLetter.at(realIndex);
      return newLetter;
    } else {
      return letter;
    }
  })

  return coded.join(``);
}

export function analyzeArray(arr = []) {
  if (!Array.isArray(arr)) return
  if (arr.some((value) => typeof value !== 'number')) return

  let avg = Math.floor(arr.reduce((cur, forw) => cur + forw, 0) / arr.length);
  let sorted = [...arr].sort((a, b) => a - b);
  let sortedReverse = [...arr].sort((a, b) => b - a);
  return {
    average: avg,
    min: sorted[0],
    max: sortedReverse[0],
    length: arr.length,
  }
};

