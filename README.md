# Inventory_Management_App
This is an inventory app

Description
This README provides an overview of the Inventory App's file structure and the functionalities of each file.

```
- config/
  - dbcon.js
  - cloudconfig.js
- controllers/
  - productsControllers/
    - createProducts.js
    - deleteProducts.js
    - getProducts.js
    - updateProducts.js
  - UsersController/
    - getUsers.js
    - updateUser.js
    - registerUser.js
  - loggedInStatus.js
  - logInLogOut.js
  - passwordController.js
  - tokenGen.js
- middleware/
  - authMiddleware.js
  - errorMiddleware.js  
- models/
  - productModel.js
  - tokenModel.js
  - userModel.js
- routes/
  - productRoutes.js
  - userRoutes.js
- utils/
  - emailSender.js
  - uploads.js
- server.js
- package.json
- README.md

```

## config/
`Dbconn.js`: This file contains the configuration settings for the Mongoose server, which is responsible for connecting to and interacting with the database.

`cloudConfig.js`: Here, you'll find configuration settings for the Cloudinary server. Cloudinary is used for managing and storing image assets related to the inventory.

## Controllers/
This section contains all the controller functions for the application

# productsContollers/
`createProduct.js`: Here, you'll find the controller for creating products with photo update functionality into the cloudunary server.
`deleteProduct.js`: Here, you'll find the controller for deleting products.
`getProduct.js`: Here, you'll find the controller for get all products and individual product attached to a specific user.
`updateProduct.js`: Here, you'll find the controller for updating products.

# UserController/
`getUser.js`: Here, you'll find the controller for getting the user information in the database.
`registerUser.js`: Here, you'll find the controller for registering a new user.
`updateUser.js`: Here, you'll find the controller for updating user information.

`logInLogOutUser.js`: Here, you'll find the controller for logging in and logging out a user.
`loggedInStatus.js`: Here, you'll find the controller for showing the log-in status of a user.
`passwordControllers.js`: Here, you'll find the controller for reseting and updating users password credentials.
`tokenGen.js`: Here, you'll find the controller for generating a unique token for each user.

## Middleware/
This section contains the middleware functions for creation, authentication of users and products.

`authMiddleware.js`: Here, you'll find the middleware for creating and authenticating users
`errorMiddleware.js`: Here, you will find the middleware for error handling.

## Models
This section contains the schema for creating users, products and tokens.

`productModel.js`: Here, you'll find the schema for creating a new product.
`tokenModel.js`: Here, you'll find the schema for creating a new token.
`userModel.js`: Here, you'll find the schema for creating a new user.

## Routes
This section contains the API routes for the inventory app. It defines the HTTP endpoints and associates them with the corresponding controller methods for CRUD (Create, Read, Update, Delete) operations.
`productRoutes.js`: This file contains the API routes for products in the inventory app.
`userRoutes.js`: This file contains the API routes for users.

## Uploads
This section contains a copy of photos uploaded to the cloud.

## Utils
This section contsains the utility functions needed to upload photos and send emails.
`emailSender.js`: This file contains the email sending functionality for sending emails to users either for password reset or contact information.
`uploads.js`: This file contains the formatting for uploading photos.

# Server.js
`Server.js`: The main application file where the server is initialized and configured. It sets up the Express.js server, connects to the database using Mongoose, and defines middleware and routes.

## Package.json
`package.json`: This file lists the project's dependencies and provides scripts for running the application.


## Getting Started
* To get started with the Inventory App, follow these steps:

* Install the required dependencies by running npm install.

* Configure the database connection in config/dbcon.js.

* Configure the Cloudinary settings in config/cloudconfig.js if you intend to use image uploads. Save the configuration in your .env file.

* Start the server by running npm start or nodemon server.js

Access the application in your web browser by navigating to the appropriate URL (e.g., http://localhost:6000).

## Usage
The Inventory App allows you to manage and track inventory items. You can perform operations like adding new items, updating existing ones, viewing the inventory list, and deleting items through the user interface.

Feel free to customize and extend the app to suit your specific inventory management needs.