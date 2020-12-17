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
import { Skeleton } from '@material-ui/lab';

const MovieHeader = ({ movie, crew, loading }) => {
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
	const verifyExistsData = hasReleaseDate ? (
		<MovieRelease>
			{moment(movie?.release_date).format('DD/MM/YYYY')}
		</MovieRelease>
	) : (
		<MovieRelease>(Data não informada)</MovieRelease>
	);

	return (
		<section>
			<ContentIndex backgroundimage={movie?.backdrop_path}>
				<Container>
					<HeaderDetails>
						<ImageWrapper item md={4} noWrap>
							{loading ? (
								<Skeleton variant="rect" width={300} height={450} />
							) : (
								<Image
									src={
										hasPosterPath
											? `//image.tmdb.org/t/p/w300_and_h450_bestv2/${movie?.poster_path}`
											: 'https://i.ibb.co/LPR2G8X/image.png'
									}
									alt={movie?.poster_path}
								/>
							)}
						</ImageWrapper>
						<DetailsWrapper item md={8} noWrap>
							<div>
								{loading ? (
									<Typography>
										<Skeleton variant="text" width={200} height={50} />
									</Typography>
								) : (
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
								)}

								{loading ? (
									<Typography>
										<Skeleton variant="text" width={100} height={25} />
									</Typography>
								) : (
									verifyExistsData
								)}

								{loading ? (
									<Typography>
										<Skeleton variant="text" width={150} height={25} />
									</Typography>
								) : (
									<MovieGenres>{genres.join(', ')}</MovieGenres>
								)}
								{loading ? (
									<Typography>
										<Skeleton variant="text" width={75} height={25} />
									</Typography>
								) : (
									<MovieRuntime>
										{`${moment
											.duration(movie?.runtime, 'minutes')
											.get('hours')}h ${moment
											.duration(movie?.runtime, 'minutes')
											.get('minutes')}m`}
									</MovieRuntime>
								)}
								{movie?.tagline && <TagLine>{movie?.tagline}</TagLine>}
								{hasMovieOverview ? (
									movie?.overview && (
										<>
											{loading ? (
												<Typography>
													<Skeleton variant="text" width={75} height={25} />
												</Typography>
											) : (
												<MovieSynopsis>Sinopse</MovieSynopsis>
											)}
											{loading ? (
												<Typography>
													<Skeleton variant="text" width={300} height={50} />
												</Typography>
											) : (
												<MovieOverview>{movie?.overview}</MovieOverview>
											)}
										</>
									)
								) : (
									<>
										{loading ? (
											<Typography>
												<Skeleton variant="text" width={75} height={25} />
											</Typography>
										) : (
											<MovieSynopsis>Sinopse</MovieSynopsis>
										)}
										{loading ? (
											<Typography>
												<Skeleton variant="text" width={300} height={50} />
											</Typography>
										) : (
											<MovieOverview>Sinopse não disponível</MovieOverview>
										)}
									</>
								)}
								{loading ? (
									<Typography>
										<Skeleton variant="text" width={100} height={25} />
									</Typography>
								) : (
									<ContainerDirector container>
										{directors.map(renderDirector)}
									</ContainerDirector>
								)}
							</div>
						</DetailsWrapper>
					</HeaderDetails>
				</Container>
			</ContentIndex>
		</section>
	);
};

export default MovieHeader;
