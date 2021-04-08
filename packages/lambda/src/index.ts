import 'source-map-support/register';

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export default async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('request:', JSON.stringify(event, undefined, 2));

  if (!event.body) {
    return { body: 'No number!', statusCode: 400 };
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

  return { body: outputString, statusCode: 200 };
};
