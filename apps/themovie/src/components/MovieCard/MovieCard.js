import React from 'react';
import {
	CardStyle,
	ImageContent,
	Case,
	Poster,
	ContentCard,
	Name,
	PopoverButton,
	DateStyled,
	Consensus,
	Circle,
	Score,
	Percent,
	IconStyled,
	PercentStyled
} from './style';
import SimplePopover from './PopoverCard';
import { NoStyleLink } from '../../components/Link';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const MovieCard = ({
	poster_path,
	title,
	vote_average,
	release_date,
	width,
	height,
	iWidth,
	iHeight,
	id
}) => {
	return (
		<CardStyle width={width} height={height}>
			<ImageContent width={iWidth} height={iHeight}>
				<PopoverButton></PopoverButton>
				<SimplePopover />
				<Case>
					<NoStyleLink to={`/movie/${id}`}>
						<Poster
							src={
								poster_path
									? IMG_API + poster_path
									: 'https://i.ibb.co/LPR2G8X/image.png'
							}
							alt={`Poster ${title}`}
						/>
					</NoStyleLink>
				</Case>
			</ImageContent>
			<ContentCard>
				<Consensus>
					<Circle>
						<Score>
							<Percent>
								<IconStyled>
									{vote_average}
									<PercentStyled>%</PercentStyled>
								</IconStyled>
							</Percent>
						</Score>
					</Circle>
				</Consensus>
				<NoStyleLink to={`/movie/${id}`}>
					<Name>{title}</Name>
				</NoStyleLink>
				<DateStyled>{release_date}</DateStyled>
			</ContentCard>
		</CardStyle>
	);
};

export default MovieCard;
