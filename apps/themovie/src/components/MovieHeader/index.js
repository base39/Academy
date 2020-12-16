import React from 'react';
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
	MovieRuntime,
	DirectorName,
	ContainerDirector,
	GridDirector
} from './style';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';

const MovieHeader = ({ movie, crew }) => {
	const genres = [];
	movie?.genres?.map(genre => genres.push(genre.name));

	const renderDirector = ({ name, job }, index) => {
		return (
			<GridDirector item key={`director-${index}`} md={4} sm={6}>
				<DirectorName variant="body1">{name}</DirectorName>
				<Typography variant="body2">{job}</Typography>
			</GridDirector>
		);
	};

	const directors = crew.reduce((last, person) => {
		let found = last.find(value => {
			return value.name === person.name;
		});

		if (!found && person.job === 'Director') last.push(person);

		return last;
	}, []);

	const hasPosterPath = movie?.poster_path;
	const hasMovieOverview = movie?.overview;
	const hasReleaseDate = movie?.release_date;

	return (
		<section>
			<ContentIndex backgroundimage={movie?.backdrop_path}>
				<Container>
					<HeaderDetails>
						<ImageWrapper item md={4} noWrap>
							<Image
								src={
									hasPosterPath
										? `//image.tmdb.org/t/p/w300_and_h450_bestv2/${movie?.poster_path}`
										: 'https://i.ibb.co/LPR2G8X/image.png'
								}
								alt={movie?.poster_path}
							/>
						</ImageWrapper>
						<DetailsWrapper item md={8} noWrap>
							<div>
								<MovieTitle variant="h4">
									{movie?.title}{' '}
									{hasReleaseDate ? (
										<MovieYear>
											({moment(movie?.release_date).year()})
										</MovieYear>
									) : (
										<MovieYear>(Data não informada)</MovieYear>
									)}
								</MovieTitle>
								{hasReleaseDate ? (
									<MovieRelease>
										{moment(movie?.release_date).format('DD/MM/YYYY')}
									</MovieRelease>
								) : (
									<MovieRelease>(Data não informada)</MovieRelease>
								)}

								<MovieGenres>{genres.join(', ')}</MovieGenres>
								<MovieRuntime>
									{`${moment
										.duration(movie?.runtime, 'minutes')
										.get('hours')}h ${moment
										.duration(movie?.runtime, 'minutes')
										.get('minutes')}m`}
								</MovieRuntime>
								{movie?.tagline && <TagLine>{movie?.tagline}</TagLine>}
								{hasMovieOverview ? (
									movie?.overview && (
										<>
											<MovieSynopsis>Sinopse</MovieSynopsis>
											<MovieOverview>{movie?.overview}</MovieOverview>
										</>
									)
								) : (
									<>
										<MovieSynopsis>Sinopse</MovieSynopsis>
										<MovieOverview>Sinopse não disponível</MovieOverview>
									</>
								)}
								<ContainerDirector container>
									{directors.map(renderDirector)}
								</ContainerDirector>
							</div>
						</DetailsWrapper>
					</HeaderDetails>
				</Container>
			</ContentIndex>
		</section>
	);
};

export default MovieHeader;
