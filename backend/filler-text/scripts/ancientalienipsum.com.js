const rp = require('request-promise');

(async () => {

  const form = {
    number_of_words: 200,
    paragraphs: false
  };
  const body = await rp.post({url: 'http://ancientalienipsum.com/wp-content/themes/twentyseventeen/ajax_words.php', form});
  const clean = body.replace(/\r?\n/gi,'').replace(/\s+/gi,' ');
  console.log(clean);
})();
