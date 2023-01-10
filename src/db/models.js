const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'socialmediadb',
    username: 'socialuser',
    password: 'socialpass',
})

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(100),
    unique: true,
    allowNull: false
}
const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(200),
    allowNull: false
}

const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
})

const Posts = db.define('post', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const Comments = db.define('comment', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT('tiny')
    }
})
//relations between tables
Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)



module.exports = {
    db,
    Users,
    Posts,
    Comments
}