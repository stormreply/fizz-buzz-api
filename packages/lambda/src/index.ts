import 'source-map-support/register';

import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';

export default async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2<string>> => {
  console.log(event);
  return 'Hello World!';
};
