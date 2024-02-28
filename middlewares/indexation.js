//Middleware are functions that have access to the request object (req), the response object (res)
// => Middlewares are just like a chain composed of a lot of middlewares from ne request of user , each one bring to another
//after the validation true or false using the next() function that points to the next middleware role in the pipline to the server
//After processing from the server gives back the response
 /*=> These functions are uesed to modify req and res objects 
 before they are passed to the next() Middleware function
 */
//==== USES OF Middleware :===
/*
 * 1- Authorization : used after authontication of user to make an action
2- Logging : like the use of morgan (verify if user is logged in)
3- Error handling
4-Rate Limiting (request limits)
5-Data validation
6-Any Business Logic

=> USER <-----------> SERVER
=> next() is a function that allows a Middleware to move to another middleware in the Pipeline after process of action
 */