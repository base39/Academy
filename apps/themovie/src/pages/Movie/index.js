import React from 'react';
import Form from '../../components/Form/index';

import {
	InnerContent,
	TitleMovieDiv,
	ContentContainer,
	Content,
	TitleH2
} from './style';

function Movie() {
	return (
		<InnerContent>
			<ContentContainer>
				<TitleMovieDiv>
					<TitleH2>Filmes Populares</TitleH2>
				</TitleMovieDiv>
				<Content>
					<Form />
				</Content>
			</ContentContainer>
		</InnerContent>
	);
}

export default Movie;
