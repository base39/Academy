import { FieldStyled } from './style';

function TextInput({ onChange, name, type, value, placeholder }) {
	return (
		<>
			<FieldStyled
				onChange={onChange}
				variant="outlined"
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
			/>
		</>
	);
}

export default TextInput;
