import { FieldStyled } from "./style"

function TextInput({onChange, name}) {
    return (
        <>
            <FieldStyled
                onChange={onChange}
                variant="outlined"
                name={name}
           />
        </>
    )
}

export default TextInput