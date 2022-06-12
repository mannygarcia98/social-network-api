const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: "You need to provide a username.",
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: "You need to privde an email address.",
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
  },
  // thoughts: {
  //   _id: [],
  // },
  // friends: {
  //   _id: [],
  // },
});

const User = model("User", UserSchema);

module.exports = User;
