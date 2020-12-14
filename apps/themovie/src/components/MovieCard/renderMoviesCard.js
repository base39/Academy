import MovieCard from './MovieCard';

const renderMoviesCard = (movie, index) => (
	<MovieCard key={`movie-${index}`} {...movie} />
);

export default renderMoviesCard;
