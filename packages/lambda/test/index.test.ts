import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import lambdaTester from 'lambda-tester';

import fizzBuzzApiHandler from '../src';

describe('Fizz Buzz API handler', function () {
  test('verifies successful response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event({} as APIGatewayProxyEventV2)
      .expectResult((result: APIGatewayProxyResultV2<string>) => {
        expect(result).toStrictEqual('Hello World!');
      });
  });
});
