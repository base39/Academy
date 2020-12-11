import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	ContentIndex,
	MovieTitle,
	MovieSynopsis,
	MovieOverview,
	Image,
	TagLine,
	DetailsWrapper,
	ImageWrapper,
	HeaderDetails,
	MovieYear,
	MovieRelease,
	MovieGenres,
	MovieRuntime
} from './style';
import { Container } from '@material-ui/core';
import moment from 'moment';

const MovieHeader = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	const [movieHours, setMovieHours] = useState([]);
	const [movieMinutes, setMovieMinutes] = useState([]);
	const genres = [];

	useEffect(() => {
		const fetchMovie = async () => {
			await fetch(`http://localhost:8080/movies/${id}?language=pt-BR`)
				.then(res => res.json())
				.then(result => {
					setMovie(result);
					setMovieHours(
						moment.duration(result?.runtime, 'minutes').get('hours')
					);
					setMovieMinutes(
						moment.duration(result?.runtime, 'minutes').get('minutes')
					);
				});
		};
		fetchMovie();
	}, [id]);

	movie?.genres?.map(genre => genres.push(genre.name));

	return (
		<section>
			<ContentIndex backgroundimage={movie?.backdrop_path}>
				<Container>
					<HeaderDetails>
						<ImageWrapper item md={4} noWrap>
							<Image
								src={`//image.tmdb.org/t/p/w300_and_h450_bestv2/${movie?.poster_path}`}
								alt={movie?.poster_path}
							/>
						</ImageWrapper>
						<DetailsWrapper item md={8} noWrap>
							<div>
								<MovieTitle variant="h4">
									{movie?.title}{' '}
									<MovieYear>({moment(movie?.release_date).year()})</MovieYear>
								</MovieTitle>
								<MovieRelease>
									{moment(movie?.release_date).format('DD/MM/YYYY')}
								</MovieRelease>
								<MovieGenres>{genres.join(', ')}</MovieGenres>
								<MovieRuntime>{`${movieHours}h ${movieMinutes}m`}</MovieRuntime>
								<TagLine>{movie?.tagline}</TagLine>
								<MovieSynopsis>Sinopse</MovieSynopsis>
								<MovieOverview>{movie?.overview}</MovieOverview>
							</div>
						</DetailsWrapper>
					</HeaderDetails>
				</Container>
			</ContentIndex>
		</section>
	);
};

export default MovieHeader;
