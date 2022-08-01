import express from "express";
import { verifyUser, checkUser } from "../services/loginService.js";
import { APPLICATION_CONSTANTS } from "../common/constants.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  let email = req.body.email;
  let application = req.body.application;
  let password = req.body.password;

  const user = await checkUser(email, application);
  let result;
  if (user) {
    result = await verifyUser(password, user.password);
  } else {
    result = {
      message: APPLICATION_CONSTANTS.NO_USER_FOUND,
    };
    res.status(400).send(result);
    return;
  }

  res.status(200).send({
    email: email,
    authenticated: result,
  });
});

export default router;
