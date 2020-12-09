import React, { Component } from 'react';

import {
	InnerContent,
	TitleMovieDiv,
	Titleh2,
	ContentContainer,
	Content,
	ColumnDiv,
	Panel,
	Results,
	PageContainer,
	LoadMoreStyled
} from './style';

import { renderMoviesCard } from '../../components/MovieCard/renderMovieCard';
import Filter from '../../components/Filter/Filter';
import Sort from '../../components/Sort/Sort';

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
							<Titleh2>Filmes Populares</Titleh2>
						</TitleMovieDiv>
						<Content>
							<div>
								<Filter />
								<Sort />
							</div>
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
