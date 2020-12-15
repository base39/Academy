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

function Filter({ onChange, value }) {
	const [genres, setGenres] = useState([]);
	const API_URL = process.env.REACT_APP_API_URL;

	// Buscar os ID dos generos de filmes
	useEffect(() => {
		fetch(`${API_URL}/genres`)
			.then(res => res.json())
			.then(result => {
				setGenres(result);
			});
	}, [API_URL]);

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
					<Select value={value} onChange={onChange}>
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
