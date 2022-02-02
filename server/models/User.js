const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
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
    donations: {
      type: Array,
    },
    image: {
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
