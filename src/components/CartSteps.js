import React from 'react';
import {
  Box,
  Grid,
  Typography
} from '@mui/material';
import CartStep from './CartStep';
import CartStepData from './CartStepData'
const CartSteps = () => {
console.log('cart step',CartStepData)
  return (
    <Box mt={8}>
        <Typography variant='h4' ml={3} component='small' borderBottom='2px solid white'>
         Cart Working
        </Typography>
        
        <Grid container justifyContent='center'  spacing={3.8}>
      { CartStepData.map( step => <CartStep key={step.id} step={step} />)}
        </Grid>
      </Box>
  )
}
export default CartSteps