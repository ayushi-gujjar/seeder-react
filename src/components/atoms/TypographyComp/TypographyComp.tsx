import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme'

interface TypographyInterface {
    varient: any,
    value: string | number,
    textStyle?: any
}

const TypographyComp = (props: TypographyInterface) => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Typography variant={props.varient} style={props.textStyle} >
                    {props.value}
                </Typography>
            </ThemeProvider>
        </div>
    )
}

export default TypographyComp
