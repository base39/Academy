import React from 'react';
import { ScrollContent, ScrollerWrap } from './style';
import RecommendationCard from './RecommendationCard';

const Scroller = ({ recommendation }) => {
	const renderRecommendation = ({ id, backdrop_path, title }, index) => (
		<RecommendationCard
			key={`recommendation-${index}`}
			id={id}
			backdrop_path={backdrop_path}
			title={title}
		/>
	);

	return (
		<ScrollerWrap>
			<ScrollContent>{recommendation.map(renderRecommendation)}</ScrollContent>
		</ScrollerWrap>
	);
};

export default Scroller;
