import React from 'react';
import {
	CardStyle,
	Image,
	Case,
	Poster,
	ContentCard,
	Name,
	LaunchMovie,
	PopoverButton
} from './style';
import SimplePopover from './PopoverCard';

const MovieCard = ({ poster_path, title, release_date }) => {
	return (
		<CardStyle>
			<Image>
				<PopoverButton></PopoverButton>
				<SimplePopover />
				<Case>
					<Poster
						src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
						alt={`Poster ${title}`}
					/>
				</Case>
			</Image>
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
