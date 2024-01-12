import { gql, ApolloServer } from 'apollo-server'



const typeDefs = gql`

  type User {
    name: String!,
    age: Int!
  }

  type Game {
    name: String!,
    price: Float!
  }

  type Query{
    users: [User!]!,
    game: Game!,
    user(name: String): User
  }
`

const resolvers = {
  Query: {
    users(){
      return [{name: 'Vinicius', age: 23}]
    },
    game(){
      return {name: 'call', price: 23}
    },
    user(obj: any, args: {name: string,
      age: number}){
      console.log(args.name)
      return {name: 'vinicius', age: 23}
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()