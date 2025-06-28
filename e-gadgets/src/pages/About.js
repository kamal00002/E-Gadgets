import React from 'react';
import Layout from '../components/layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
          textAlign:'center',
          p:2,
         '& h4':{
          fontWeight:'bold',
            my:2,
            fontSize:'2rem',

         },
         '& p':{
          textAlign:'justify',

         },
         '@media (max-width:600px)':{
          mt:0,
          '& h4':{
            fontsize:'1.5rem',

          }

         }
      }}>

    
      <Typography variant='h4'>
Welcome to  E-Gadgets.
      </Typography>
      <p>E-gadget competition one-stop shopping gang.  The online 
        store includes the latest products from the electronics, 
        exclusive products in the phone,Laptop & Accessories segment.  </p>
    
      <br/>
      <p>E-Gadget is not just an ordinary online store. We are proud to
         standout from our competitors with our products and service. our 
         products are the best in quality which is supported by an 
        incredible warranty as well as the most competitive price in the market.
      </p>
      
      </Box>  
    </Layout>
  )
}

export default About


