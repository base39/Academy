import React from 'react'
import Button from '@material-ui/core/Button'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

function CustomButtom() {

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary">
                    Pesquisar
                </Button>
            </ThemeProvider>
        </div>
    )

}

export default CustomButtom