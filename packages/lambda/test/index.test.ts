import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import lambdaTester from 'lambda-tester';

import fizzBuzzApiHandler from '../src';

describe('Fizz Buzz API handler', function () {
  test('verifies not matching response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({ body: JSON.stringify({ number: 22 }) } as unknown) as APIGatewayProxyEventV2)
      .expectResult((result: APIGatewayProxyResultV2<string>) => {
        expect(result).toStrictEqual('Not matching');
      });
  });

  test('verifies fizzbuzz response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({ body: JSON.stringify({ number: 15 }) } as unknown) as APIGatewayProxyEventV2)
      .expectResult((result: APIGatewayProxyResultV2<string>) => {
        expect(result).toStrictEqual('fizzbuzz');
      });
  });

  test('verifies fizz response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({ body: JSON.stringify({ number: 21 }) } as unknown) as APIGatewayProxyEventV2)
      .expectResult((result: APIGatewayProxyResultV2<string>) => {
        expect(result).toStrictEqual('fizz');
      });
  });

  test('verifies buzz response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({ body: JSON.stringify({ number: 25 }) } as unknown) as APIGatewayProxyEventV2)
      .expectResult((result: APIGatewayProxyResultV2<string>) => {
        expect(result).toStrictEqual('buzz');
      });
  });

  test('verifies empty body response', async () => {
    return lambdaTester(fizzBuzzApiHandler)
      .event(({} as unknown) as APIGatewayProxyEventV2)
      .expectResult((result: APIGatewayProxyResultV2<string>) => {
        expect(result).toStrictEqual('No number!');
      });
  });
});
