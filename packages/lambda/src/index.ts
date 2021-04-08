import 'source-map-support/register';

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export default async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('request:', JSON.stringify(event, undefined, 2));

  if (!event.body) {
    return { body: 'No content!', statusCode: 400 };
  }

  const body = JSON.parse(event.body);

  const number = body.number;

  let outputString;

  if (typeof number != 'number') {
    return { body: 'Submitted data is no number!', statusCode: 400 };
  }

  if (number % 3 == 0 && number % 5 == 0) {
    outputString = 'fizzbuzz';
  } else if (number % 3 == 0) {
    outputString = 'fizz';
  } else if (number % 5 == 0) {
    outputString = 'buzz';
  } else {
    outputString = 'Not matching';
  }

  return { body: outputString, statusCode: 200 };
};
