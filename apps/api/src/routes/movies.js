module.exports = app => {
	const controller = app.controllers.movies;

	app.route('/movies').get(controller.listMovies);

	app.route('/movies/:id').get(controller.getMovie);
};
