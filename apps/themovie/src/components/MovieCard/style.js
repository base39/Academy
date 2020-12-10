import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popover } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const CardStyle = styled.div`
	max-width: 200px;
	margin: 1rem;
	position: relative;
	border: 1px solid #e3e3e3;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	color: #000;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 1em;
	overflow: hidden;
`;

export const Image = styled.div`
	max-width: 100%;
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
	display: flex;
	justify-content: space-between;
	padding: 1rem;
`;

export const Name = styled.h3`
	margin: 0;
	font-size: 1em;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-weight: 600;
`;

export const VoteAverage = styled.span`
	color: #2b56dc;
	font-weight: bold;
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
	height: 198px;
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
	font-size: 0.8em;
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
	font-size: 0.8em;
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
