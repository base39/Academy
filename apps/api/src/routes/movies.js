module.exports = app => {
	const controller = app.controllers.movies;

	app.route('/movies').get(controller.listMovies);

	app.route('/movies/:id').get(controller.getMovie);

	app.route('/genres').get(controller.getGenresList);

	app.route('/sort/:sort/:genreId').get(controller.getSort);
};
