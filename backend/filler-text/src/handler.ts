import {ApiGatewayHandler, LambdaUtil} from '../../libs/lambda-util/lambda-util';
import {FillerTextCreateRequest} from './models/filler-text';
import {generateAncientAlienIpsum} from './services/ancient-alien-ipsum';
import {generateCatIpsum} from './services/cat-ipsum';
import {generateDalaIpsum} from './services/dala-ipsum';
import {generatePirateIpsum} from './services/pirate-ipsum';

const lambdaUtil = new LambdaUtil();

export const fillerText: ApiGatewayHandler = async (event, context) => {
  const body: FillerTextCreateRequest = JSON.parse(event.body);

  let text;
  switch (body.type) {
    case 'Alien':
      text = await generateAncientAlienIpsum({paragraphs: false, number_of_words: 200});
      break;
    case 'Cat':
      text = await generateCatIpsum({par_count: 1, result_type: 'phrase', Generate: 'Make Muffins'});
      break;
    case 'Dala':
      text = await generateDalaIpsum({number: 2, divider: 'p'});
      break;
    case 'Pirate':
      text = await generatePirateIpsum({paragraphcount: 1});
      break;
    default:
      const errors = [{
        type: 'ApiError',
        message: `Unknown type ${body.type}`
      }];
      return lambdaUtil.apiResponseJson({statusCode: 400, body: {errors}});
  }
  return lambdaUtil.apiResponseJson({statusCode: 201, body: {data: text}});
};

