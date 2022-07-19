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
  return isUserinDb;
};

export const verifyUser = async (password, hash) => {
  // console.log(hash);
  let password_comp_result;
  await bcrypt.compare(password, hash, function(err, res){
    if(err){
      throw new Error('bcrypt failed!')
    }
    if(res){
      password_comp_result = {
        success: true,
        message: 'Login successful'
      }
    }
    else {
      password_comp_result = {
        success: false,
        message: 'Passwords not matching.'
      }
    }
  });

  return password_comp_result;
};
