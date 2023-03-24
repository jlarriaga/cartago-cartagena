const { Schema, model } = require("mongoose");


const tripSchema = new Schema(
  {
    checkInDate: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
    },
    checkOutDate: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    numOfTravelers: {
      type: String,
      required: [true, "Password is required."],
    },
    _properties: {
      type: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Property' 
        }]
    },
    _customer:{
        type: Schema.Types.ObjectId,
        ref:"Customer",
    }
  },
  {
   
    timestamps: true,
  }
);

const Trip = model("Trip", tripSchema);

module.exports = Trip;
