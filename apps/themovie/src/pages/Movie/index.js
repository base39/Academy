import { Fragment } from "react"
import React, { Component } from 'react'

import { 
    InnerContent,
    TitleMovieDiv,
    Titleh2,
    ContentContainer,
    Content,
    SearchPanel,
    SubTitleName,
    Name,
    ColumnDiv,
    Panel,
    Results,
    PageContainer,
    LoadMoreStyled
} from './style'
import { renderMoviesCard } from '../../components/MovieCard/renderMovieCard'
import { movies } from '../../components/app/data'

export default class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visiable: 20
        }

        this.loadMore = this.loadMore.bind(this)
    }

    loadMore() {
        this.setState((old) => {
            return {visiable: old.visiable + 20}
        })
    }
    
    render() {
        return (
            <>
                <InnerContent>
                    <ContentContainer>
                        <TitleMovieDiv>
                            <Titleh2>Filmes Populares</Titleh2>
                        </TitleMovieDiv>
                        <Content>
                            <div>
                                <SearchPanel>
                                    <SubTitleName>
                                        <Name>Ordenar</Name>
                                    </SubTitleName>
                                    <div>

                                    </div>
                                </SearchPanel>
                            </div>
                            <div>
                                <ColumnDiv>
                                    <Panel>
                                        <Results>
                                            <PageContainer>
                                               {movies.slice(0, this.state.visiable).map(renderMoviesCard)}
                                            </PageContainer>
                                            { this.state.visiable < movies.length &&
                                            <LoadMoreStyled onClick={this.loadMore}>
                                                Carregar Mais
                                            </LoadMoreStyled>
                                            }
                                        </Results>
                                    </Panel>
                                </ColumnDiv>
                            </div>
                        </Content>
                    </ContentContainer>
                </InnerContent>
            </>
        )
    }
}