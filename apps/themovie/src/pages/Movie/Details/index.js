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

	useEffect(() => {
		const fetchData = async () => {
			await fetch(`http://localhost:8080/movies/credits/${id}?language=pt-BR`)
				.then(res => res.json())
				.then(result => {
					setMovieCast(result.cast);
					setMovieCrew(result.crew);
				});
		};
		fetchData();
	}, [id]);

	useEffect(() => {
		const fetchMovie = async () => {
			await fetch(`http://localhost:8080/movies/${id}?language=pt-BR`)
				.then(res => res.json())
				.then(result => {
					setMovie(result);
				});
		};
		fetchMovie();
	}, [id]);

	useEffect(() => {
		const fetchRecommendation = async () => {
			await fetch(
				`http://localhost:8080/movies/recommendation/${id}?language=pt-BR`
			)
				.then(res => res.json())
				.then(result => {
					setRecommendation(result);
				});
		};
		fetchRecommendation();
	}, [id]);

	return (
		<>
			<MovieHeader movie={movie} crew={movieCrew} />
			<MovieCast cast={movieCast} />
			<MovieRecomendation recommendation={recommendation} />
		</>
	);
};

export default Details;
