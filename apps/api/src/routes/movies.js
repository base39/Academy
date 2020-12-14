module.exports = app => {
	const controller = app.controllers.movies;

	app.route('/movies').get(controller.listMovies);

	app.route('/movies/:id').get(controller.getMovie);

	app.route('/movies/credits/:id').get(controller.getCredits);

	app.route('/genres').get(controller.getGenresList);
};
