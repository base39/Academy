import React from 'react';
import {
	CardStyle,
	ImageContent,
	Case,
	Poster,
	ContentCard,
	Name,
	PopoverButton,
	VoteAverage
} from './style';
import SimplePopover from './PopoverCard';
import { NoStyleLink } from '../../components/Link';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';


const MovieCard = ({ poster_path, title, vote_average, release_date, width, height, iWidth, iHeight, id }) => {

	return (
		<CardStyle width={width} height={height}>
			<NoStyleLink to={`${id}`}>
				<ImageContent width={iWidth} height={iHeight}>
					<PopoverButton></PopoverButton>
					<SimplePopover />
					<Case>
						<Poster src={IMG_API + poster_path} alt={`Poster ${title}`} />
					</Case>
				</ImageContent>
			</NoStyleLink>
			<ContentCard>
				<NoStyleLink to={`${id}`}>
					<Name>{title}</Name>
				</NoStyleLink>
				<VoteAverage>{vote_average}</VoteAverage>
			</ContentCard>
		</CardStyle>
	);
};

export default MovieCard;
