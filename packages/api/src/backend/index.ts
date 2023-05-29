/* backend-api GraphWeaver Project */

import 'reflect-metadata';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import Graphweaver from '@exogee/graphweaver-apollo';


import { PingResolver } from './schema/ping';

const isOffline = process.env.IS_OFFLINE === 'true';

const graphweaver = new Graphweaver({
	resolvers: [PingResolver],
	apolloServerOptions: {
		introspection: isOffline,
	},
	adminMetadata: { enabled: true },
	
});

export const handler = startServerAndCreateLambdaHandler<any>(
	graphweaver.server,
	handlers.createAPIGatewayProxyEventRequestHandler()
);


