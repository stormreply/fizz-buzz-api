[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![cdk](https://img.shields.io/badge/built%20with-cdk-%23ec7211)](https://aws.amazon.com/cdk/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# Fizz Buzz API

## Requirements

The project requires node version **15** or later and npm version **7** or later.
If you need older versions of node and npm in other projects you can use [Node Version Manager](https://github.com/nvm-sh/nvm) to switch whenever you like. The project contains an `.nvmrc` file which automatically triggers nvm once you configured the [deeper shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration)

## Getting started
To start the Development, run `npm run setup` in the root project (`fizz-buzz-api`).
This command will run `npm install` on the root project and afterwards bootstrap all packages. You can not run `npm install` manualy on the packages because that would break cross-dependencies between the packages.

See [Lerna Bootstrap Documentation](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme) for more information.

## Building
To build the project, run `npm run build` in the root project (`fizz-buzz-api`).
This command will run `npm run build` on all packages. You could also run `npm run build:production` which optimises for deployment.

## Testing
Use this `curl` call with any number you like to test the service:
```bash
curl --location --request POST 'https://lylfgt8q40.execute-api.eu-central-1.amazonaws.com/prod/check' \
--header 'Content-Type: application/json' \
--data-raw '{ "number": 30 }'
```

## Deployment
Before deployment you must run `npm run build:production` which optimises for deployment. Then you can deploy by going to the infrastructure package (`packages/infrastructure`) and run `npm run cdk -- deploy`. This will deploy the project to your default aws account if configured.

See [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/api/latest/) for more information.

## SonarCloud

You can find the Sonarcloud projects here:
- [Infrastructure](https://sonarcloud.io/dashboard?id=stormreply_fizz-buzz-api_infrastructure)
- [Lambda](https://sonarcloud.io/dashboard?id=stormreply_fizz-buzz-api_lambda)

If you want to have the sonarlint result in your editor when developing put the following configuration in your user settings:

``` json
{
    "sonarlint.connectedMode.connections.sonarcloud": [
        { "organizationKey": "stormreply", "token": "<generated from https://sonarcloud.io/account/security/>" }
    ]
}
```
