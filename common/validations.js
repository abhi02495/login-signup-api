import {APPLICATION_CONSTANTS} from './constants.js';

const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

export const Validations = (email, password) => {
    
    if(!email.match(emailPattern)){
        return {
            isEmailPasswordCorrect: false,
            message: APPLICATION_CONSTANTS.EMAIL_PATTERN_NOT_CORRECT
        }
    }

    if(!password.match(passwordPattern)){
        return {
            isEmailPasswordCorrect: false,
            message: APPLICATION_CONSTANTS.PASSWORD_PATTERN_NOT_CORRECT
        }
    }

    return {
        isEmailPasswordCorrect: true,
        message: APPLICATION_CONSTANTS.EMAIL_PASSWORD_VALIDATED
    }
}