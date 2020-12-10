import React from 'react'
import { 
    CardStyle, 
    Image,
    Case,
    Poster,
    ContentCard,
    Name,
    PopoverButton,
    VoteAverage
} from './style'
import SimplePopover from './PopoverCard'
const IMG_API = "https://image.tmdb.org/t/p/w1280"

const MovieCard = ({ title, poster_path, vote_average }) => {
    return(
        <CardStyle>
            <Image>
                <PopoverButton>
                </PopoverButton>
                <SimplePopover />
                <Case>
                    <Poster src={IMG_API + poster_path} alt={`Poster ${title}`} />
                </Case>                    
            </Image>
            <ContentCard>
                <Name>{title}</Name>
                <VoteAverage>{vote_average}</VoteAverage>
            </ContentCard>
        </CardStyle>
    )
}

export default MovieCard