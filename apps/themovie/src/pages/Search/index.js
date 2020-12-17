import React, { useState, useEffect } from 'react';
import SearchCard from '../../components/MovieCard/SearchCard';
import { Pagination } from '@material-ui/lab';

const Search = () => {
	const API_URL = process.env.REACT_APP_API_URL;
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState([{}]);

	const renderSearch = (
		{ poster_path, title, release_date, overview, id },
		index
	) => (
		<SearchCard
			id={id}
			poster_path={poster_path}
			title={title}
			release_date={release_date}
			overview={overview}
			key={index}
		/>
	);

	const changePage = (event, value) => {
		window.scrollTo(0, 0);
		setPage(value);
	};

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			await fetch(
				`${API_URL}/movies/search?query=ava&language=pt-BR&page=${page}`
			)
				.then(res => res.json())
				.then(result => {
					console.log(result.results);
					setSearch(result);
					setPage(result.page);
				})
				.finally(() => {
					setLoading(false);
				});
		};

		fetchData();
	}, [API_URL, page]);

	return (
		<>
			{search?.results?.map(renderSearch)}
			<Pagination count={search?.total_pages} onChange={changePage} />
		</>
	);
};

export default Search;
