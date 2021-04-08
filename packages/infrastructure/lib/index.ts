import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { LambdaRestApi } from '@aws-cdk/aws-apigateway';
import { RetentionDays } from '@aws-cdk/aws-logs';

import path from 'path';
export class FizzBuzzApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const fizzbuzz = new Function(this, 'FizzBuzzAPILambda', {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(path.dirname(require.resolve('@stormreply/fizz-buzz-api-lambda/build/package.json'))),
      handler: 'src/index.default',
      logRetention: RetentionDays.ONE_WEEK,
    });

    const fizzbuzzApi = new LambdaRestApi(this, 'fizzbuzz-apigw', {
      handler: fizzbuzz,
      proxy: false,
    });

    const check = fizzbuzzApi.root.addResource('check');
    check.addMethod('POST');
  }
}
