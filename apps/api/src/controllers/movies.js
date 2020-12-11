module.exports = () => {
	require('dotenv-safe').config();
	const axios = require('axios').default;
	const controller = {};
	const { i18n } = require('../i18n');
	const { API_KEY } = process.env;

	controller.listMovies = async (req, res) => {
		const params = req.query;

		try {
			await axios
				.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, {
					params
				})
				.then(response => res.send(response.data));
		} catch (error) {
			// console.log(error.message);
			return res.send({ 'error': i18n.__('listMoviesNotFound') });
		}
	};

	controller.getMovie = async (req, res) => {
		const { id } = req.params;
		const params = req.query;

		try {
			await axios
				.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`, {
					params
				})
				.then(response => res.send(response.data));
		} catch (error) {
			// console.log(error.message);
			return res.send({ 'error': i18n.__('movieNotFound') });
		}
	};

	controller.getGenresList = async (req, res) => {
		const params = req.query;

		try {
			await axios
				.get(
					`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`,
					{
						params
					}
				)
				.then(response => res.send(response.data));
		} catch (error) {
			return res.send({ 'error': i18n.__('genreNotFound') });
		}
	};

	controller.getAllMovies = async (req, res) => {
		const { sort, page } = req.params;
		const params = req.query;

		try {
			await axios
				.get(
					`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=${sort}&include_adult=false&include_video=false&page=1&page=${page}`,
					{
						params
					}
				)
				.then(response => res.send(response.data));
		} catch (error) {
			return res.send({ 'error': i18n.__('invalidSort') });
		}
	};

	controller.getSort = async (req, res) => {
		const { sort, genreId, page } = req.params;
		const params = req.query;

		try {
			await axios
				.get(
					`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=${sort}&include_adult=false&include_video=false&page=1&with_genres=${genreId}&page=${page}`,
					{
						params
					}
				)
				.then(response => res.send(response.data));
		} catch (error) {
			return res.send({ 'error': i18n.__('invalidSort') });
		}
	};

	return controller;
};
