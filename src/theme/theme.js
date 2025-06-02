import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
        primary: {
            main: "#f75c28"  
        },
        secondary: {
            main: "#FFC300"  
        },
        tertiary: {
            main: "#FFDB58"  
        },
        background: {
            default: "#edc226"
        },
        text: {
            primary: "#000"  
        }
    }
    ,
    typography: {
        fontFamily: "'Inter', 'sans-serif'"
    }
});