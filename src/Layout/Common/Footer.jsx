import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Footer = () => {
  return (
    <>
      
      <Box >
      <Grid container columns={12}>
        
         <Grid item sm={4} xs={12}>
          <Item>© 2022 website, Inc.</Item>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Item>Links</Item>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Item>

<FacebookIcon/>
<TwitterIcon/>
<InstagramIcon/>

          </Item>
        </Grid>
      </Grid>
    </Box>

    </>
  )
}

export default Footer;
