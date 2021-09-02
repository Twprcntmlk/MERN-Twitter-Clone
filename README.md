# MongoDB Atlas
### Before we start creating our backend, let's setup our database.
### We will be using MongoDB Atlas, which is a free service (at the basic tier) allowing us to host our database online.
### Follow these steps to setup your database:

### Go to the website and create an account
- Click Build a cluster
- Select Amazon Web Services as your cloud provider
- Select the region that geographically closest to you
- Leave everything else as defaults
- Wait for the cluster to be created (7-10 min)
- Click the Connect button on the newly created cluster
- Click Add a different IP address and enter 0.0.0.0/0 to allow connections from any IP
- Next create a new user
- Give them whatever username you like I.E. dev Click the Autogenerate Secure Password button and save the password for later DO NOT COMMIT THE PASSWORD
- Click chose a connection method
- Click Connect Your Application
- Copy and paste the connection string
- replace the <username> with the username we just created
- replace the <password> with the auto-generated password
- now that we have this connection string we want to save it somewhere it won’t be committed

### Basic Setup
run npm init.
choose app.js as your entry point.
npm install express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator
npm install -D nodemon
