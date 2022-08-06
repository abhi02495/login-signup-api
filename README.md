# login-signup-api
This API is created to store the user's signup details and also to authenticate user when they try to login.

The API URIs are - 

POST /api/v1/login - 
  Request Body - 
  {
    "email" : "abc@example.com",
    "application": "xyz",
    "password" : "mypass123@"
  }
  
  Response Body - 
  {
    "email": "abc@example.com",
    "authenticated": {
        "success": false,
        "message": "Password is incorrect"
    }
}
 
POST /api/v1/signup - 
  Request Body - 
  {
    "email" : "abc@example.com",
    "application": "xyz",
    "password" : "mypass123@",
    "confirmPassword" : "mypass123@"
  }
  Response Body - 
  {
    "email" : "abc@example.com",
    "application": "xyz",
    "isAdded" : true/false
  }
  
SIGNUP - 
1. check user whether they are present or not in the DB along with the application they are trying to signup with
2. if user is present but application is different then enter signup, if not return user already signed up
3. Send JWT after the signup is successful

LOGIN - 
1. Take in the user's mail, application from where they are logging in and the password
2. Use bcrypt to check the password stored in the DB
3. If successful then send the corresponding JWT in the response for further use.

ToDo -
Create database for application details.
If not available then insert new app using guid
