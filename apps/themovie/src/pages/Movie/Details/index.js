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
	const API_URL = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const fetchData = async () => {
			await fetch(`${API_URL}/movies/credits/${id}?language=pt-BR`)
				.then(res => res.json())
				.then(result => {
					setMovieCast(result.cast);
					setMovieCrew(result.crew);
				});
		};
		fetchData();
	}, [id, API_URL]);

	useEffect(() => {
		const fetchMovie = async () => {
			await fetch(`${API_URL}/movies/${id}?language=pt-BR`)
				.then(res => res.json())
				.then(result => {
					setMovie(result);
				});
		};
		fetchMovie();
	}, [id, API_URL]);

	useEffect(() => {
		const fetchRecommendation = async () => {
			await fetch(`${API_URL}/movies/recommendation/${id}?language=pt-BR`)
				.then(res => res.json())
				.then(result => {
					setRecommendation(result);
				});
		};
		fetchRecommendation();
	}, [id, API_URL]);

	return (
		<>
			<MovieHeader movie={movie} crew={movieCrew} />
			<MovieCast cast={movieCast} />
			<MovieRecomendation movie={movie} recommendation={recommendation} />
		</>
	);
};

export default Details;
