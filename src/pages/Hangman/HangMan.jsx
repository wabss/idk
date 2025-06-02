import { Box, Grid, Fade, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import './Hangman.css'

export const HangMan = () => {

const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    let timeout;
    timeout = setTimeout(() => {
      setIsLoading(false)
      }, 3000)
  }, [])

  return (
    <>
      {isLoading && (
        <Fade in={true} timeout={1000} mountOnEnter unmountOnExit>
          <Grid className='aligner'>
              <Typography variant="h2" sx={{ padding: 2, textAlign: 'center' }}>
                  Loading
              </Typography>
          </Grid>
        </Fade>
      )}
    {!isLoading && (
      <Fade in={true} timeout={1000} mountOnEnter unmountOnExit>
        <Grid container className='aligner'>
          <Typography variant="h2" sx={{ padding: 2, textAlign: 'center' }}>
            Main Content
          </Typography>
        </Grid>
      </Fade>
    )}
    </>
  )
}
