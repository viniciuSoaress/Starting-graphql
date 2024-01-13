import { db } from "../../../db";


export const productResolvers = {
  Query: {
    product(obj: undefined, args: {id: number}){
      return db.products.find(p => p.id === args.id)
    },
    products(){
      return db.products
    }
  }
}