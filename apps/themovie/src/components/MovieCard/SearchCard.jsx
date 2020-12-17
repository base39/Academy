import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, CardContent } from '@material-ui/core';
import {
	CardMediaSearch,
	CardSearch,
	DateStyled,
	BoxOverview,
	Overview
} from './style';
import { NoStyleLink } from '../Link';

const SearchCard = ({ poster_path, title, release_date, overview, id }) => {
	const hasPosterPath = poster_path?.length;
	return (
		<Container>
			<CardSearch>
				<NoStyleLink to={`/movie/${id}`}>
					<CardMediaSearch
						image={
							hasPosterPath
								? `//image.tmdb.org/t/p/w94_and_h141_bestv2/${poster_path}`
								: 'https://i.ibb.co/LPR2G8X/image.png'
						}
						title={`${title}`}
					/>
				</NoStyleLink>
				<CardContent>
					<Typography variant="h6">
						<NoStyleLink to={`/movie/${id}`}>{title}</NoStyleLink>
					</Typography>
					<DateStyled>{release_date}</DateStyled>
					<BoxOverview>
						<Overview>{overview}</Overview>
					</BoxOverview>
				</CardContent>
			</CardSearch>
		</Container>
	);
};

export default SearchCard;
