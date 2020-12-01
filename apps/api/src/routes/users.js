module.exports = app => {
	const controller = app.controllers.users;

	app.route('/user/register').post(controller.register);

	app.route('/auth/login').post(controller.login);

	app.route('/auth/forgot-password').post(controller.forgotPassword);

	app.route('/auth/reset-password').post(controller.resetPassword);
};
