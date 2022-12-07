import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// data 
import data from './Counter/Counterdata/counterdata';
//components
import Count from './Counter/Count';
import about011 from './images/about-1.jpg';
import about012 from './images/about-2.jpg';
import about013 from './images/about-3.jpg';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Shordetails = () => {
  return (
    <>

    <Container className='shordetails_wrapper'>
        <Box>
      <Grid container columns={12}>
        
        
        <Grid item  sm={6} xs={12}>
          <Item>
          
          <Grid container columns={12}>
          
          <Grid item  sm={7} xs={12} className='About_sec_01'>
          <Item>

        <img src={about011} alt='About01' />
          
          </Item>
          </Grid>
          <Grid item  sm={5} xs={12} className='About_sec_02 About_space'>
          <Item> 
          
          <img src={about012} alt='About02' />
          <img src={about013} alt='About03' />

          </Item>
          </Grid>

          </Grid>
           

          </Item>
        </Grid>


        <Grid item  sm={6} xs={12} className='aboutrightsection'>
          <Item>
          <h1>Expert in Global Complex Business Solution</h1>
          <p>Busicox is the great online resource for small business owners. They also provide products, services, 
          and educational opportunities to help entrepreneurs become more competitive.</p>
          <Button variant="contained" href="#contained-buttons">
                Link
              </Button>
          
          </Item>
        </Grid>



        <Grid item xs={12}>
          <Item className='counterwrapper'>
          {data.counts.map(count => <Count key={count.id} data={count}/>)}
          </Item>
        </Grid>
      </Grid>
    </Box>
</Container>
    

    </>
  )
}

export default Shordetails
