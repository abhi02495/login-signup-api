import bcrypt from "bcrypt";
import { checkUserInDB } from "../repositories/repository.js";
import { APPLICATION_CONSTANTS } from "../common/constants.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const checkUser = async (email, application) => {
  const isUserinDb = await checkUserInDB(email, application);
  return isUserinDb;
};

export const verifyUser = async (password, hash) => {
  const data = await bcrypt.compare(password, hash);
  if(!data){
    return {
      success: false,
      message: APPLICATION_CONSTANTS.PASSWORD_INCORRECT
    }
  }
  else {
    return {
      success: true,
      message: APPLICATION_CONSTANTS.PASSWORD_MATCHES
    }
  }
};

export const generateJwtToken = async (userData) => {
  let data = {
    email: userData.email,
    application: userData.application
  }
  let jwtSecretKey = process.env.JWT_SECRET_KEY
  const token = jwt.sign(data, jwtSecretKey);
  return token;
}
