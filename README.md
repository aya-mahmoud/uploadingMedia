# UploadingMedia
uploading Media project is a platform designed for media sharing, consisting of a backend
server and a (Cross-platform) mobile application along with a
web application. The platform enables users to upload images or videos, view a list of
uploaded media, and interact with them by liking or unliking.


## Features
##### Media Upload: 
  Users can upload images or videos from their devices to share with others.
##### Media Viewing:
  All uploaded media are displayed in a list, allowing users to view and interact with them.
##### Interaction:
  Users can like or unlike media items, providing feedback on the content.
##### CRUD Operations:
  The backend server supports Create, Read, Update, and Delete operations to manage media items.


## Technologies
----------------------------------------     Backend Server   -----------------------------------------------------
technology -->  Node.js  
used packages -->  multer, express, mongoose, cors, axios

-----------------------------------------     Database    -------------------------------------------------------
technology -->  MongoDB  

-----------------------------------------   Mobile Applications   -------------------------------------------------
technologies -->  React Native 
used packages --> axios, expo, expo-image-picker, expo-av
front-end libraries --> React Native Paper

-----------------------------------------    Website   ------------------------------------------------
technologies -->  React Native 
used packages --> axios 
front-end libraries --> MUI material-ui

## Database 
images are stored in images folder while videos are stored in videos folder on the server.
Each uploaded media file  is assigned a unique filename along with other relevant data and stored to the database.

#### Database Schema:
The database schema includes the following fields for each media file:

###### media:
 unique filename assigned to the media file.
###### Like Flag:
 Indicates whether users have liked or unliked the post.
###### MediaType:
 Specifies whether the media file is a video or an image.

## Getting Started
To run the project locally, follow these steps:

### Clone the Repository:
Clone the project repository to your local machine.
#### Backend Setup:
Navigate to the backend server directory and install dependencies using "npm install". Start the server using "npm start".
Note: This command will launch the server and monitor for any changes to the code.
Whenever changes are detected, "nodemon" will automatically restart the server, ensuring that the latest code modifications
take effect without manual intervention.
#### Mobile App Setup:
Navigate to the mobile application directory and install dependencies using npm install. Start the app using "npx expo start".
Note: After starting the app, a QR code will be displayed in the terminal or command prompt.
To run the app on your mobile device:
For "Android users": Open the Expo Go app and scan the QR code.
For "iOS users": Use the Camera app to scan the QR code. This will prompt you to open the project in the Expo Go app.
#### Website Setup:
Navigate to the website directory and install dependencies using "npm install". Start the website using "npm start"
