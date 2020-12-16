import { FieldStyled } from './style';

function TextInput({ onChange, name, placeholder }) {
	return (
		<>
			<FieldStyled onChange={onChange} variant="outlined" name={name} placeholder={placeholder} />
		</>
	);
}

export default TextInput;
