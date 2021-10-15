const modelWorkspace = require("../models/Workspace");
const errorMessage = require("../config").errorMessage;

const createWorkspace = async (data) => {
  try {
    let result = await modelWorkspace.createWorkspace(data);
    if (!result)
      res
        .status(402)
        .json(
          errorMessage(["something wrong when create workspace in controller"])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in create workspace in controller", err]));
  }
};

const getAllWorkspace = async ({ data }) => {
  try {
    let result = await modelWorkspace.getAllWorkspace({ data });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage(["something wrong when get workspace in controller"])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in get workspace in controller", err]));
  }
};

const getWorkspaceById = async ({ data }) => {
  try {
    let result = await modelWorkspace.getWorkspaceById({ data });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage([
            "something wrong when get workspace by ID in controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in get workspace by ID in controller", err]));
  }
};

module.exports = { createWorkspace, getAllWorkspace, getWorkspaceById };
