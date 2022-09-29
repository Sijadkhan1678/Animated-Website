import React from 'react';
import Lottie from 'lottie-react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import shop from './Assets/109999-animation-for-ecommerce-business-landing-page.json'

const Hero = () => {
  return(
    <Box width='100%' mt={4}>
       <Stack direction={ { xs: 'column', md: 'row' }} justifyContent='space-between'>
          <Box sx={ {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: { md: '50%', xs: '100%' }

    }}>
            <Button variant='outlined' size="large" mb={2} style={{color:'white',borderColor:'pink'}}>
            Shopping Now
            </Button>
            <Typography variant='p' align='center' mt={2.8} color='white'>
             Buy high  quality products with awesome price <br /> <br />
             Get Smooth Experience,
             Fast Delivery
             
            </Typography>
          </Box>
          <Box width={ {
      xs: '100%', md: '50%'

    }}
      mt={4.3}>
            <Lottie animationData={shop} />
          </Box>
       </Stack>
    </Box>
  )

}
export default Hero