import React from 'react';
import {
  Stack,
  Typography
} from '@mui/material'

const Footer = () => {
  return (
    <Stack p={2} py={8}
          direction='row'
          justifyContent='space-between' 
          mt={12} 
          bgcolor='black'>
       
         <Stack spacing={1.5} align='center'>
         <Typography variant='h6'>
          MENU
         </Typography>
         <Typography variant='p'>
           Home
         </Typography>
         <Typography variant='p'>
           Shop
         </Typography>
         <Typography variant='p'>
         Affliate 
         </Typography>
         <Typography variant='p'>
          Catagory
         </Typography>
         </Stack>
      
           <Stack spacing={1.5} align='center'>
           <Typography variant='h6'>
          Need Help
           </Typography>
             <Typography variant='p'>
              Privacy Policy
           </Typography>
            <Typography variant='p'>
              Contact Us
           </Typography>
            <Typography variant='p'>
           Return Policy
           </Typography>
            <Typography variant='p'>
             FAQ
            </Typography>
           </Stack>
        
         <Stack spacing={1.5} align='center'>
           <Typography variant='h6'>
           Social Links
           </Typography>
           <Typography variant='p'>
            Facebook
           </Typography>
           <Typography variant='p'>
            Instagram
           </Typography>
           <Typography variant='p'>
           Twitter
           </Typography>
           <Typography variant='p'>
           Youtube
           </Typography>
         </Stack>
         
       </Stack>
  )
}
export default Footer