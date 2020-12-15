import React from 'react';
import { Typography, CardContent, CardActionArea } from '@material-ui/core';
import {
	ScrollContent,
	ScrollerWrap,
	ContainerRecommendation,
	RecommendationImage,
	RecommendationCard,
	BoxImage
} from './style';
import { NoStyleLink } from '../../components/Link';
import noBackdrop from '../../../src/assets/svg/no_movie_holder.svg';

const MovieRecommendation = ({ recommendation }) => {
	console.log(recommendation);

	const renderRecommendation = (
		{ id, backdrop_path, title, vote_average },
		index
	) => {
		return (
			<RecommendationCard key={`recommendation-${index}`}>
				<NoStyleLink to={`/movie/${id}`}>
					<CardActionArea>
						{backdrop_path ? (
							<RecommendationImage
								image={`//image.tmdb.org/t/p/w250_and_h141_face/${backdrop_path}`}
							/>
						) : (
							<BoxImage image={noBackdrop} />
						)}
						<CardContent>
							<Typography variant="subtitle2">{title}</Typography>
						</CardContent>
					</CardActionArea>
				</NoStyleLink>
			</RecommendationCard>
		);
	};

	return (
		<ContainerRecommendation>
			<Typography variant="h6">Recomendações</Typography>
			<ScrollerWrap>
				<ScrollContent>
					{recommendation.map(renderRecommendation)}
				</ScrollContent>
			</ScrollerWrap>
		</ContainerRecommendation>
	);
};

export default MovieRecommendation;
