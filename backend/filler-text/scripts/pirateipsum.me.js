const rp = require('request-promise');

(async () => {

  const form = {
    wordcount: 20,
    sentencecount: 20,
    paragraphcount: 20
  };
  const body = await rp.post({url: 'https://pirateipsum.me/includes/makeipsum.php', form});
  console.log(body);

})();
