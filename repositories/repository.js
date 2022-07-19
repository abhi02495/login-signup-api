import { connection, User } from "../models/db.js";
import dotenv from 'dotenv';
dotenv.config();

let collection = connection.collection(`${process.env.COLLECTION}`);

export const addUserToDB = async (email, application, hashedPassword) => {
  let newUser = {
    email,
    application,
    password: hashedPassword,
  };

  try {
    collection.insertOne(newUser, function (err, res) {
      if (err) throw new Error("User not added!");
    });

    return {
      email,
      application,
      isAdded: true,
    };
  } catch (err) {
    return {
      email,
      application,
      isAdded: false,
      message: err.message,
    };
  }
};

export const checkUserInDB = async (email, application) => {
  
  const result = await User.find({email: email});
  let user_res;
  result.map((item) => {
    if(item.application == application ){
      user_res = item;
    }
  })

  if(user_res != null){
    return user_res
  }
  else {
    return false;
  }
};
