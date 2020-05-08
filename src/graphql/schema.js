import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
type Query {
    suppliers: [Supplier]
}

type Supplier {
    _id: ID!
    name: String!
    business_name: String!

}



type Mutation { 
    newSupplier(_id: ID, input: NewSupplier ): Supplier
    updateSupplier(_id: ID, input: NewSupplier ): Supplier

}

input NewSupplier {
    name: String!
    business_name: String!
}


`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});