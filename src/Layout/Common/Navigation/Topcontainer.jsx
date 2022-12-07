import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Topcontainer() {
  return (
    <div className='topcontainer'>
    <Container>
      <Box sx={{ flexGrow: 1 }}>
       
        <Grid container className='top_csll_row' >
          
          <Grid item sm={4} xs={12} className='top_cell'>
            <Item className='top_cell'><h2>WEARE</h2></Item>
          </Grid>
          
          <Grid item sm={4} xs={12} className='top_cell'>
            <Item className='top_cell'><h3><CallIcon />+9609556892</h3></Item>
          </Grid>
          
          <Grid item sm={4} xs={12} >
            <Item className='top_cell linkcell'>
              <Button variant="contained" href="#contained-buttons">
                Link
              </Button></Item>
          </Grid>
        
        </Grid>
      </Box>
    </Container>
    </div>

  );
}