import React, { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import {
	SectionStyled,
	SectionWrapper,
	ContentWrapper,
	Column,
	ColumnHeader,
	H2Styled,
	ScrollerWrap,
	ScrollContent,
	CardStyle,
	ImageContent,
	ContentCard
} from './style';
import { renderMoviesCardHome } from './renderMovieCardHome';

const API_URL = process.env.REACT_APP_API_URL;

const Section = () => {
	const [topRated, setTopRated] = useState([]);
	const [upcoming, setUpcoming] = useState([]);
	const [state, setState] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getContentMovie();
		getContentUpcoming();
	}, []);

	const getContentMovie = async () => {
		setLoading(true);
		const response = await fetch(`${API_URL}/movies/top_rated`);
		const data = await response.json();

		setTopRated(data.results);
		setLoading(false);
	};

	const getContentUpcoming = async () => {
		setLoading(true);
		const response = await fetch(`${API_URL}/movies/upcoming`);
		const data = await response.json();

		setUpcoming(data.results);
		setLoading(false);
	};

	const handleChange = () => {
		state ? setState(false) : setState(true);
	};

	const SkeletonCard = (value, index) => {
		return (
			<>
				<CardStyle  key={`skeleton-${index}`}>
					<ImageContent>
						<Skeleton width={150} height={380} style={{ marginTop: -95 }} />
					</ImageContent>
					<ContentCard>
						<Typography>
							<Skeleton />
						</Typography>
						<Typography>
							<Skeleton />
						</Typography>
					</ContentCard>
				</CardStyle>
			</>
		);
	};

	const renderSection = state
		? upcoming.map(renderMoviesCardHome)
		: topRated.map(renderMoviesCardHome);

	return (
		<>
			<SectionStyled>
				<SectionWrapper>
					<ContentWrapper>
						<Column>
							<ColumnHeader>
								<H2Styled>Os Mais Populares</H2Styled>
								<div>
									<Switch onChange={handleChange} color={'primary'} />
								</div>
								<H2Styled>Lançamentos</H2Styled>
							</ColumnHeader>
							<ScrollerWrap>
								<ScrollContent>
									{loading ? Array(8).fill().map(SkeletonCard) : renderSection}
								</ScrollContent>
							</ScrollerWrap>
						</Column>
					</ContentWrapper>
				</SectionWrapper>
			</SectionStyled>
		</>
	);
};

export default Section;
