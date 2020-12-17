import {
    AlertStyled,
    DivAlert
} from './style'

function ToastAlert({ variant, severity, msg }) {

    return(
        <DivAlert>		
            <AlertStyled variant={variant} severity={severity}>
                {msg}
            </AlertStyled>
        </DivAlert>
    )
}

export default ToastAlert