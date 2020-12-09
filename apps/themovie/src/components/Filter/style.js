import styled from 'styled-components';
import Box from '@material-ui/core/Box';

export const FilterWrapper = styled(Box)`
	font-family: 'Source Sans Pro', Arial, sans-serif;
	min-width: 260px;
	width: 260px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	padding: 14px 16px;
	margin-top: 30px;
	border-radius: 8px;
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

export const SelectWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SelectTitle = styled.h3`
	margin-bottom: 7px;
	font-size: 14px;
	font-weight: 200;
	color: #717171;
`;

export const SelectList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const SelectItem = styled.li`
	margin: 8px 6px 0px 0px;
`;

export const SelectItemLink = styled.a`
	display: block;
	padding: 4px 12px;
	border: 1px solid #717171;
	border-radius: 15px;
	text-decoration: none;
	color: #000000;
	font-size: 0.9em;

	&:hover {
		border: 1px solid #01b4e4;
		background-color: #01b4e4;
		color: #ffffff;
	}

	&.active {
		border: 1px solid #01b4e4;
		background-color: #01b4e4;
		color: #ffffff;
	}
`;
