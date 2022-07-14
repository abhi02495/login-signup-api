# login-signup-api
This API is created to store the user's signup details and also to authenticate user when they try to login.

The API URIs are - 

POST /api/v1/login - 
  Request Body - 
  {
    "email" : "abc@example.com",
    "application": "xyz",
    "password" : "mypass"
  }
  
  Response Body - 
  {
    "email" : "abc@example.com",
    "application": "xyz",
    "isAuthenticated" : true/false
  }
 
POST /api/v1/signup - 
  Request Body - 
  {
    "email" : "abc@example.com",
    "application": "xyz",
    "password" : "mypass",
    "confirmPassword" : "mypass"
  }
  Response Body - 
  {
    "email" : "abc@example.com",
    "application": "xyz",
    "isAdded" : true/false
  }
  
SIGNUP - 
1. check user whether they are present or not in the DB along with the application they are trying to signuo with
2. if user is present but application is different then enter signup, if not return user already signed up
