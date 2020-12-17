import React from 'react';
import { CardSkeleton } from './style';
import { Typography, CardContent } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const SkeletonCard = () => {
	return (
		<CardSkeleton>
			<Skeleton animation="wave" variant="rect" width={200} height={305} />
			<CardContent>
				<Typography variant="body2">
					<Skeleton />
					<Skeleton />
				</Typography>
			</CardContent>
		</CardSkeleton>
	);
};

export default SkeletonCard;
