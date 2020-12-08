import React from 'react'
import { 
    CardStyle, 
    Image,
    Case,
    Poster,
    ContentCard,
    Name,
    LaunchMovie,
    PopoverButton
} from './style'
import SimplePopover from './PopoverCard'

const MovieCard = ({ img, name, date }) => {
    return(
        <CardStyle>
            <Image>
                <PopoverButton>
                </PopoverButton>
                <SimplePopover />
                <Case>
                    <Poster src={img} alt={`Poster ${name}`} />
                </Case>                    
            </Image>
            <ContentCard>
                <div></div>
                <Name>{name}</Name>
                <LaunchMovie>{date}</LaunchMovie>
                <div></div>
            </ContentCard>
        </CardStyle>
    )
}

export default MovieCard