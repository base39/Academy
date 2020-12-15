import styled from 'styled-components'
import {
	Container,
	Card,
	CardMedia,
	Box
} from '@material-ui/core'

export const ScrollerWrap = styled.div`
	width: auto;
	position: relative;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: flex-start;
	align-content: flex-start;
`;

export const ScrollContent = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	width: 100%;
	max-width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
	transition: height 0.5s linear;
`;

export const ContainerRecommendation = styled(Container)`
	margin-top: 25px;
	margin-bottom: 25px;
`

export const RecommendationCard = styled(Card)`
	min-width: 250px;
	margin: 15px 20px 10px 0;
`;

export const RecommendationImage = styled(CardMedia)`
	height: 141px;
`;

export const BoxImage = styled(Box)`
	height: 141px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 80px;
	background-color: rgb(219, 219, 219);
	background-image: url(${props => props.image});
` 