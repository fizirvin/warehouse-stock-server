import {Schema, model } from 'mongoose';

const supplierSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  business_name:{
    type: String,
    required: true
  }
});

export default model('suppliers', supplierSchema);