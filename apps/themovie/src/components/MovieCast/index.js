import React from 'react';
import { ContainerCast } from './style';
import { Typography } from '@material-ui/core';
import Scroller from './Scroller';

const MovieCast = ({ cast }) => {
	const hasCast = cast.length;

	const renderScroller = cast => <Scroller cast={cast} />;

	const renderNoCast = () => {
		return (
			<Typography variant="subtitle1">
				Não temos uma lista do elenco deste filme.
			</Typography>
		);
	};

	return (
		<ContainerCast>
			<Typography variant="h6">Elenco Principal</Typography>
			{hasCast ? renderScroller(cast) : renderNoCast()}
		</ContainerCast>
	);
};

export default MovieCast;
