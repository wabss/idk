import { Grid, Typography, Box} from "@mui/material"
import { CustomButton, GameCard } from "../../components"
import './MainPage.css'
import { games } from "../../data"

export const MainPage = () => {
  return (
    <>
      <Grid container sx={{backgroundColor: '#f060cc', minHeight: '450px'}}>
        <Grid size={{xs: 12, md: 6}} padding={8} sx={{display: 'flex', gap: 4, flexDirection: 'column'}}>
          <Box sx={{maxWidth: '555px'}}>
            <Typography variant="h2" color="white" fontWeight={'900'} sx={{marginBottom: 2}}>
              Welcome to this beautiful page :D
            </Typography>
            <Typography variant="h6" fontWeight={'900'} sx={{marginBottom: 2}}>
              Here are some examples of games that can be developed using React and JavaScript.
            </Typography>
            <CustomButton text={'Learn more about React'} />
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{backgroundColor: '#edc226'}}>
        <Grid size={{xs: 12, md: 6}}>

        </Grid>
        <Grid container justifyContent="center" size={{xs: 12, md: 6}} padding={8}>
          <Box sx={{maxWidth: 700}}>
            <Typography variant="h4" fontWeight={'900'} sx={{marginBottom: 2}}>
              About this project
            </Typography>
            <Typography variant="h6" fontWeight={'600'} sx={{marginBottom: 2}}>
              I made this project in my spare time as an effort to improve both my english level and skills using programming languages such as JavaScript.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs: 12}} padding={8} sx={{display: 'flex', gap: 4, padding: 4, textAlign: 'center', flexDirection: "column"}}>
          <Typography variant="h4" fontWeight={'900'}>
            Here are the games
          </Typography>
          <Box sx={{display: 'flex', gap: 4, padding: 4, justifyContent: "center", flexWrap: "wrap"}}>
            {Object.values(games).map((game) => (
              <GameCard 
                title={game.title} 
                description={game.description} 
                image={game.image} 
                gameLink={game.gameLink} 
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
