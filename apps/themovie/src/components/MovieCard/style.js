import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popover, Card } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const Name = styled.div`
	font-size: 1em;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-weight: 600;
`;

export const CardStyle = styled.div`
	width: ${props => props.width || '203px'};
	height: ${props => props.height};
	max-width: 208px;
	min-width: 150px;
	margin-left: 30px;
	margin-top: 30px;
	position: relative;
	left: 0;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	border: 1px solid #e3e3e3;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	color: #000;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 1em;
	overflow: hidden;
`;

export const ImageContent = styled.div`
	width: ${props => props.width || '208px'};
	height: ${props => props.height || '304px'};
	max-width: 208px;
	min-width: 150px;
	max-height: 312px;
	min-height: 225px;
`;

export const Case = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

export const Poster = styled.img`
	width: 100%;
	height: 100%;
	cursor: pointer;
`;

export const ContentCard = styled.div`
	width: 100%;
	padding: 26px 10px 12px 10px;
	position: relative;
	white-space: normal;
`;

export const LaunchMovie = styled.p`
	font-size: 1em;
	margin: 0;
	padding: 0;
	color: rgba(0, 0, 0, 0.6);
	display: block;
`;
export const PopoverButton = styled.div`
	background-image: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg');
	background-position: center center;
	background-repeat: no-repeat;
	min-width: 1em;
	min-height: 1em;
	width: 1.5em;
	height: 1.5em;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 8px;
	right: 8px;
	z-index: 4;
	opacity: 0.6;
	&:hover {
		cursor: pointer;
		filter: brightness(0) saturate(100%) invert(53%) sepia(33%) saturate(3054%)
			hue-rotate(156deg) brightness(98%) contrast(99%);
		opacity: 1;
	}
`;

export const PopoverContainer = styled.div`
	width: 388px;
	top: 38px;
	left: -15px;
	margin-top: 0px;
	box-shadow: none;
`;

export const PopoverDisplay = styled.div`
	display: flex;
	opacity: 1;
	background-color: #fff;
	border: 1px solid rgba(33, 37, 41, 0.15);
	padding: 0;
	border-radius: 0.25rem;
`;

export const PopoverContent = styled.div`
	background-color: #fff;
	color: #000;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 1em;
	line-height: 1.5;
	list-style: none;
	border-radius: 0.25rem;
	width: 100%;
`;

export const RankItem = styled.div`
	border: none;
	padding: 4 0;
`;

export const NotMember = styled.div`
	border-top: 1px solid rgba(33, 37, 41, 0.15);
	padding: 4 0;
`;

export const Arrow = styled(ChevronRightIcon)`
	top: 8px;
	margin-left: 2px;
	position: relative;
	min-width: 1em;
	min-height: 1em;
	width: 1px;
	height: 1px;
`;

export const PopoverMenu = styled.p`
	color: rgba(0, 0, 0, 1);
	font-size: 0.9em;
	padding: 2px 20px;
	font-weight: 600;
`;

export const PStyled = styled.p`
	margin-top: -5px;
	margin-bottom: 10px;
	padding-bottom: 6px;
	&:hover {
		background-color: rgba(3, 37, 65, 1);
		color: #fff;
		cursor: pointer;
	}
`;

export const PopoverLink = styled(Link)`
	align-items: center;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.6);
	padding: 0px 20px;
	font-size: 0.9em;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		color: #fff;
	}
`;

export const PopoverStyled = styled(Popover)`
	.popoverStyled {
		box-shadow: none;
		overflow: visible;
	}
`;

export const DateStyled = styled.span`
	font-size: 1em;
	margin: 0;
	padding: 0;
	color: rgba(0, 0, 0, 0.6);
`;

export const Consensus = styled.div`
	position: absolute;
	top: -19px;
	left: 10px;
	width: 38px;
	height: 38px;
	box-sizing: border-box;
`;

export const Circle = styled.div`
	margin-right: 0;
	width: 38px;
	height: 38px;
	padding: 2px;
	display: inline-block;
	border-radius: 50%;
	background-color: #081c22;
`;

export const Score = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 100%;
	text-align: center;
`;

export const Percent = styled.div`
	width: 100%;
	height: 100%;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const IconStyled = styled.span`
	display: flex;
	padding-top: 1px;
	padding-left: 1px;
	font-size: 1em;
	color: #fff;
	font-style: normal;
	font-weight: 600;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
`;

export const PercentStyled = styled.div`
	margin-top: 2px;
	padding-top: 1px;
	padding-left: 1px;
	font-size: 0.3em;
	color: #fff;
	font-style: normal;
	font-weight: 600;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
`;

export const CardSkeleton = styled(Card)`
	margin: 30px 0 0 40px;
`;
