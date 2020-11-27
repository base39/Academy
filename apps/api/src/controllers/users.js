module.exports = app => {
    require('dotenv-safe').config()
    const jwt = require('jsonwebtoken')
    const { models, connectDb } = require('../../config/db')
    const controller = {}
    
    /* Autenticação login */
    controller.login = async (req, res) => {
        connectDb().then(async() => {
            const {email, password} = req.body
            const user = await models.User.findOne({email}).select('+password')
    
            if(!user) {
                return res.status(400).send({error: 'Usuário não encontrado'})
            }
    
            if(password != user.password)
                return res.status(400).send({error: 'Senha inválida'})
    
            if(user) {
                const token = jwt.sign({email}, process.env.SECRET, {
                    expiresIn: 300
                })
                return res.json({auth:true, token: token})
            }
        })
    }
    return controller
}