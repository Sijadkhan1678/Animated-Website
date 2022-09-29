import React from 'react';
import {Grid,Typography,Box} from '@mui/material'
import Lottie from 'lottie-react';


const CartStep = ({step}) => {

  return(
    <Grid item  xs={10} md={4} align='center' mt={5}>
    <Box>
        <Typography variant='p' mb={1} component='p'>
       {step.desc1}
       
        </Typography>
        <Typography variant='p'>
          {step.desc2}
        </Typography>
        </Box>
        <Box width='70%' mt={step.id===231 ? 5: 0}>
         <Lottie animationData={step.img}  />
         </Box>
        </Grid>
  )
}
export default CartStep;