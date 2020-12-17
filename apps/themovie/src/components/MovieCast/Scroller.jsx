import React from 'react';
import { ScrollerWrap, ScrollContent } from './style';
import CastCard from './CastCard';
import {
	CastName,
	CardCast,
	CastCardContent
} from './style';
import { Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const Scroller = ({ cast, loading }) => {

	const renderCastCard = ({ name, character, gender, profile_path }, index) => {
		return (
			<CastCard
				name={name}
				character={character}
				gender={gender}
				profile_path={profile_path}
				loading={loading}
				key={`cast-${index}`}
			/>
		);
	};

	const renderSkeletonCard = (value, index) => {
		return (
			<CardCast key={`cast-skeleton-${index}`}>
				<Skeleton animation="wave" variant="rect" width={150} height={185} />
				<CastCardContent>
					<CastName variant="body2">
						<Skeleton />
					</CastName>
					<Typography variant="body2">
						<Skeleton />
					</Typography>
				</CastCardContent>
			</CardCast>
		)
	}

	return (
		<ScrollerWrap>
			<ScrollContent>
				{loading ? Array(8).fill().map(renderSkeletonCard) : cast.map(renderCastCard)}
			</ScrollContent>
		</ScrollerWrap>
	);
};

export default Scroller;
