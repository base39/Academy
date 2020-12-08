import MovieCard from './MovieCard';

export const renderMoviesCard = (movie, index) => (
	<MovieCard key={`movie-${index}`} {...movie} />
);
