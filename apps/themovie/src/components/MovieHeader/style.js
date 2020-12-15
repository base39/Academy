import styled from 'styled-components';
import { Box, Typography, Grid } from '@material-ui/core';

export const ContentIndex = styled(Box)`
	height: 520px;
	border-bottom: 1px solid rgba(5.1%, 17.45%, 45.49%, 1);
	background-position: right 0px top;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: linear-gradient(
			to right,
			rgba(3.14%, 14.51%, 40.39%, 1) 150px,
			rgba(7.06%, 20.39%, 50.59%, 0.84) 100%
		),
		url(//image.tmdb.org/t/p/w1920_and_h800_multi_faces${props =>
			props.backgroundimage});
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MovieTitle = styled(Typography)`
	font-weight: 700;
`;

export const MovieSynopsis = styled.h3`
	font-size: 1.3em;
	font-weight: 600;
	margin: 10px 0 8px 0;
`;

export const MovieOverview = styled.p`
	font-size: 16px;
	margin: 0;
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
	border-radius: 10px;
`;

export const DetailsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	align-content: center;
	box-sizing: border-box;
	padding-left: 40px;
`;

export const TagLine = styled.h3`
	margin-bottom: 0;
	font-size: 1.2em;
	font-weight: 200;
	font-style: italic;
	opacity: 0.7;
`;

export const HeaderDetails = styled.div`
	color: #ffffff;
	display: flex;
	flex-wrap: nowrap;
`;

export const MovieYear = styled.span`
	opacity: 0.8;
	font-weight: 200;
`;

export const MovieRelease = styled.span`
	font-size: 16px;
`;

export const MovieGenres = styled.span`
	font-size: 16px;

	&::before {
		content: '\\2022';
		margin: 0 8px;
		font-size: 1.3em;
	}
`;

export const MovieRuntime = styled.span`
	font-size: 16px;

	&::before {
		content: '\\2022';
		margin: 0 8px;
		font-size: 1.3em;
	}
`;

export const DirectorName = styled(Typography)`
	font-weight: 700;
`

export const ContainerDirector = styled(Grid)`
	margin-top: 20px;
`

export const GridDirector = styled(Grid)`
`