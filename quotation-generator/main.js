(function() {
  'strict mode';

  const motivationQuotes = {
    first: [
      'Ambition',
      'Work',
      'Quality',
      'Well done',
    ],
    second: [
      'is',
      'can be',
      'is not an act, it is',
    ],
    third: [
      'difficult',
      'hard to attain, but worth it',
      'a habit',
      'better than well said',
    ],
  };

  const successQuotes = {
    first: [
      'Success',
      'Failure',
      'Courage',
      'Opportunities',
    ],
    second: [
      'is',
      'is not',
      'don\'t happen,',
    ],
    third: [
      'final.',
      'fatal.',
      'to continue that counts.',
      'you create them.',
    ],
  };

  function generateRandomNum(max) {
    return Math.floor((Math.random() * max));
  }

  function selectShuffleWord(words) {
    return words[generateRandomNum(words.length)];
  }

  function selectShuffleQuote(fragmentsSource) {
    return selectShuffleWord(fragmentsSource.first) + ' ' +
      selectShuffleWord(fragmentsSource.second) + ' ' +
      selectShuffleWord(fragmentsSource.third);
  }

  function buildQuotes(fragmentsSource, totalQuotes) {
    const quotes = [];
    for (let iQ = 0; iQ < totalQuotes; iQ++) {
      quotes.push(selectShuffleQuote(fragmentsSource));
    }

    return quotes;
  }

  console.log(buildQuotes(motivationQuotes, 3));
  console.log(buildQuotes(successQuotes, 4));

})();