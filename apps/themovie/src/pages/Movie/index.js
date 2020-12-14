import React from 'react';
import SidebarFilter from '../../components/SidebarFilter/index';

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
					<SidebarFilter />
				</Content>
			</ContentContainer>
		</InnerContent>
	);
}

export default Movie;
