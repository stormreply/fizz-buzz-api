#!/usr/bin/env node
import 'source-map-support/register';

import { App } from '@aws-cdk/core';

import { FizzBuzzApiStack } from '../lib';

new FizzBuzzApiStack(new App(), 'FizzBuzzApiStack', {
  stackName: 'FizzBuzzApi',
});
