import styled from 'styled-components';
import Box from '@material-ui/core/Box';

export const SearchPanel = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 30px;
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
	display: flex;
	flex-wrap: wrap;
`;

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

export const FilterWrapper = styled(Box)`
	font-family: 'Source Sans Pro', Arial, sans-serif;
	min-width: 260px;
	width: 260px;
	box-shadow: 3px 3px 4px 0px rgba(181, 179, 181, 0.4);
	padding: 14px 16px;
	margin-top: 15px;
	margin-bottom: 15px;
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

	${props =>
		props.active &&
		`
		border: 1px solid #01b4e4;
		background-color: #01b4e4;
		color: #ffffff;
	`}
`;
