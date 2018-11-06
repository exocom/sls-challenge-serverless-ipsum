const cheerio = require('cheerio');
const rp = require('request-promise');

(async () => {

  const form = {
    par_count: 3,
    result_type: 'phrase',
    Generate: 'Make Muffins'
  };
  const body = await rp.post({url: 'http://www.catipsum.com/index.php', form});
  const $ = cheerio.load(body);
  const clean = `<p>${$('.body_text').text().trim()}</p>`;
  console.log(clean);

})();
