import { connection } from "../models/db.js";

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
      connection.close();
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
