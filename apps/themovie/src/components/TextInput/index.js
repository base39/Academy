import { FieldStyled } from './style';

function TextInput({ onChange, name, type, value }) {
	return (
		<>
			<FieldStyled
				onChange={onChange}
				variant="outlined"
				name={name}
				type={type}
				value={value}
			/>
		</>
	);
}

export default TextInput;
