module.exports = app => {
    const controller = app.controllers.users

    app.route('/auth/login')
        .post(controller.login)
}