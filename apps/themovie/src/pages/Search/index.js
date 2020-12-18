import React, { useState, useEffect } from 'react';

import SearchCard from '../../components/MovieCard/SearchCard';
import { Pagination } from '@material-ui/lab';
import SkeletonSearch from '../../components/MovieCard/SkeletonSearch';
import { PaginationStyled } from './style';

const Search = () => {
	const API_URL = process.env.REACT_APP_API_URL;
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState([{}]);

	const renderSearchCard = (
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
			const searchs = window.location.search;
			const params = new URLSearchParams(searchs);
			const query = params.get('query');

			await fetch(
				`${API_URL}/movies/search?query=${query}&language=pt-BR&page=${page}`
			)
				.then(res => res.json())
				.then(result => {
					setSearch(result);
					setPage(result.page);
				})
				.finally(() => {
					setLoading(false);
				});
		};

		fetchData();
	}, [API_URL, page]);

	const renderSearch = () => {
		return (
			<>
				{search?.results?.map(renderSearchCard)}
				<PaginationStyled
				count={search?.total_pages}
				onChange={changePage}
				classes={{ ul: 'alignclass' }}
			  ></PaginationStyled>
			</>
		);
	};

	const renderSkeletonCard = (value, index) => (
		<SkeletonSearch key={`skeleton-${index}`} />
	);

	return (
		<>{loading ? Array(8).fill().map(renderSkeletonCard) : renderSearch()}</>
	);
};

export default Search;
