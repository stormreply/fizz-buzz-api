import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import lambdaTester from 'lambda-tester';

import fizzBuzzApiHandler from '../src';

describe('Fizz Buzz API handler', function () {
  test('verifies not matching response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({ body: JSON.stringify({ number: 22 }) } as unknown) as APIGatewayProxyEvent)
      .expectResult((result: APIGatewayProxyResult) => {
        expect(result).toStrictEqual({ body: 'Not matching', statusCode: 200 });
      });
  });

  test('verifies fizzbuzz response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({ body: JSON.stringify({ number: 15 }) } as unknown) as APIGatewayProxyEvent)
      .expectResult((result: APIGatewayProxyResult) => {
        expect(result).toStrictEqual({ body: 'fizzbuzz', statusCode: 200 });
      });
  });

  test('verifies fizz response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({ body: JSON.stringify({ number: 21 }) } as unknown) as APIGatewayProxyEvent)
      .expectResult((result: APIGatewayProxyResult) => {
        expect(result).toStrictEqual({ body: 'fizz', statusCode: 200 });
      });
  });

  test('verifies buzz response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({ body: JSON.stringify({ number: 25 }) } as unknown) as APIGatewayProxyEvent)
      .expectResult((result: APIGatewayProxyResult) => {
        expect(result).toStrictEqual({ body: 'buzz', statusCode: 200 });
      });
  });

  test('verifies empty body response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({} as unknown) as APIGatewayProxyEvent)
      .expectResult((result: APIGatewayProxyResult) => {
        expect(result).toStrictEqual({ body: 'No content!', statusCode: 400 });
      });
  });

  test('verifies no number response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({ body: JSON.stringify({ number: 'test' }) } as unknown) as APIGatewayProxyEvent)
      .expectResult((result: APIGatewayProxyResult) => {
        expect(result).toStrictEqual({ body: 'Submitted data is no number!', statusCode: 400 });
      });
  });
});
