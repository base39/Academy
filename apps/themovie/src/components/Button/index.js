import { ButtonStyled } from './style';

function Button({ onClick, name }) {
	return (
		<>
			<ButtonStyled variant="contained" color="primary" onClick={onClick}>
				{name}
			</ButtonStyled>
		</>
	);
}

export default Button;
