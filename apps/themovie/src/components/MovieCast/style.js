import styled from 'styled-components'
import {
	Card,
	CardMedia,
	CardContent,
	Container,
	Box,
	Typography,
	CardActionArea
} from '@material-ui/core'

export const CastCard = styled(Card)`
	min-width: 150px;
	margin: 15px 20px 10px 0;
`

export const CastImage = styled(CardMedia)`
	height: 185px;
`

export const BoxImage = styled(Box)`
	height: 185px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 80px;
	background-color: rgb(219,219,219);
	background-image: url(${props =>
		props.image})
`

export const CastCardContent = styled(CardContent)`
	padding: 10px;
`

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

export const ContainerCast = styled(Container)`
	margin-top: 20px;
`

export const CastName = styled(Typography)`
		font-weight: 700;
`

export const CardContentArea = styled(CardActionArea)`
`