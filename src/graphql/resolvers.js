import suppliers from './models/suppliers.js';

export const resolvers = {
  Query: {
    async suppliers(){
      return await suppliers.find();
    }
  },
  Mutation: {
    async newSupplier(_, { input }){
      const item = new suppliers(input);
      await item.save();   
      return item;
    },
    async updateSupplier(_,{ _id, input }){
      return await cars.findByIdAndUpdate(_id,input, {new: true });
    }
  }
}