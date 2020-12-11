import React from 'react';
import {
	SearchInput,
	SearchButton,
	CustomTitle,
	SectionBanner,
	BoxTitle,
	BoxSearch,
	BannerContent
} from './style';
import { Container } from '@material-ui/core'

const Home = () => {
	return (
		<>
			<Container disableGutters={true}>
				<SectionBanner>
					<BannerContent>
						<BoxTitle>
							<CustomTitle>
								<span className="title">Bem-Vindo(a).</span> <br />
								<span className="subtitle">
									Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
								</span>
							</CustomTitle>
						</BoxTitle>
						<BoxSearch>
							<SearchInput
								id="search-input"
								placeholder="Buscar por um Filme, Série ou Pessoa..."
								endAdornment={<SearchButton>Search</SearchButton>}
							/>
						</BoxSearch>
					</BannerContent>
				</SectionBanner>
			</Container>
		</>
	);
};

export default Home;
