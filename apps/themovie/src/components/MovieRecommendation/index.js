import React from 'react';
import { Typography } from '@material-ui/core';
import { ContainerRecommendation } from './style';
import Scroller from './Scroller';

const MovieRecommendation = ({ recommendation, movie, loading }) => {
	const hasRecommendation = recommendation.length;

	const renderScroller = (recommendation, loading) => (
		<Scroller recommendation={recommendation} loading={loading} />
	);

	const renderNoRecommendation = () => {
		return (
			<Typography variant="subtitle1">
				{`Ainda não temos dados o suficiente para sugerir filmes com base em ${movie.title}.`}
			</Typography>
		);
	};

	return (
		<ContainerRecommendation>
			<Typography variant="h6">Recomendações</Typography>
			{hasRecommendation
				? renderScroller(recommendation, loading)
				: renderNoRecommendation()}
		</ContainerRecommendation>
	);
};

export default MovieRecommendation;
