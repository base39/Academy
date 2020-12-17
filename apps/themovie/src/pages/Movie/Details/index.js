import React, { useState, useEffect } from 'react';
import MovieHeader from '../../../components/MovieHeader';
import MovieCast from '../../../components/MovieCast';
import { useParams } from 'react-router-dom';
import MovieRecomendation from '../../../components/MovieRecommendation';

const Details = () => {
	const { id } = useParams();
	const [movieCast, setMovieCast] = useState([{}]);
	const [movieCrew, setMovieCrew] = useState([{}]);
	const [recommendation, setRecommendation] = useState([]);
	const [movie, setMovie] = useState([]);
	const [loading, setLoading] = useState(true);
	const API_URL = process.env.REACT_APP_API_URL;

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			await fetch(`${API_URL}/movies/credits/${id}?language=pt-BR`)
				.then(res => res.json())
				.then(result => {
					setMovieCast(result.cast);
					setMovieCrew(result.crew);
				});

			await fetch(`${API_URL}/movies/${id}?language=pt-BR`)
				.then(res => res.json())
				.then(result => {
					setMovie(result);
				});

			await fetch(`${API_URL}/movies/recommendation/${id}?language=pt-BR`)
				.then(res => res.json())
				.then(result => {
					setRecommendation(result);
				});

			setLoading(false);
		};

		fetchData();
	}, [id, API_URL]);

	return (
		<>
			<MovieHeader movie={movie} crew={movieCrew} />
			<MovieCast cast={movieCast} loading={loading} />
			<MovieRecomendation movie={movie} recommendation={recommendation} />
		</>
	);
};

export default Details;
