const { getAnonUsername } = require('../utils/username.js')
const {Users} = require('../db/models.js')
const username = require('../utils/username.js')

async function createAnonUser(){
    const user = await Users.create({
        username:getAnonUsername(),
    })
    return user
}

async function getUserbyId(id){
    return await Users.findOne({where:{id}})
}   
async function getUserbyUsername(username){
    return await Users.findOne({where:{username}})
}   

module.exports = {
    createAnonUser,
    getUserbyId,
    getUserbyUsername
}
/*async function task(){
   console.log(await createAnonUser())
   console.log('--------------------')
}
task()*/