import React, { useState } from 'react';
import Sort from '../Sort/index';
import Filter from '../Filter/index';
import Button from '@material-ui/core/Button';

function SidebarFilter({ onFilter }) {
	const [state, setState] = useState({
		sort: 'popularity.desc',
		filter: ''
	});

	const handleChange = (event, name) => {
		const { value } = event.target;

		setState({
			...state,
			[name]: value
		});
	};

	const handleSubmit = () => {
		onFilter(state);
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
