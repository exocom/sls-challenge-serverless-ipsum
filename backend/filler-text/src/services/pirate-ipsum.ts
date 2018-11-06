const rp = require('request-promise');

export interface PirateIpsumRequest {
  wordcount?: number;
  sentencecount?: number;
  paragraphcount?: number;
}

export const generatePirateIpsum = async (form: PirateIpsumRequest): Promise<string> => {
  const body = await rp.post({
    url: 'https://pirateipsum.me/includes/makeipsum.php',
    form
  });
  return body;
};
