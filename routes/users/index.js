const {
    Router
} = require('express')

const {
    createAnonUser,
    getUserbyId,
    getUserbyUsername
} = require('../../controllers/user')

const route = Router()
route.get('/:id', async (req, res) => {
    let user;
    console.log(req.params.id)
    if (isNaN(parseInt(req.params.id))) {
        user = await getUserbyUsername(req.params.id)
    } else {
        user = await getUserbyId(req.params.id)
    }
    console.log(user)
    if (user) {
        res.status(200).send(user)
    } else {
        res.status(404).send({
            error: "user not found"
        })
    }

})
route.post('/', async (req, res) => {
    const user = await createAnonUser()
    res.status(201).send(user)
  })

module.exports = {
    usersRoute: route
}