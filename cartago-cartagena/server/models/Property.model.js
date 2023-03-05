const { Schema, model } = require("mongoose");

const propertySchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    moreInfo :{
        type:String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    pricePerNight: {
        type: Number,
        required: true
    },
    maxGuests: {
        type: Number,
        required: true,
    },
    cleaningFee: {
        type:Number,
        required: true,
    },
    chekinTime:{
        type:String
    },
    checkOuutTime:{
        type:String
    },
    availableDates:{
        type:[Date],
        required: true,
    },
    amenities:{
        type:[String],
        required:true
    },
    terms:{
        type:String
    },

  },

  {
    timestamps: true,
  }
);

const Property = model("Property", propertySchema);

module.exports = Property;
