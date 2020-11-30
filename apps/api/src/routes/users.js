module.exports = app => {
	const controller = app.controllers.users;

	app.route('/user/register').post(controller.register);

	app.route('/auth/login').post(controller.login);
};
