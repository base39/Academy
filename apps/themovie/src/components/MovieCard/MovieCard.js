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
const IMG_API = 'https://image.tmdb.org/t/p/w1280';


const MovieCard = ({ poster_path, title, vote_average release_date, width, height, iWidth, iHeight }) => {

	return (
		<CardStyle width={width} height={height}>
			<ImageContent width={iWidth} height={iHeight}>
				<PopoverButton></PopoverButton>
				<SimplePopover />
				<Case>
					<Poster src={IMG_API + poster_path} alt={`Poster ${title}`} />
				</Case>
			</ImageContent>
			<ContentCard>
				<Name>{title}</Name>
				<VoteAverage>{vote_average}</VoteAverage>
			</ContentCard>
		</CardStyle>
	);
};

export default MovieCard;
