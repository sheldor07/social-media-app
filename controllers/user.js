const { getAnonUsername } = require('../utils/username.js')
const {Users} = require('../db/models.js')
const username = require('../utils/username.js')

async function createAnonUser(){
    const user = await Users.create({
        username:getAnonUsername(),
    })
    return user
}

module.exports = {
    createAnonUser
}
/*async function task(){
   console.log(await createAnonUser())
   console.log('--------------------')
}
task()*/