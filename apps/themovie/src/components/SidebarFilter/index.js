import React, { useState } from 'react';
import Sort from '../Sort/index';
import Filter from '../Filter/index';
import Button from '@material-ui/core/Button';

function SidebarFilter() {
	const [state, setState] = useState({
		sort: 'popularity.desc',
		page: '1',
		filter: '',
		movies: []
	});

	const handleChange = (event, name) => {
		const { value } = event.target;

		setState({
			...state,
			[name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		fetch(
			`http://localhost:8080/movies?&language=pt-BR&sort_by=${state.sort}&include_adult=false&include_video=false&page=${state.page}&with_genres=${state.filter}`
		)
			.then(res => res.json())
			.then(data => {
				state.movies(data.results);
			});
	};

	return (
		<>
			<div>
				<Sort
					onChange={event => handleChange(event, 'sort')}
					value={state.sort}
				/>
				<Filter
					onChange={event => handleChange(event, 'filter')}
					value={state.filter}
				/>
				<Button variant="contained" color="primary" onClick={handleSubmit}>
					Pesquisar
				</Button>
			</div>
		</>
	);
}

export default SidebarFilter;
