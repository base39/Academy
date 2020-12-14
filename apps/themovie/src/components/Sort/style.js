import styled from 'styled-components';
import Box from '@material-ui/core/Box';

export const LoadMoreStyled = styled.button`
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
	}
`;

export const SortWrapper = styled(Box)`
	font-family: 'Source Sans Pro', Arial, sans-serif;
	min-width: 260px;
	width: 260px;
	box-shadow: 3px 3px 4px 0px rgba(181, 179, 181, 0.4);
	padding: 14px 16px;
`;

export const OrderWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const OrderTitle = styled.h3`
	margin-bottom: 7px;
	font-size: 14px;
	font-weight: 200;
	color: #717171;
`;

export const FilterNameWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgba(181, 179, 181, 0.4);
	cursor: pointer;
`;

export const FilterNameTitle = styled.h2`
	font-size: 16px;
`;