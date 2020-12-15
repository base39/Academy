import React from 'react';
import { Typography } from '@material-ui/core';
import manIcon from '../../assets/svg/man.svg';
import womanIcon from '../../assets/svg/woman.svg';
import {
  BoxImage,
  CastName,
  CardCast,
  CastImage,
  CastCardContent
} from './style';

const CastCard = ({ name, character, gender, profile_path }) => {

  const renderCastImage = (profile_path, name) => (
    <CastImage
      image={`//image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`}
      title={name}
    />
  );

  const renderProfileHolder = gender => (
    <BoxImage image={gender === 1 ? womanIcon : manIcon} />
  );

  const hasProfileImage = profile_path;
  return (
    <CardCast>
      {hasProfileImage
        ? renderCastImage(profile_path, name)
        : renderProfileHolder(gender)}
      <CastCardContent>
        <CastName variant="body2">{name}</CastName>
        <Typography variant="body2" color="textSecondary">
          {character}
        </Typography>
      </CastCardContent>
    </CardCast>
  );
};

export default CastCard;
