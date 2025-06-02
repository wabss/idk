import { Box, Typography } from "@mui/material"
import { Link } from "react-router"
import { CustomButton } from "./CustomButton"

export const GameCard = ({image, title, description, gameLink}) => {
  return (
    <>
        <Box sx={{
          backgroundColor: '#fff', 
          maxWidth: 350, 
          borderRadius: 2, 
          padding: 3, 
          display: "flex", 
          flexDirection: "column", 
          border: '2px solid #000', 
          boxShadow: '0px 4px 0px #000',
          justifyContent: "space-between"
          }}>
            <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
              <Box
                component="img"
                src={image}
                alt="game"
                sx={{ height: 'auto', maxWidth: 300 }}
              />
              <Typography variant="h4" fontWeight={900}>
                {title}
              </Typography>
              <Typography variant="p" fontWeight={500}>
                {description}
              </Typography>
            </Box>
            <Box sx={{justifySelf: "space-between", mt: 2}}>
              <Link to={gameLink}><CustomButton text={'Play'} color={'#44ed26'} /></Link>
            </Box>
        </Box>
    </>
  )
}
