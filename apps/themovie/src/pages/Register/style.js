import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

export const FieldStyled = styled(TextField)`
	&& {
		width: 95%;
		margin-left: 20px;
	}
`;

export const ButtonStyled = styled(Button)`
	&& {
		background-color: #01b4e4;
		padding-left: 14px;
		padding-right: 14px;
		font-family: 'Source Sans Pro', Arial, sans-serif;
		font-weight: 700;
		text-transform: none;
		border-radius: 8px;
		line-height: 1.5;
		box-shadow: none;
		&:hover {
			background-color: #018cb1;
			box-shadow: none;
		}
	}
`;

export const ContainerStyled = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
`;

export const LinkRouterStyled = styled(Link)`
	color: rgb(1, 180, 228);
	cursor: pointer;
	font-size: 1em;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	vertical-align: middle;
	text-decoration: none;
	margin-left: 10px;
	&:hover {
		text-decoration: underline;
	}
`;

export const SpanAlert = styled.span`
	color: red;
`;
