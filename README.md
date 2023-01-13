# scribble: the social-media-app
## Database Creation
mySQL commands to create user and database
```
create database socialmediadb;
create user socialuser identified by 'socialpass';
grant all privileges on socialmediadb.* to socialuser;
flush privileges;

```

## Project Structure
```shell
src
|----db             #db connections and model definitions
|----utils          #util functions 
|----public         #html css and js files for static portions of site
|----controllers    #functions to connect routes to db definitions
|----routers
```
## Business Logic

### Users

1. **create users**
    This will create users with a random username
<img width="1680" alt="Screenshot 2023-01-13 at 4 49 37 PM" src="https://user-images.githubusercontent.com/50955708/212278816-ff890e36-ea24-4745-9362-41adee215843.png">

### Posts
1. **create post**
    This will create posts with required fields are
    -title
    -username
    -body
    <img width="1680" alt="Screenshot 2023-01-13 at 4 49 44 PM" src="https://user-images.githubusercontent.com/50955708/212279510-19f75e37-fa02-46a9-80e2-fed2fa7782da.png">
    <img width="1680" alt="Screenshot 2023-01-13 at 4 50 21 PM" src="https://user-images.githubusercontent.com/50955708/212279503-26d0c864-1f0c-4146-9ccd-0d641bfa7f96.png">
     <img width="1680" alt="Screenshot 2023-01-13 at 4 50 28 PM" src="https://user-images.githubusercontent.com/50955708/212279482-3529ad44-daf6-422a-85d3-85520758becd.png">


2. **show all posts**
    Lists all existing posts, we should have filtering support
    -filter by user
    -filter by query contained in title(search by title)
    <img width="1680" alt="Screenshot 2023-01-13 at 4 49 08 PM" src="https://user-images.githubusercontent.com/50955708/212279317-d884ea9a-58cd-4b4b-b135-744c4b85b081.png">
    
3. **edit posts** `TBD`
3. **delete posts** `TBD`

### Comments
1. **show all comments(of a user)**
2. **show all comments(under a post)**
3. **add a comment**

### Front-end (Client-Side Code)
```shell
├── app         # front-end code we're writing
│   └── socialmedia-common.js
├── components   # our html snippets
│   └── navbar.html
├── css             # css libraries we're using
│   └── bootstrap.css
├── fonts           # fonts we're using
│   ├── Muli-Italic.woff2
│   ├── Muli.woff2
│   └── muli.css
├── index.html       # first/home page
└── js               # js libaries we're using   
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js
```
## API Documentation
 ### `users`
 1. `POST /users`
 Creates a new user with a random username and id
 2. `Get /users/{userid}`
 Gets a user with a given id
 3. `Get /users/{username}`
 Gets a user with a given username

### `posts`
 1. `GET /posts`
 Gets all posts by ever user
 2. `POST /posts`
 Creates a new post with a body. Required fields in body -
 ```
 userId = 
 title =
 body = 
 ```
 

 

