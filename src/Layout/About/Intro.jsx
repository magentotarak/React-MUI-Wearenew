import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// data 
import data from './Counter/Counterdata/counterdata';
//components
import Count from './Counter/Count';
import about011 from './images/about-1.jpg';
import about02 from './images/we-change-right-img-1.jpg';
import Aboutacrodean from './Acrodean';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Intro() {
  return (
    <Box>
      <Grid container columns={12}>
        
         <Grid item sm={6} xs={12}>
          <Item>
            <div className='Image_container'>
            <img src={about011} alt='About01' />
            </div>

          </Item>
        </Grid>
        
         <Grid item sm={6} xs={12}>
          <Item>
           
           <h2>We provide the best web services</h2>
           <p><strong>There are many variations of passages of Lorem Ipsum available, but 
           the majority have suffered alteration in some form, by injected humour, or randomised words.</strong></p> 
           <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the lorem ipsum generators on the Internet.</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item className='counterwrapper'>
          {data.counts.map(count => <Count key={count.id} data={count}/>)}
          </Item>
        </Grid>



        <Grid item sm={6} xs={12}>
          <Item>
          <h2>We provide the best web services</h2>
           <p><strong>There are many variations of passages of Lorem Ipsum available, but 
           the majority have suffered alteration in some form, by injected humour, or randomised words.</strong></p> 
           <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All
            the lorem ipsum generators on the Internet.</p>
           <Aboutacrodean/>

          </Item>
        </Grid>
        
         <Grid item sm={6} xs={12}>
          <Item>
           
         
            <img src={about02} alt='about02' />
           
          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}