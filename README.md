# social-media-app
## Database Creation
mySQL commands to create user and database
```
create database socialmediadb;
create user socialuser identified by 'cbsocialpass';
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

### Posts
1. **create post**
    This will create posts with required fields are
    -title
    -username 
    -body
2. **show all posts**
    Lists all existing posts, we should have filtering support
    -filter by user
    -filter by query contained in title(search by title)
3. **edit posts** `TBD`
3. **delete posts** `TBD`

### Comments
1. **show all comments(of a user)**
2. **show all comments(under a post)**
3. **add a comment**


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
 

 

