# Zuri CRUD API
This is a CRUD rest api application with mongoDB database.

## Install and Use
Start by cloning this repository

```sh
# HTTPS
$ git clone https://github.com/its-nedum/zuri-crud-api.git
```
then

```sh
# cd into project root and install dependencies
$ npm i

# start the api server
$ npm start
```

## Folder Structure
```bash
│
├── /src
│   ├── /controllers
│   │   └── userController.js
│   │
│   ├── /db
│   │   └── connection.js
│   │
│   ├── /models
│   │   └── user.js
│   │
│   ├── /routes
│   │   └── users.js
│   │
│   ├── /services
│   │   └── user.service.js  
│   └── app.js
│
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## API Routes
<table>
	<thead>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/v1/user/create</td>
            <td>Create a new user</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/v1/user/getAll</td>
            <td>Get all users</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/v1/user/get/:id</td>
            <td>Get a single user</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/api/v1/user/update/:id</td>
            <td>Update a user</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/v1/user/destroy/:id</td>
            <td>Delete a user</td>
        </tr>
    </tbody>
</table>

