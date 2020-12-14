import React from 'react';
import {
  ScrollerWrap,
  ScrollContent,
  CastCard,
  CastImage,
  CastCardContent,
  ContainerCast,
  BoxImage,
  CastName,
  CardContentArea
} from './style';
import { Typography } from '@material-ui/core';
import manIcon from '../../assets/svg/man.svg'
import womanIcon from '../../assets/svg/woman.svg'

const MovieCast = ({ cast }) => {

  const renderCastCard = ({ name, profile_path, character, gender }, index) => {
    return (
      <CastCard key={`cast-${index}`}>
        <CardContentArea>
          {profile_path ?
            <CastImage
              image={`//image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`}
              title={name}
            /> : 
            <BoxImage
              image={gender === 1 ? womanIcon : manIcon}
            />
          }
          <CastCardContent>
            <CastName variant="body2">
              {name}
            </CastName>
            <Typography variant="body2" color="textSecondary">
              {character}
            </Typography>
          </CastCardContent>
        </CardContentArea>
      </CastCard>
    )
  }

  return (
    <>
      <ContainerCast>
        <Typography variant="h6">
          Elenco Principal
        </Typography>
        <ScrollerWrap>
          <ScrollContent>
            {cast.map(renderCastCard)}
          </ScrollContent>
        </ScrollerWrap>
      </ContainerCast>
    </>
  )

}

export default MovieCast