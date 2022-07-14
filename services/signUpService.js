import bcrypt from "bcrypt";
import { APPLICATION_CONSTANTS } from "../common/constants.js";
import { addUserToDB, checkUserInDB } from "../repositories/signUpRepository.js";

export const userSignUp = async (email, application, password) => {

  let isUserPresent = await checkUserInDB(email, application);
  if(isUserPresent){
      return {
          email: email,
          application: application,
          isAdded: false,
          message: APPLICATION_CONSTANTS.USER_ALREADY_PRESENT
      }
  }

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  let result = await addUserToDB(email, application, password);

  return result;
};

