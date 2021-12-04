# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging



#My README.md file



# Install
To install go to main folder and enter: 
>npm i

# How to run in development mode

To start the program in development mode: 
>npm run start

The PORT is configured in the `.env` file


# How to test
To start the test first start the program in any mode. Then run: 
>npm run test

##### It is important to restart a server if it was already working and had some records.


# Usage examples

#### User (/users route)  
GET /users - get all users (remove password from response)  
GET /users/:userId - get the user by id (ex. “/users/123”) (remove password from response)  
POST /users - create user  
PUT /users/:userId - update user  
DELETE /users/:userId - delete user  

#### Board (/boards route)  
GET /boards - get all boards  
GET /boards/:boardId - get the board by id  
POST /boards - create board  
PUT /boards/:boardId - update board  
DELETE /boards/:boardId - delete board  

#### Task (boards/:boardId/tasks route)  
GET boards/:boardId/tasks - get all tasks  
GET boards/:boardId/tasks/:taskId - get the task by id  
POST boards/:boardId/tasks - create task    
PUT boards/:boardId/tasks/:taskId - update task  
DELETE boards/:boardId/tasks/:taskId - delete task  
