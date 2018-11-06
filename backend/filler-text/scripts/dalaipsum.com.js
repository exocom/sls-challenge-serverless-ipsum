const rp = require('request-promise');
const {XmlEntities} = require('html-entities');

const entities = new XmlEntities();

(async () => {

  const qs = {
    number: 20,
    divider: 'p',
  };
  const body = await rp.get({url: 'http://dalaipsum.com/ipsum.php', qs});
  const clean = entities.decode(body.replace(/(^"|"$|\\)/gi,''));
  console.log(clean);

})();
