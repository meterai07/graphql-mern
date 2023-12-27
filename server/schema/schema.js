// import { projects, clients } from "./_db";
// import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";

const { projects, clients } = require("../_db");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require("graphql");

const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return clients.find((client) => client.id === args.id);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});