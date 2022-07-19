import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const url = `mongodb+srv://${process.env.USERNAME}:${process.env.DB_PASSWORD}@cluster0.iupyy.mongodb.net/loginSignup`;
mongoose.connect(url);
export const User = mongoose.model('User', {
    email: {type: String},
    application: {type: String},
    password: {type: String}
})

export const connection = mongoose.connection;


