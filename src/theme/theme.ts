import { createTheme } from '@mui/material/styles';
import { TypographyOptions } from "@mui/material/styles/createTypography";
import React from 'react';

export interface ExtendedTypographyOptions extends TypographyOptions {
    subtitle3: React.CSSProperties;
    h2Bold: React.CSSProperties;
    body3: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
}



let theme = createTheme({
    palette: {
        primary: {
            main: '#393552',
        },
        secondary: {
            main: '#6C5DD3',
        },
        success: {
            main: '#2D2D30'
        }
    },
    typography: {
        // button: {
        //     fontSize: '2rem',
        //   },
        h1: {
            fontSize: 36,
            lineHeight: 42 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 700
        },
        h2 : {
            fontSize: 24,
            lineHeight: 29 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 600
        },
        h3 : {
            fontSize: 18,
            lineHeight: 27 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 500
        },
        subtitle1: {
            fontSize: 24,
            lineHeight: 32 + 'px',
            fontFamily: `'test',sans-serif`,
        },
        subtitle2: {
            fontSize: 12,
            lineHeight: 24 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 500
        },
        subtitle3: {
            fontSize: 18,
            lineHeight: 24 + 'px',
            fontFamily: `'test',sans-serif`,
        },
        body1: {
            fontSize: 16,
            lineHeight: 23 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 500
        },
        body2: {
            fontSize: 14,
            lineHeight: 17 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 600
        },
        body3: {
            fontSize: 12,
            lineHeight: 15 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 500

        },
        caption: {
            fontSize: 16,
            lineHeight: 22 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 600
        },
        caption2: {
            fontSize: 12,
            lineHeight: 15 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 600
        },
        caption3: {
            fontSize: 16,
            lineHeight: 20 + 'px',
            fontFamily: `'test',sans-serif`,
            fontWeight : 700
        },
    } as ExtendedTypographyOptions,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "test,sans-serif",
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textTransform : 'none'
                },
            },
        },
    },
});

export default theme;


