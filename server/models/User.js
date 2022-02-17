const { Schema, model } = require("mongoose");
//const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    program_name: {
      type: String,
      required: true,
    },
    program_type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    website: {
      type: String,
      required: true,
    },
    donations: [
      {
        id: { type: String },
        date: { type: Date },
        organizationID: { type: String },
        itemName: { type: String },
        information: { type: String },
        status: { type: String },
        image: { type: String },
      },
    ],

    image: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//export the model
const User = model("User", UserSchema);
module.exports = User;
