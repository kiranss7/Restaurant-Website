import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableContainer, Typography, TableCell, TableHead, TableRow, TableBody } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: '100px', padding: '20px', textAlign: 'center', ml: '10px', "& h3": { fontWeight: 'bold' }, "& p": { fontSize: '25px' } }}>
        <Typography variant="h3" gutterBottom>
          Contact My Restaurant
        </Typography>
        <p>Our Contact Page is designed to make reaching us as seamless as possible. Whether you have a question about our menu, wish to make a reservation, provide feedback on a recent visit, or have any other inquiries, you'll find all the necessary information here. We provide multiple convenient ways to get in touch, including our direct phone number for immediate assistance, an email address for detailed correspondence, and a user-friendly contact form that allows you to send us your message directly from this page. We value your communication and strive to respond to all inquiries promptly and thoughtfully, ensuring your experience with us, even before you step through our doors, is positive and helpful.</p>
      </Box>
      <Box sx={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mt: '30px',
  '@media (min-width: 600px)': {
    fontSize: '1.2rem',
  },
  '@media (max-width: 480px)': {
    padding: '10px',
  },
}}>
  {/* Your content here */}

        <TableContainer component={Paper} sx={{ width: '600px',  }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.2rem', backgroundColor: 'gray' ,cursor: 'pointer'}}>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px' ,cursor: 'pointer'}}>
                  <SupportAgentIcon color="primary" /> Customer Support
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ paddingLeft: '30px' ,cursor: 'pointer'}}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <CallIcon color="secondary" /> 1800-00-0000 (Toll-free)
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ paddingLeft: '30px' ,cursor: 'pointer'}}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <EmailIcon color="success" /> help@myrestaurant.com
                  </Box>
                </TableCell>
              </TableRow>
              {/* You can add more contact details here */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;