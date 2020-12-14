import React, { Component } from 'react';

import {
	InnerContent,
	TitleMovieDiv,
	TitleH2,
	ContentContainer,
	Content,
	ColumnDiv,
	Panel,
	Results,
	PageContainer,
	LoadMoreStyled
} from './style';

import renderMoviesCard from '../../components/MovieCard/renderMoviesCard';

export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			totalPages: 0,
			page: 1
		};
		this.loadMore = this.loadMore.bind(this);
	}

	componentDidMount() {
		this.getContent();
	}

	async getContent() {
		try {
			const { page, movies, totalPages } = this.state;
			const response = await fetch(`http://localhost:8080/movies?page=${page}`);
			const data = await response.json();
			const dataResults = data.results;
			const totalPage = data.total_pages;

			this.setState({
				movies: [...movies, ...dataResults],
				totalPages: totalPages + totalPage
			});
		} catch (error) {
			console.error(error);
		}
	}

	loadMore() {
		this.setState({ page: this.state.page + 1 }, this.getContent);
	}

	render() {
		const { page, totalPages } = this.state;
		const hasMore = page < totalPages;
		const { movies } = this.state;
		return (
			<>
				<InnerContent>
					<ContentContainer>
						<TitleMovieDiv>
							<TitleH2>Filmes Populares</TitleH2>
						</TitleMovieDiv>
						<Content>
							<div>
								<ColumnDiv>
									<Panel>
										<Results>
											<PageContainer>
												{movies.map(renderMoviesCard)}
											</PageContainer>
											{hasMore && (
												<LoadMoreStyled onClick={this.loadMore}>
													Carregar Mais
												</LoadMoreStyled>
											)}
										</Results>
									</Panel>
								</ColumnDiv>
							</div>
						</Content>
					</ContentContainer>
				</InnerContent>
			</>
		);
	}
}
