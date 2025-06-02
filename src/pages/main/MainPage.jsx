import { Grid, Typography} from "@mui/material"
import { CustomButton, GameCard } from "../../components"
import './MainPage.css'

export const MainPage = () => {
  return (
    <>
      <Grid container sx={{backgroundColor: '#f060cc', minHeight: '450px'}}>
        <Grid size={{xs: 12, md: 6}} padding={8} sx={{display: 'flex', gap: 4, flexDirection: 'column'}}>
          <div className="text-container">
            <Typography variant="h2" color="white" fontWeight={'900'} sx={{marginBottom: 2}}>
              Welcome to this beautiful page :D
            </Typography>
            <Typography variant="h6" fontWeight={'900'} sx={{marginBottom: 2}}>
              Here are some examples of games that can be developed using React and JavaScript.
            </Typography>
            <CustomButton text={'Learn more about React'} />
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{backgroundColor: '#edc226'}}>
        <Grid size={{xs: 12, md: 6}}>

        </Grid>
        <Grid size={{xs: 12, md: 6}} padding={8}>
          <Typography variant="h4" fontWeight={'900'} sx={{marginBottom: 2}}>
            About this project
          </Typography>
          <Typography variant="h6" fontWeight={'600'} sx={{marginBottom: 2}}>
            I made this project in my spare time as an effort to improve both my english level and skills using programming languages such as JavaScript.
          </Typography>
        </Grid>
        <Grid size={{xs: 12}} padding={8} textAlign={'center'}>
          <Typography variant="h4" fontWeight={'900'}>
            Here are some games
          </Typography>
          <GameCard />
        </Grid>
      </Grid>
    </>
  )
}
