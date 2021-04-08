import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import { Construct, Stack, StackProps } from '@aws-cdk/core';

import path from 'path';
export class FizzBuzzApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Function(this, 'FizzBuzzAPILambda', {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(path.dirname(require.resolve('@stormreply/fizz-buzz-api-lambda/build/package.json'))),
      handler: 'src/index.default',
    });
  }
}
