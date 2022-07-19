import express from "express";
import { verifyUser, checkUser } from "../services/loginService.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  let email = req.body.email;
  let application = req.body.application;
  let password = req.body.password;

  const user = await checkUser(email, application);
  let result;
  if (user) {
    result = await verifyUser(password, user.password);
    console.log(result);
  } else {
    result = {
      message: "No user found",
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
