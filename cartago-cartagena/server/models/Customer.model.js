const { Schema, model } = require("mongoose");


const customerSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Password is required."],
    } 
  },
  {
    
    timestamps: true,
  }
);

const Customer = model("Customer", customerSchema);

module.exports = Customer;
