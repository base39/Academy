import React from 'react'
import FormFilter from '../../components/FormFilter/FormFilter'

import { 
    InnerContent,
    TitleMovieDiv,
    TitleH2,
    ContentContainer,
    Content
} from './style'

function Movie() {
    return (
        <InnerContent>
            <ContentContainer>
                <TitleMovieDiv>
                    <TitleH2>Filmes Populares</TitleH2>
                </TitleMovieDiv>
                <Content>
                    <FormFilter/>
                </Content>
            </ContentContainer>
        </InnerContent>
    )
}

export default Movie