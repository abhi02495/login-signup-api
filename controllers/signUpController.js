import express from "express";
import { userSignUp } from "../services/signUpService.js";
import { Validations } from "../common/validations.js";
import { APPLICATION_CONSTANTS } from "../common/constants.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  
  let email = req.body.email;
  let application = req.body.application;
  let password = req.body.password;
  let confirmPassword = req.body.confirmPassword;

  let validation = Validations(email, password);
  if (validation.isEmailPasswordCorrect === false) {
    res.status(400).send({ message: validation.message });
    return;
  }

  let result;
  if (password == confirmPassword) {
    result = await userSignUp(email, application, password);
  } else {
    res
      .status(400)
      .send({ message: APPLICATION_CONSTANTS.PASSWORDS_NOT_MATCHING });
    return;
  }

  res.send(result);
});

export default router;
