import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navbar from './components/layout/Navbar';
import Hero from './components/Hero'
import CartSteps from './components/CartSteps'
import Delivery from './components/DeliveryWorking'
import Footer from './components/Footer'

const App = () => {
  return(
    <Box sx={{
      backgroundImage: 'linear-gradient(90deg,#CC208E,#6713D2)'
    }} color='white'>
    <Navbar />
    <Container maxwidth="md">
    <Hero />
    </Container>
    <CartSteps />
    <Delivery />
    <Footer />
    </Box>
  )
}
export default App