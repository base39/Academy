import MovieCard from '../../components/MovieCard/MovieCard';

export const renderMoviesCardHome = (movie, index) => (
	<MovieCard width="150px" height="330px" iWidth="150px" iHeight="225px" key={`movie-${index}`} {...movie} />
);