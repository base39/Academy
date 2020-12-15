import React from 'react';
import { Typography } from '@material-ui/core';
import {
	ContainerRecommendation,
} from './style';
import Scroller from './Scroller'

const MovieRecommendation = ({ recommendation }) => {
	const hasRecommendation = recommendation.length;

	const renderScroller = (recommendation) => <Scroller recommendation={recommendation} />

	const renderNoRecommendation = () => {
		return (
			<Typography variant='subtitle1'>
				Ainda não temos dados o suficiente para sugerir filmes com base em nome_filme.
			</Typography>
		)
	}

	return (
		<ContainerRecommendation>
			<Typography variant="h6">Recomendações</Typography>
			{hasRecommendation ? renderScroller(recommendation) : renderNoRecommendation()}
		</ContainerRecommendation>
	);
};

export default MovieRecommendation;
