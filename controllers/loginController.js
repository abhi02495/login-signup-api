import express from "express";
import { verifyUser, checkUser } from "../services/loginService.js";

const router = express.Router();


router.post("/login", async (req, res) => {

    let email = req.body.email;
    let application = req.body.application;
    let password = req.body.password;

    // here the details will be passed to service where the info will be checked
    // will receive response whether user is valid or not

    const user = await checkUser(email, application);
    console.log(user);
    let result;
    if(user){
        result = verifyUser(password, user['password'].toString());
    }
    else {
        result = false;
    }


    // const salt = await bcrypt.genSalt(10);
    // password = await bcrypt.hash(password, salt)

    // const result = await bcrypt.compare(password, user.password);

    res.send({
        email: email,
        authenticated: result,
    })
})

export default router;