import styled from 'styled-components';
import Box from '@material-ui/core/Box';

export const SortWrapper = styled(Box)`
	font-family: 'Source Sans Pro', Arial, sans-serif;
	min-width: 260px;
	width: 260px;
	box-shadow: 3px 3px 4px 0px rgba(181, 179, 181, 0.4);
	padding: 14px 16px;
`;

export const NameWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgba(181, 179, 181, 0.4);
	cursor: pointer;
`;

export const NameTitle = styled.h2`
	font-size: 16px;
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
