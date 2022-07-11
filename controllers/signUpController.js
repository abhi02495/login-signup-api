import express from "express";
import { userSignUp, isUserPresent } from "../services/signUpService.js";
// import dbConnection from '../models/db.js';

const router = express.Router();

router.post("/signup", async (req, res) => {
  let email = req.body.email;
  let application = req.body.application;
  let password = req.body.password;
  let confirmPassword = req.body.confirmPassword;

  let result;

  if (password == confirmPassword) {
    // use isUserPresent method to check the DB for the user
    // if returned true then
    result = await userSignUp(email, application, password);
  } else {
    res
      .status(400)
      .send({ message: `Passwords doesn't match. Please try again` });
  }

  res.send(result);
});

export default router;
