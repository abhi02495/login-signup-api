import bcrypt from 'bcrypt';
import {connection} from '../models/db.js';

let db = connection.collection('users');

export const userSignUp =  async(email, application, password) => {

    //let isUserPresent = isUserPresent(email, application);

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    // Add the user to the DB
    
    // call the repository to add the user in DB
    
    
    let newUser = {
        email,
        application,
        password
    }

    
    db.insertOne(newUser, function(err, res){
        if(err) throw err;
        console.log("inserted!");
        connection.close();
    })

    
    return newUser;

}

export const isUserPresent = (email, application) => {

    // using email and application check whether is already present in the system or not
    // if present and application matches then return false
    
    // if present and application doesn't match then return true which means Add the user
    // if not present then return true which means Add the user

    return null;
}