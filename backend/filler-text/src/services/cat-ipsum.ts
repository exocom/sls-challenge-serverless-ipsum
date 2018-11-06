const cheerio = require('cheerio');
const rp = require('request-promise');

export interface CatIpsumRequest {
  par_count: number;
  result_type: 'phrase';
  Generate: 'Make Muffins';
}

export const generateCatIpsum = async (form: CatIpsumRequest): Promise<string> => {
  const body = await rp.post({url: 'http://www.catipsum.com/index.php', form});
  const $ = cheerio.load(body);
  const clean = `<p>${$('.body_text').text().trim()}</p>`;
  return clean;
};
