import { ButtonStyled } from './style';

function Button({ onClick, name, disabled }) {
	return (
		<>
			<ButtonStyled
				variant="contained"
				color="primary"
				onClick={onClick}
				disabled={disabled}
			>
				{name}
			</ButtonStyled>
		</>
	);
}

export default Button;
