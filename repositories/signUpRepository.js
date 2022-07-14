import { connection, User } from "../models/db.js";

let collection = connection.collection("users");

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
  let count=0;
  result.map((item) => {
    console.log(item);
    if(item.application == application ){
      count++;
    }
  })

  if(count> 0){ 
    return true;
  }
  else {
    return false;
  }
};
