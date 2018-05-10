import ApolloClient from "apollo-boost"

const client = new ApolloClient({ uri: "https://us1.prisma.sh/public-chestnutbison-814/backend/dev" })

export { client }


// Documentation: 
// https://www.npmjs.com/package/apollo-boost
// https://github.com/apollographql/apollo-client