import { App } from '@aws-cdk/core';

import 'jest-cdk-snapshot';

import { FizzBuzzApiStack } from '../lib';

test('Fizz Buzz API Stack', () => {
  expect(new FizzBuzzApiStack(new App(), 'FizzBuzzTestStack')).toMatchCdkSnapshot({
    ignoreAssets: true,
  });
});
