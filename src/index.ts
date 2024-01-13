import { gql, ApolloServer } from 'apollo-server'
import { db } from './db'


const typeDefs = gql`
  type User{
    id: Int,
    name: String
  }

  type Products{
    id: Int,
    name: String
  }

  type Query {
    users: [User],
    user(id: Int): User,
    products: [Products],
    product: Products,

  }
`

const resolvers = {
  User:{
    name(obj: {id: number, firstName: string}){
      return obj.firstName
    }
  },

  Query: {
    user(_: any, args: {id: number}){
      return db.users.find(user => user.id === args.id)
    },
    users(){
      return db.users
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => console.log(url))