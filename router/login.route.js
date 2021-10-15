const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");

const loginRouter = express.Router();

// Login user
loginRouter.post("/", async (req, res) => {
  try {
    const dataLogin = req.body;
    const result = await Controller.Login.login(dataLogin);
    res.send({ token: result });
  } catch (err) {
    res.status(500).json({
      msg: "email or password wrong",
    });
  }
});

// getuserbyID
loginRouter.get("/userID", async (req, res) => {
  try {
    res.send("token oke");
  } catch (err) {
    res.status(500).json({
      msg: "err",
    });
  }
});

module.exports = loginRouter;
