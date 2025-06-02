import { Button } from "@mui/material"

export const CustomButton = ({text, color}) => {
  return (
    <Button className="custom-button" variant="contained" sx={{backgroundColor: color, border: '2px solid #000', color: '#000', boxShadow: '0px 4px 0px #000'}}>
        {text}
    </Button>
  )
}
