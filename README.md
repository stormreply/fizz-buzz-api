[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![cdk](https://img.shields.io/badge/built%20with-cdk-%23ec7211)](https://aws.amazon.com/cdk/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# Fizz Buzz API

## Requirements

The project requires node version **15** or later and npm version **7** or later.
If you need older versions of node and npm in other projects you can use [Node Version Manager](https://github.com/nvm-sh/nvm) to switch whenever you like. The project contains an `.nvmrc` file which automatically triggers nvm once you configured the [deeper shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration)

## Getting started

To start the Development, try to run `npm run setup` in the root project (`fizz-buzz-api`).
This command will run npm install on the root project and afterwards on all subprojects processes like npm install and the links between cross-dependencies.

See [Lerna Bootstrap Documentation](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme) for more information.

See [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/api/latest/) for more information.

## SonarCloud

If you want to have the sonarlint result in your editor when developing put the following configuration in your user settings:

``` json
{
    "sonarlint.connectedMode.connections.sonarcloud": [
        { "organizationKey": "stormreply", "token": "<generated from https://sonarcloud.io/account/security/>" }
    ]
}
```
