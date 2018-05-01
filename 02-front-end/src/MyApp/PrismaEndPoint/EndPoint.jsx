import ApolloClient from "apollo-boost"

const client = new ApolloClient({ uri: "https://us1.prisma.sh/public-gossamerhealer-739/prismaTest2/dev" })

export { client }


// Documentation: 
// https://www.npmjs.com/package/apollo-boost
// https://github.com/apollographql/apollo-client