const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// some() Iteration Method
console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
})

// every() Iteration Method
console.log(interestingWords.every(word => {return word.length > 5}));
