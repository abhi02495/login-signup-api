import bcrypt from "bcrypt";
import { checkUserInDB } from "../repositories/repository.js";
import { APPLICATION_CONSTANTS } from "../common/constants.js";
import { json } from "express";

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
