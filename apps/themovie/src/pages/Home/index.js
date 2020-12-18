import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '@material-ui/core';
import {
	SearchInput,
	SearchButton,
	CustomTitle,
	SectionBanner,
	BoxTitle,
	BoxSearch,
	BannerContent
} from './style';
import Section from '../../components/Section/Section';

const Home = () => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const handleSearch = e => {
		e.preventDefault();
		if (search.length) navigate(`/search?query=${search}`);
	};

	const handleChange = event => {
		const { value } = event.target;
		setSearch(value);
	};

	return (
		<>
			<Container disableGutters={true}>
				<SectionBanner>
					<BannerContent>
						<BoxTitle>
							<CustomTitle>
								<span className="title">Bem-Vindo(a).</span> <br />
								<span className="subtitle">
									Milhões de Filmes para Descobrir. Explore já.
								</span>
							</CustomTitle>
						</BoxTitle>
						<BoxSearch>
							<form onSubmit={handleSearch}>
								<SearchInput
									id="search-input"
									placeholder="Buscar por um Filme..."
									onChange={handleChange}
									endAdornment={
										<SearchButton onClick={handleSearch}>Search</SearchButton>
									}
								/>
							</form>
						</BoxSearch>
					</BannerContent>
				</SectionBanner>
				<Section />
			</Container>
		</>
	);
};

export default Home;
