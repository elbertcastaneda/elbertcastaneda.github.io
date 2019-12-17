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

  function onClickMotivationalButton(e) {
    const totalQuotes = Number(e.target.innerText);
    const showQuotes = document.getElementById('show-quotes');
    const quotes = buildQuotes(motivationQuotes, totalQuotes);
    const quotesHtml = quotes.reduce(function (motivationQuotesHtml, quote) {
      return `${motivationQuotesHtml}\n<p>- ${quote}</p>`;
    }, '');
    showQuotes.innerHTML = `<div class="alert alert-info" role="alert">
    ${quotesHtml}
  </div>`;

  }

  function onClickSuccessButton(e) {
    const totalQuotes = Number(e.target.innerText);
    const showQuotes = document.getElementById('show-quotes');
    const quotes = buildQuotes(successQuotes, totalQuotes);
    const quotesHtml = quotes.reduce(function (successQuotesHtml, quote) {
      return `${successQuotesHtml}\n<p>- ${quote}</p>`;
    }, '');
    showQuotes.innerHTML = `<div class="alert alert-success" role="alert">
    ${quotesHtml}
  </div>`;
  }

  const totalMotivationButtons = document.querySelectorAll('[name="totalMotivation"]');
  for (let iMotivational = 0; iMotivational < totalMotivationButtons.length; iMotivational++) {
    const motivationalButton = totalMotivationButtons[iMotivational];
    motivationalButton.addEventListener('click', onClickMotivationalButton);
  }

  const totalSuccessButtons = document.querySelectorAll('[name="totalSuccess"]');
  for (let iSuccess = 0; iSuccess < totalSuccessButtons.length; iSuccess++) {
    const successButton = totalSuccessButtons[iSuccess];
    successButton.addEventListener('click', onClickSuccessButton);
  }
})();