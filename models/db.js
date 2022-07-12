import mongoose from 'mongoose';
const userName = "abhishek";
const password = "abhishek2495";

const url = `mongodb+srv://${userName}:${password}@cluster0.iupyy.mongodb.net/loginSignup`;
mongoose.connect(url);
export const User = mongoose.model('User', {
    email: {type: String},
    application: {type: String}
})

export const connection = mongoose.connection;


