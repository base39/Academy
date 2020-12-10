import React, { useEffect, useState } from 'react';
import {
    SearchPanel,
    ColumnDiv,
    Panel,
    Results,
    PageContainer,
    SortWrapper,
	NameWrapper,
	NameTitle,
	OrderWrapper,
    OrderTitle,
    FilterWrapper,
	FilterNameWrapper,
	FilterNameTitle,
	SelectWrapper,
    SelectTitle,
    LoadMoreStyled
    
} from './style'
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MovieCard from '../MovieCard/MovieCard';
import Button from '@material-ui/core/Button'
const FEATURED_API = "http://localhost:8080/sort/popularity.desc/all"

function FormFilter() {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [sortTerm, setSortTerm] = useState('');
    const [filterTerm, setFilterTerm] = useState('');
    const [visible, setVisible] = useState(20);

    const showMoreMovies = () => {
        setVisible((oldValue) => oldValue + 20)
    }

    useEffect(() => {
		fetch("http://localhost:8080/genres")
			.then(res => res.json())
			.then(
				(result) => {
					setGenres(result)
				}
			)
	}, [])

    useEffect(() => {
        fetch(FEATURED_API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
    }, [])

    const handleOnSubmit = event => {
        event.preventDefault()

        fetch(`http://localhost:8080/sort/${sortTerm}/${filterTerm}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
    }

    const handleOnChangeSort = event => {
        setSortTerm(event.target.value)
    }

    const handleOnChangeFilter = event => {
        setFilterTerm(event.target.value)
    }

    return (
        <>
            <div>
                <SearchPanel>
                    <form onSubmit={handleOnSubmit}>
                    <SortWrapper
                        border={1}
                        borderRadius="borderRadius"
                        borderColor="grey.300"
                        boxSizing="border-box"
                        display="flex"
                        flexDirection="column"
                    >
                        <FilterNameWrapper>
                            <FilterNameTitle>Ordenar</FilterNameTitle>
                        </FilterNameWrapper>
                        <OrderWrapper>
                            <OrderTitle>Ordenar Resultados Por</OrderTitle>
                            <Select value={sortTerm}
                                    onChange={handleOnChangeSort}
                            >
                                <MenuItem value='popularity.desc'>Popularidade (maior)</MenuItem>
                                <MenuItem value='popularity.asc'>Popularidade (menor)</MenuItem>
                                <MenuItem value='vote_average.desc'>Avaliação (melhor)</MenuItem>
                                <MenuItem value='vote_average.asc'>Avaliação (pior)</MenuItem>
                                <MenuItem value='primary_release_date.desc'>Lançamento (novo)</MenuItem>
                                <MenuItem value='primary_release_date.asc'>Lançamento (antigo)</MenuItem>
                                <MenuItem value='original_title.asc'>Título (A-Z)</MenuItem>
                                <MenuItem value='original_title.desc'>Título (Z-A)</MenuItem>
                            </Select>
                        </OrderWrapper>
                    </SortWrapper>
                    <FilterWrapper
                        border={1}
                        borderRadius="borderRadius"
                        borderColor="grey.300"
                        boxSizing="border-box"
                        display="flex"
                        flexDirection="column"
                    >
                        <NameWrapper>
                            <NameTitle>Filtros</NameTitle>
                        </NameWrapper>
                        <SelectWrapper>
                            <SelectTitle>Gêneros</SelectTitle>
                            <Select value={filterTerm}
                                    onChange={handleOnChangeFilter}
                            >
                            {genres?.genres?.map((genre) => (
                                <MenuItem key={genre.id} value={genre.id}>
                                {genre.name}
                                </MenuItem>
                            ))}
                            </Select>
                        </SelectWrapper>
                    </FilterWrapper>
                    <Button variant="contained" color="primary" size="small" type="submit">
                        Pesquisar
                    </Button>
                    </form>
                </SearchPanel>
            </div>
            
            <div>
                <ColumnDiv>
                    <Panel>
                        <Results>
                            <PageContainer>
                                {movies.length > 0 &&
                                    movies.slice(0, visible).map((movie) => <MovieCard key={movie.id} {...movie} />)}
                                <LoadMoreStyled onClick={showMoreMovies}>
                                    Mostrar mais
                                </LoadMoreStyled>
                            </PageContainer>
                        </Results>
                    </Panel>
                </ColumnDiv>
            </div>
        </>
        
    )
}

export default FormFilter