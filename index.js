import { GraphQLServer } from "graphql-yoga";
import resolvers from "./GraphQL/resolvers.js";

const server = new GraphQLServer({
    typeDefs: "GraphQL/Schema.TypeDef.graphql",
    resolvers,
});

server.start(() => console.log("Server Started"));