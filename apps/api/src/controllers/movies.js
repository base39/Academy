module.exports = () => {
	require('dotenv-safe').config();
	const axios = require('axios').default;
	controller = {};

	controller.listMovies = async (req, res) => {
		const params = req.query;

		try {
			await axios
				.get(
					`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`,
					{
						params
					}
				)
				.then(response => {
					return res.send(response.data);
				});
		} catch (error) {
			return res.send(error.message);
		}
	};

	controller.getMovie = async (req, res) => {
		const { id } = req.params;
		const params = req.query;

		try {
			await axios
				.get(
					`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`,
					{
						params
					}
				)
				.then(response => {
					return res.send(response.data);
				});
		} catch (error) {
			return res.send(error.message);
		}
	};

	return controller;
};
