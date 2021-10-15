const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");

const workspaceRouter = express.Router();

// create new user
workspaceRouter.post("/addWorkspace", async (req, res) => {
  try {
    const newWorkspace = req.body;
    newWorkspace.workspace_ID = uuidv4();
    const result = await Controller.Workspace.createWorkspace(newWorkspace);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});

workspaceRouter.get("/home", async (req, res, { name }) => {
  try {
    const result = await Controller.Workspace.getAllWorkspace({ name });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "something wrong in router get workspace",
    });
  }
});

// get user By id
workspaceRouter.get("/home/:workspaceID", async (req, res) => {
  const { workspaceID } = req.params;
  const { status, data } = await Controller.Workspace.getWorkspaceById({
    workspaceID,
  });
  res.status(status).json(data);
});

module.exports = workspaceRouter;
