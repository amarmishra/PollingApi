# PollingApi

# Setting up the project:

----------------------------------- SOFTWARE REQUIREMETS--------------------------------

# 1. Install NODE js( js environment server ) LTS. (latest version). This includes NPM- Node Packet Manager. 
# 2. Install MonogDb LTS (latest version) and start MongoDb service.
# 3. Install Git .

# 4. Pull this repository from git.

# 5. Run "npm init" command in the root folder of the project. This will load following dependencies:

     "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^7.0.1",
    "nodemon": "^2.0.21"

# 6. Add .env file in the root folder and add following variables:

    EXPRESS_SERVER_PORT_NO= Port to run express server 
    MONGODB_SERVER_URL= Connection string to link mongoDb database
    EXPRESS_SERVER_URL= Origin Url of Machine running Express server(eg: http://localhost:8000)
