import { Button } from "@mui/material"
import './CustomButton.css'

export const CustomButton = ({text, color}) => {
  return (
    <Button className="custom-button" variant="contained" sx={{backgroundColor: color}}>
        {text}
    </Button>
  )
}
