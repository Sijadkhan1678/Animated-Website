import React from 'react';
import {
  Box,
  Stack,
  Link
} from '@mui/material'
import elogo from './elogo.png'

const Navbar = () => {
  return(
    <Box p={4} px={8}>
           <Stack direction='row' justifyContent='space-between'
      alignItems='center'>
             <Box width='10px'>
             <img width='33px' src={elogo} alt='logo' />
             </Box>
             <Stack direction='row' justifyContent={{ 
                   xs: 'space-between',
                   md: 'space-evenly' }}
        width='67%'>
             <Link color='white' href='#' underline="none">Home</Link>
             <Link color='white' href='#' underline='none'>Shop</Link>
             <Link color='white' href='#' underline='none'>About</Link>
             </Stack>
            </Stack>
        </Box>
  )
}
export default Navbar