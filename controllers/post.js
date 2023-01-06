const {Posts} = require('../db/models.js')
const {Users} = require('../db/models.js')


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
async function showAllPosts(query){
    // TODO : handle query params
    const posts = await Posts.findAll({include:[Users]} )//because of relationship defined in models between POsts and USers
    
    return posts
}
/* test code
async function task(){
    console.log(await createNewPost(1,"this is a sample post","this is some sample text"))
}
task()*/
/*async function task(){
    const posts = await showAllPosts()
    for (post of posts)
    {
        console.log(`author:${post.user.username}`,'\n',post.title,'\n', post.body,'\n','------------------')
    }
    
}
task()*/
