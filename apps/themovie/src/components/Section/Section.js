import React, { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';

import {
	SectionStyled,
	SectionWrapper,
	ContentWrapper,
	Column,
	ColumnHeader,
	H2Styled,
	ScrollerWrap,
	ScrollContent
} from './style';
import { renderMoviesCardHome } from './renderMovieCardHome';

const Section = () => {
	const [topRated, setTopRated] = useState([]);
	const [upcoming, setUpcoming] = useState([]);
	const [state, setState] = useState(false);

	useEffect(() => {
		getContentMovie();
		getContentUpcoming();
	}, []);

	const getContentMovie = async () => {
		const response = await fetch(`http://localhost:8080/movies/top_rated`);
		const data = await response.json();

		setTopRated(data.results);
	};

	const getContentUpcoming = async () => {
		const response = await fetch(`http://localhost:8080/movies/upcoming`);
		const data = await response.json();

		setUpcoming(data.results);
	};

	const handleChange = () => {
		state ? setState(false) : setState(true);
	};

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
									{state
										? upcoming.map(renderMoviesCardHome)
										: topRated.map(renderMoviesCardHome)}
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
