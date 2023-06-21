import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar  sx={{bgcolor:"#36d7b7"}}>
        <Toolbar >
          <Typography variant='h5' align='center' width={"100%"} >JavaScript to Python</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
