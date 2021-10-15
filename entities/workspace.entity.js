"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workspace = new Schema({
  workspace_name: {
    type: String,
    required: true,
  },
  table_IDs: {
    type: Array,
    // required: true
  },
  users_in_ws: [
    {
      user_ID: { type: String, required: true },
      user_permission: { type: String, required: true },
    },
  ],
});

// users.index({email: 2}, {unique: true})

const Workspace = mongoose.model("Workspace", workspace);

module.exports = Workspace;
