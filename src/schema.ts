// Schema 
// schema defenition language ou linguangem de definição de esquema
//  SDL

// import { gql, ApolloServer } from 'apollo-server'



// const typeDefs = gql`

//   type User {
//     name: String!,
//     age: Int!
//   }

//   type Game {
//     name: String!,
//     price: Float!
//   }

//   type Query{
//     users: [User!]!,
//     game: Game!
//   }
// `

// const resolvers = {
//   Query: {
//     users(){
//       return [{name: 'Vinicius', age: 23}]
//     },
//     game(){
//       return {name: 'call', price: 139.04}
//     }
//   }
// }


// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// })

// server.listen()