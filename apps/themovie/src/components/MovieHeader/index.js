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

	const renderDirector = ({name, job}, index) => {
		return (
			<GridDirector item key={`director-${index}`} md={4} sm={6}>
				<DirectorName variant="body1">
					{name}
				</DirectorName>
				<Typography variant="body2">
					{job}
				</Typography>
			</GridDirector>
		)
	}

	const directors = crew.reduce( (last, person) => {

		let found = last.find(value => {
			return value.name === person.name
		})

		if(!found && person.job === 'Director')
			last.push(person);

		return last;
	}, [])

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
								<MovieRuntime>
									{`${moment.duration(movie?.runtime, 'minutes').get('hours')}h ${moment.duration(movie?.runtime, 'minutes').get('minutes')}m`}
								</MovieRuntime>
								{movie?.tagline && (
									<TagLine>{movie?.tagline}</TagLine>
								)}
								{movie?.overview && (
									<>
										<MovieSynopsis>Sinopse</MovieSynopsis>
										<MovieOverview>{movie?.overview}</MovieOverview>
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
