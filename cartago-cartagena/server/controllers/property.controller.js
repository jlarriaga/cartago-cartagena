const mongoose = require("mongoose");
const Property = require("../models/Property.model");

exports.getAllPropertiesCtrl = async (req, res, next) => {
  try {
    const propertiesList = await Property.find();
    res.status(200).json(propertiesList);
  } catch (error) {
    res.status(400).json({ message: "Error finding all Properties" });
  }
};

exports.createPropertiesCtrl = async (req, res, next) => {
  try {
    const {
      title,
      moreInfo,
      location,
      pricePerNight,
      maxGuests,
      cleaningFee,
      chekinTime,
      checkOutTime,
      availableDates,
      amenities,
      terms,
    } = req.body;

    const propertyCreated = await Property.create({
      title,
      moreInfo,
      location,
      pricePerNight,
      maxGuests,
      cleaningFee,
      chekinTime,
      checkOutTime,
      availableDates,
      amenities,
      terms,
    })
    res.status(201).json({ message: "Property created successfully" , property: propertyCreated });
  } catch (error) {
    res.status(400).json({ message: "Error creating the Property" });
  }
};
