import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15, textAlign: 'center',p:4, "& h2": { fontWeight: 'bold', color: 'goldenrod' }, 
      "& p": { fontSize: '30px',textAlign: 'justify'}, '@media (max-width: 600px)': { "& p": { fontSize: '15px' },"& h2":{fontSize:'1.5rem'} } }}>
        <Typography variant='h2'>
          Welcome To My Restaurant
        </Typography>
        <p>Our restaurant offers a warm and inviting ambiance, 
          designed to create a memorable dining experience for every guest. 
          We are passionate about crafting delicious and authentic dishes using fresh, 
          high-quality ingredients, sourced locally whenever possible. 
          Our menu showcases a diverse range of culinary delights, 
          prepared with meticulous attention to detail and a commitment to satisfying every palate. 
          Beyond the exceptional food, we pride ourselves on providing attentive and friendly service, 
          ensuring a comfortable and enjoyable visit from the moment you walk through our doors until your departure. 
          We strive to be more than just a place to eat; we aim to be a welcoming gathering spot where friends, 
          families, and food lovers can connect and create lasting memories.</p>
          <br />
          <p>Our commitment extends beyond just serving exceptional food; we aim to cultivate a welcoming and inclusive environment where every guest feels valued and appreciated. We believe in fostering genuine connections through warm hospitality and personalized attention, ensuring that your dining experience is both satisfying and memorable. From the carefully selected décor to the thoughtfully curated music, every detail is designed to enhance your comfort and enjoyment. We are dedicated to continuous improvement, always seeking new ways to elevate our offerings and exceed your expectations, making our restaurant a place you'll want to return to time and time again.</p>
      </Box>
    </Layout>
  )
}

export default About
