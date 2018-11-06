const rp = require('request-promise');
const {XmlEntities} = require('html-entities');
const entities = new XmlEntities();

export interface DalaIpsumRequest {
  number: number;
  divider: 'p' | 'div' | '';
}

export const generateDalaIpsum = async (qs: DalaIpsumRequest): Promise<string> => {
  const body = await rp.get({url: 'http://dalaipsum.com/ipsum.php', qs});
  const clean = entities.decode(body.replace(/(^"|"$|\\)/gi, ''));
  return clean;
};
