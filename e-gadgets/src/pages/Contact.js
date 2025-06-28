import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  return (
    <Layout>
     <Box sx={{
      my:10,ml:10, '& h4':{
      fontWeight:'bold',
      mb:2,
     
     },
      '@media (max-width:600px)':{
          '& h4':{
            fontSize:' 1.5rem',
          }
      }

     
     
     }}>
    <Typography variant='h4'>
 Contact  E-Gadgets.
    </Typography>
    <p>We'd love to hear from you! Whether you have a question
       about our products, need 
      support, or just want to say hello, feel free to reach out.
    </p>
  
     </Box>
     <Box sx={{m:3,width:'600px',ml:10, '@media (max-width:600px)' :{
      width:'300px',
    

     }}}>

      <TableContainer component={Paper}>
      <Table aria-label='contact tabel'>
      <TableHead>
        <TableRow>
          <TableCell sx={{bgcolor:'black', color:'white',}} align='center'>
            contact Details
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
        <TableCell>
        <SupportAgentIcon sx={{color:'red',pt:1}}/> Troll free 100-100-100
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
        <EmailIcon sx={{color:'blue',pt:1}}/> egadget@gmail.com
        </TableCell>
        </TableRow>
      </TableBody>
      <TableRow>
        <TableCell>
        <LocalPhoneIcon sx={{color:'skyblue',pt:1}}/> 9811111111
        </TableCell>
        </TableRow>
      </Table>
      </TableContainer>
     </Box>
    </Layout>
  )
}

export default Contact


