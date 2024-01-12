import { gql, ApolloServer } from 'apollo-server'



const typeDefs = gql`
    type Query{
      name: String,
      age: Int,
      isHuman: Boolean,
      number: Float
    }
  `

const resolvers = {
  Query: {
    name() {
      return 'Vinnicius'
    },
    age() {
      return 23
    },
    isHuman(){
      return true
    },
    number(){
      return 9.43254242
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()