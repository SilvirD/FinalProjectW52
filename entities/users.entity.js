"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  table_IDs: {
    type: Array,
  },
  workspace_IDs: {
    type: Array,
  },
});

// users.index({email: 2}, {unique: true})

const Users = mongoose.model("Users", users);

module.exports = Users;
