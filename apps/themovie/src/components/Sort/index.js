import React from 'react';
import {
	SortWrapper,
	OrderWrapper,
	OrderTitle,
	FilterNameWrapper,
	FilterNameTitle
} from './style';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

function Sort({ onChange, value }) {
	return (
		<>
			<SortWrapper
				border={1}
				borderRadius="borderRadius"
				borderColor="grey.300"
				boxSizing="border-box"
				display="flex"
				flexDirection="column"
			>
				<FilterNameWrapper>
					<FilterNameTitle>Ordenar</FilterNameTitle>
				</FilterNameWrapper>
				<OrderWrapper>
					<OrderTitle>Ordenar Resultados Por</OrderTitle>
					<Select value={value} onChange={onChange}>
						<MenuItem value="popularity.desc">Popularidade (maior)</MenuItem>
						<MenuItem value="popularity.asc">Popularidade (menor)</MenuItem>
						<MenuItem value="vote_average.desc">Avaliação (melhor)</MenuItem>
						<MenuItem value="vote_average.asc">Avaliação (pior)</MenuItem>
						<MenuItem value="primary_release_date.desc">
							Lançamento (novo)
						</MenuItem>
						<MenuItem value="primary_release_date.asc">
							Lançamento (antigo)
						</MenuItem>
						<MenuItem value="original_title.asc">Título (A-Z)</MenuItem>
						<MenuItem value="original_title.desc">Título (Z-A)</MenuItem>
					</Select>
				</OrderWrapper>
			</SortWrapper>
		</>
	);
}

export default Sort;
