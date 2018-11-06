const rp = require('request-promise');

export interface AncientAlienRequest {
  number_of_words?: number;
  paragraphs?: boolean;
}

export const generateAncientAlienIpsum = async (form: AncientAlienRequest): Promise<string> => {
  const body = await rp.post({
    url: 'http://ancientalienipsum.com/wp-content/themes/twentyseventeen/ajax_words.php',
    form
  });
  const clean = body.replace(/\r?\n/gi,'').replace(/\s+/gi,' ');
  return clean;
};
