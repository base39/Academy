import React from 'react';
import {
	CardStyle,
	ImageContent,
	Case,
	Poster,
	ContentCard,
	Name,
	LaunchMovie,
	PopoverButton
} from './style';
import SimplePopover from './PopoverCard';

const MovieCard = ({ poster_path, title, release_date, width, height, iWidth, iHeight }) => {
				
	return (
		<CardStyle width={width} height={height}>
			<ImageContent width={iWidth} height={iHeight}>
				<PopoverButton></PopoverButton>
				<SimplePopover />
				<Case>
					<Poster src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} alt={`Poster ${title}`} />
				</Case>
			</ImageContent>
			<ContentCard>
				<div></div>
				<Name>{title}</Name>
				<LaunchMovie>{release_date}</LaunchMovie>
				<div></div>
			</ContentCard>
		</CardStyle>
	);
};

export default MovieCard;
