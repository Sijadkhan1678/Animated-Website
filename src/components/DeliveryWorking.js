import React from 'react';
import Lottie from 'lottie-react';
import {Box,Typography} from '@mui/material';
import delivery from './Assets/merch-stores-imprint-genius.json';


const Delivery = () => {
  return(
    <Box mt={12}>
    <Typography variant='h4' ml={4} component='small' borderBottom='2px solid yellow'>
      Delivery Working 
    </Typography>
    
    <Box width='75%' m='0 auto' mt={8}>
    <Lottie animationData={delivery} />
    </Box>
    </Box>
    
    )
}
export default Delivery