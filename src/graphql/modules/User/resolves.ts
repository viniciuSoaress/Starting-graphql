import { db } from "../../../db";

export const userResolvers = {
  Query: {
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
}