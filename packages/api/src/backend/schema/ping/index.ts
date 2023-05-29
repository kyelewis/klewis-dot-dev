/* backend-api GraphWeaver Project - Schema */
import { buildSchemaSync, Resolver, Query } from 'type-graphql';

@Resolver()
export class PingResolver {
	@Query(() => Boolean)
	async ping() {
    		return true; 
  	}
}   
