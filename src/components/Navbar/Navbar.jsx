import { Link } from 'react-router'
import { Grid } from '@mui/material'
import './Navbar.css'

export const Navbar = () => {
  return (
    <Grid className='container' sx={{gap: 4, padding: 2}}>
      <Link className='link' to={'/'}>Home</Link>
      <Link className='link' to={'/draggame'}>Dragger</Link>
      <Link className='link' to={'/hangman'}>Hangman</Link>
    </Grid>
  )
}
