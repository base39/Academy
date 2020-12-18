import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { CardSearch, DateStyled, BoxOverview, Overview } from './style';
import Typography from '@material-ui/core/Typography';
import { Container, CardContent } from '@material-ui/core';

const SkeletonSearch = () => {
	return (
		<Container>
			<CardSearch>
				<Skeleton animation="wave" variant="rect" width={95} height={140} />
				<CardContent>
					<Typography variant="h6">
						<Skeleton width={150} />
					</Typography>
					<DateStyled>
						<Skeleton width={80} />
					</DateStyled>
					<BoxOverview>
						<Overview>
							<Skeleton width={220} height={60} />
						</Overview>
					</BoxOverview>
				</CardContent>
			</CardSearch>
		</Container>
	);
};

export default SkeletonSearch;
