const {Posts, Users} = require('../db/models')


async function createNewPost(userId, title, body){
    const post = await Posts.create({
        title:title,
        body:body,
        id:userId,
    })
    return post
}

// expected to be called like showAllPosts({username:""})
// expected to be called like showAllPosts({title:""})
async function findAllPosts(query){
    // TODO : handle query params
    const posts = await Posts.findAll({include:[{model:Users}]} )//because of relationship defined in models between POsts and USers
    
    return posts
}
module.exports = {
    createNewPost,
    findAllPosts,
}
/* test code
async function task(){
    console.log(await createNewPost(1,"this is a sample post","this is some sample text"))
}
task()*/
