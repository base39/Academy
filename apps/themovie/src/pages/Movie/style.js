import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const InnerContent = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	width: 100%;
	box-sizing: border-box;
`;

export const ContentContainer = styled.div`
	max-width: 1300px;
	width: 100vw;
	padding-left: 40px;
	padding-right: 40px;
	padding-top: 30px;
	padding-bottom: 30px;
`;

export const TitleMovieDiv = styled.div`
	width: 100%;
`;

export const Titleh2 = styled.h2`
	font-family: 'Source Sans Pro', Arial, sans-serif;
	width: 100%;
	margin: 0;
	padding: 0;
	font-size: 1.6rem;
	font-weight: 600;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	align-content: flex-start;
`;

export const ColumnDiv = styled.div`
	max-width: 960px;
	width: calc(100vw - 80px - 260px);
	display: flex;
	flex-wrap: wrap;
	flex: 0 1 auto;
	padding-left: 30px;
	padding-right: 0px;
	padding-top: 0px;
	padding-bottom: 0px;
	background: transparent;
`;

export const Panel = styled.section`
	width: 100%;
	display: block;
	padding: 30px 0;
`;
export const Results = styled.div`
	margin-top: -30px;
	margin-left: -30px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
`;

export const PageContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	box-sizing: border-box;
`;

export const LoadMoreStyled = styled(Button)`
	margin-top: 30px;
	margin-left: 30px;
	background-color: #01b4e4;
	border: none;
	width: 97%;
	height: 50px;
	color: #fff;
	box-shadow: none;
	text-align: center;
	font-size: 1.5em;
	font-weight: 700;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	cursor: pointer;
	&:hover {
		color: #0a1526;
		background-color: #01b4e4;
	}
`;