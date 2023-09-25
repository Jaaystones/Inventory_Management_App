# Inventory Management App

![App Logo](link_to_your_logo.png)

## Description

This README provides an overview of the Inventory App's file structure and the functionalities of each file.

## File Structure

```
- [config/](config)
  - [dbcon.js](dbconjs)
  - [cloudconfig.js](cloudconfigjs)
- [controllers/](controllers)
  - [productsControllers/](productscontrollers)
    - [createProducts.js](createproductsjs)
    - [deleteProducts.js](deleteproductsjs)
    - [getProducts.js](getproductsjs)
    - [updateProducts.js](updateproductsjs)
  - [UsersController/](userscontroller)
    - [getUsers.js](getusersjs)
    - [updateUser.js](updateuserjs)
    - [registerUser.js](registeruserjs)
  - [loggedInStatus.js](loggedinstatusjs)
  - [logInLogOut.js](loginlogoutjs)
  - [passwordController.js](passwordcontrollerjs)
  - [tokenGen.js](tokengenjs)
- [middleware/](middleware)
  - [authMiddleware.js](authmiddlewarejs)
  - [errorMiddleware.js](errormiddlewarejs)  
- [models/](models)
  - [productModel.js](productmodeljs)
  - [tokenModel.js](tokenmodeljs)
  - [userModel.js](usermodeljs)
- [routes/](routes)
  - [productRoutes.js](productroutesjs)
  - [userRoutes.js](userroutesjs)
- [utils/](utils)
  - [emailSender.js](emailsenderjs)
  - [uploads.js](uploadsjs)
- [server.js](serverjs)
- [package.json](packagejson)
- [README.md](readmemd)

```

Folder Structure
# Config/
**dbcon.js**
This file contains the configuration settings for the Mongoose server, which is responsible for connecting to and interacting with the database.

**cloudconfig.js**
Here, you'll find configuration settings for the Cloudinary server. Cloudinary is used for managing and storing image assets related to the inventory.

# Controllers/
This section contains all the controller functions for the application.

## ProductsControllers/
**createProducts.js**
Controller for creating products with photo upload functionality to Cloudinary.

**deleteProducts.js**
Controller for deleting products.

**getProducts.js**
Controller for retrieving all products and individual products attached to a specific user.

**updateProducts.js**
Controller for updating products.

## UsersController/
**getUsers.js**
Controller for retrieving user information from the database.

**registerUser.js**
Controller for registering a new user.

**updateUser.js**
Controller for updating user information.

**logInLogOut.js**
Controller for logging in and logging out a user.

**loggedInStatus.js**
Controller for displaying the login status of a user.

**passwordController.js**
Controller for resetting and updating user password credentials.

**tokenGen.js**
Controller for generating a unique token for each user.

# Middleware/
This section contains the middleware functions for creating and authenticating users and products.

**authMiddleware.js**
Middleware for creating and authenticating users.

**errorMiddleware.js**
Middleware for error handling.

# Models/
This section contains the schema for creating users, products, and tokens.

**productModel.js**
Schema for creating a new product.

**tokenModel.js**
Schema for creating a new token.

**userModel.js**
Schema for creating a new user.

# Routes/
This section contains the API routes for the inventory app, defining the HTTP endpoints and associating them with the corresponding controller methods for CRUD operations.

**productRoutes.js**
API routes for products.

**userRoutes.js**
API routes for users.

# Utils/
This section contains utility functions needed to upload photos and send emails.

**emailSender.js**
Functionality for sending emails to users for password reset or contact information.

**uploads.js**
Formatting for uploading photos.

**server.js**
The main application file where the server is initialized and configured. It sets up the Express.js server, connects to the database using Mongoose, and defines middleware and routes.

**package.json**
Lists the project's dependencies and provides scripts for running the application.

# Getting Started
To get started with the Inventory App, follow these steps:
```
[x] Install the required dependencies by running npm install.
[x] Configure the database connection in config/dbcon.js.
[x] Configure the Cloudinary settings in config/cloudconfig.js if you intend to use image uploads. Save the configuration in your .env file.
[x] Start the server by running npm start or nodemon server.js.
[x] Access the application in your web browser by navigating to the appropriate URL (e.g., http://localhost:6000).

```

# Usage
The Inventory App allows you to manage and track inventory items. You can perform operations like adding new items, updating existing ones, viewing the inventory list, and deleting items through the user interface.

Feel free to customize and extend the app to suit your specific inventory management needs.
