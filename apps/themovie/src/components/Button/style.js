import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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