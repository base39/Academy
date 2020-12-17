import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

export const TitleStyled = styled.h1`
	color: #000;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 1.3em;
	margin-left: 20px;
	margin-right: 20px;
`;

export const ParagraphStyled = styled.p`
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 1em;
	margin-left: 20px;
	margin-right: 20px;
`;

export const AcessStyled = styled.label`
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 1em;
	margin-left: 20px;
	margin-right: 20px;
	line-height: 1.5;
`;

export const ContainerStyled = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
`;

export const LinkStyled = styled.a`
	color: rgb(1, 180, 228);
	cursor: pointer;
	font-size: 1em;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	&:hover {
		text-decoration: underline;
	}
`;

export const LinkRouterStyled = styled(Link)`
	color: rgb(1, 180, 228);
	cursor: pointer;
	font-size: 1em;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
	&:nth-child(2) {
		margin-left: 10px;
	}
`;
