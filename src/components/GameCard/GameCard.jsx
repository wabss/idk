import { Box } from "@mui/material"

export const GameCard = ({image, title, description}) => {
  return (
    <>
        <Box sx={{backgroundColor: '#fff', maxWidth: 400}}>
          <Box
            component="img"
            src={image}
            alt="game"
            sx={{ maxHeight: 300, width: 'auto' }}
          />
        </Box>
    </>
  )
}
