import 'source-map-support/register';

import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';

export default async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2<string>> => {
  console.log('request:', JSON.stringify(event, undefined, 2));

  if (!event.body) {
    return 'No number!';
  }

  const body = JSON.parse(event.body);

  const number = body.number;

  let outputString;

  /*
    if (typeof number != 'number') {
        var falseDatatype = { 'response': 'Submitted data is no number!' }
        return {
            statusCode: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(falseDatatype)
        };
    }
    */

  if (number % 3 == 0 && number % 5 == 0) {
    outputString = 'fizzbuzz';
  } else if (number % 3 == 0) {
    outputString = 'fizz';
  } else if (number % 5 == 0) {
    outputString = 'buzz';
  } else {
    outputString = 'Not matching';
  }

  // var response = { "response": outputString }

  return outputString;
};
