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

# Don't forget to create a .env file using the .env.example file
```

## Code Structure
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
│   ├── /public
│   │   ├── /css
│   │   └── index.html
│   ├── /routes
│   │   └── users.js
│   │
│   ├── /services
│   │   └── user.service.js  
│   └── app.js
│
├── .env.example
├── .gitignore
├── Procfile
├── README.md
├── package-lock.json
└── package.json
```
## Hosting
The API is hosted on heroku [https://zuri-api.herokuapp.com](https://zuri-api.herokuapp.com)

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

## API Testing with Postman
- Create a user 
    - POST => [https://zuri-api.herokuapp.com/api/v1/user/create](https://zuri-api.herokuapp.com)
    ![create a user image](https://res.cloudinary.com/its-nedum/image/upload/v1620495414/zuri/create_a_user_jkqa3a.png)

- Get a user
    - GET => [https://zuri-api.herokuapp.com/api/v1/user/get/:id](https://zuri-api.herokuapp.com)
    ![get a user image](https://res.cloudinary.com/its-nedum/image/upload/v1620495414/zuri/get_a_user_ix6kd0.png)

- Get all users
    - GET => [https://zuri-api.herokuapp.com/api/v1/user/getAll](https://zuri-api.herokuapp.com/api/v1/user/getAll)
    ![get all users image](https://res.cloudinary.com/its-nedum/image/upload/v1620495459/zuri/get_all_user_ls24v8.png)

- Update a user
    - PUT => [https://zuri-api.herokuapp.com/api/v1/user/update/:id](https://zuri-api.herokuapp.com)
    ![update a user image](https://res.cloudinary.com/its-nedum/image/upload/v1620495414/zuri/update_a_user_g1go2o.png)

- Delete a user
    - DELETE => [https://zuri-api.herokuapp.com/api/v1/user/destroy/:id](https://zuri-api.herokuapp.com)
    ![delete a user image](https://res.cloudinary.com/its-nedum/image/upload/v1620495414/zuri/delete_a_user_lzqp2w.png)