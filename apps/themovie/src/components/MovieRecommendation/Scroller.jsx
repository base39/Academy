import React from 'react';
import {
	CardRecommendation,
	RecommendatioCardContent,
	ScrollContent,
	ScrollerWrap
} from './style';
import { Typography, CardActionArea } from '@material-ui/core';
import RecommendationCard from './RecommendationCard';
import { Skeleton } from '@material-ui/lab';

const Scroller = ({ recommendation, loading }) => {
	const renderRecommendation = ({ id, backdrop_path, title }, index) => (
		<RecommendationCard
			key={`recommendation-${index}`}
			id={id}
			backdrop_path={backdrop_path}
			title={title}
		/>
	);

	const skeletonRecommendationMovies = (value, index) => {
		return (
			<CardRecommendation key={`card-recommendation-${index}`}>
				<CardActionArea>
					<Skeleton animation="wave" variant="rect" width={250} height={141} />
					<RecommendatioCardContent>
						<Typography>
							<Skeleton />
						</Typography>
					</RecommendatioCardContent>
				</CardActionArea>
			</CardRecommendation>
		);
	};

	return (
		<ScrollerWrap>
			<ScrollContent>
				{loading
					? Array(5).fill().map(skeletonRecommendationMovies)
					: recommendation.map(renderRecommendation)}
			</ScrollContent>
		</ScrollerWrap>
	);
};

export default Scroller;
