import React from 'react';
import { CardRecommendation, RecommendationImage, BoxImage, RecommendatioCardContent } from './style';
import { NoStyleLink } from '../../components/Link';
import noBackdrop from '../../../src/assets/svg/no_movie_holder.svg';
import { Typography, CardContent, CardActionArea } from '@material-ui/core';

const RecommendationCard = ({ id, backdrop_path, title }) => {
	const hasBackdrop = backdrop_path;

	const renderBackdrop = backdrop_path => (
		<RecommendationImage
			image={`//image.tmdb.org/t/p/w250_and_h141_face/${backdrop_path}`}
		/>
	);
	const renderBackdropHolder = holder => <BoxImage image={holder} />;

	return (
		<CardRecommendation>
			<NoStyleLink to={`/movie/${id}`}>
				<CardActionArea>
					{hasBackdrop
						? renderBackdrop(backdrop_path)
						: renderBackdropHolder(noBackdrop)}
					<RecommendatioCardContent>
						<Typography variant="subtitle2">{title}</Typography>
					</RecommendatioCardContent>
				</CardActionArea>
			</NoStyleLink>
		</CardRecommendation>
	);
};

export default RecommendationCard;
