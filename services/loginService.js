import bcrypt from "bcrypt";
import { checkUserInDB } from "../repositories/repository.js";

export const checkUser = async (email, application) => {
  // let user = {
  //   email: "absh@gmail.com",
  //   application: "invito",
  //   authenticated: true,
  //   password: "$2b$10$2orr0af4siSIEoptrZevvOkZA5ciKzw3h7ThfQHsKuiRyTPLySSm.",
  // };

  const isUserinDb = await checkUserInDB(email, application);
  console.log(isUserinDb);
  return isUserinDb;
};

export const verifyUser = (password, hash) => {
  console.log(hash);
  const result = bcrypt.compare(password, hash);
  return result;
};
