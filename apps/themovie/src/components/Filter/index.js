import React, { useEffect, useState } from 'react';
import {
	NameWrapper,
	NameTitle,
	FilterWrapper,
	SelectWrapper,
	SelectTitle
} from './style';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

function Filter() {
	const [genres, setGenres] = useState([]);
	const [filterTerm, setFilterTerm] = useState('');

	// Buscar os ID dos generos de filmes
	useEffect(() => {
		fetch('http://localhost:8080/genres')
			.then(res => res.json())
			.then(result => {
				setGenres(result);
			});
	}, []);

	return (
		<>
			<FilterWrapper
				border={1}
				borderRadius="borderRadius"
				borderColor="grey.300"
				boxSizing="border-box"
				display="flex"
				flexDirection="column"
			>
				<NameWrapper>
					<NameTitle>Filtros</NameTitle>
				</NameWrapper>
				<SelectWrapper>
					<SelectTitle>Gêneros</SelectTitle>
					<Select
						value={filterTerm}
						onChange={e => setFilterTerm(e.target.value)}
					>
						{genres?.genres?.map(genre => (
							<MenuItem key={genre.id} value={genre.id}>
								{genre.name}
							</MenuItem>
						))}
					</Select>
				</SelectWrapper>
			</FilterWrapper>
		</>
	);
}

export default Filter;
