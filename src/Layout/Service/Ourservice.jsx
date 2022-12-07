import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import service011 from './images/service1.png';
import service012 from './images/service2.png';
import service013 from './images/service3.png';
import service014 from './images/service4.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Ourservice() {
  return (
    <Box>
      <Grid container columns={12}>
        
         <Grid item sm={6} xs={12}>
          <Item>
            <div className='Image_container'>
            <img src={service011} alt='About01' />
            </div>

          </Item>
        </Grid>
        
         <Grid item sm={6} xs={12}>
          <Item>
           
           <h2>We provide the best web services</h2>
           <p><strong>There are many variations of passages of Lorem Ipsum available, but 
           the majority have suffered alteration in some form, by injected humour, or randomised words.</strong></p> 
           <p>You need to be sure there isn't anything embarrassing hidden in the 
           middle of text. All the lorem ipsum generators on the Internet.</p>
          </Item>
        </Grid>


        <Grid item sm={6} xs={12}>
          <Item>
          <h2>We provide the best web services</h2>
           <p><strong>There are many variations of passages of Lorem Ipsum available, but 
           the majority have suffered alteration in some form, by injected humour, or randomised words.</strong></p> 
           <p>You need to be sure there isn't anything embarrassing hidden in the 
           middle of text. All the lorem ipsum generators on the Internet.</p>

          </Item>
        </Grid>
        
         <Grid item sm={6} xs={12}>
          <Item>
          <div className='Image_container'>
            <img src={service012} alt='service011' />
            </div>
          </Item>
        </Grid>
       

        <Grid item sm={6} xs={12}>
          <Item>
          <div className='Image_container'>
            <img src={service013} alt='service013' />
            </div>

        

          </Item>
        </Grid>
        
         <Grid item sm={6} xs={12}>
          <Item>
          <h2>We provide the best web services</h2>
           <p><strong>There are many variations of passages of Lorem Ipsum available, but 
           the majority have suffered alteration in some form, by injected humour, or randomised words.</strong></p> 
           <p>You need to be sure there isn't anything embarrassing hidden in the 
           middle of text. All the lorem ipsum generators on the Internet.</p>
          </Item>
        </Grid>


        <Grid item sm={6} xs={12}>
          <Item>
          <h2>We provide the best web services</h2>
           <p><strong>There are many variations of passages of Lorem Ipsum available, but 
           the majority have suffered alteration in some form, by injected humour, or randomised words.</strong></p> 
           <p>You need to be sure there isn't anything embarrassing hidden in the 
           middle of text. All the lorem ipsum generators on the Internet.</p>

          </Item>
        </Grid>
        
         <Grid item sm={6} xs={12}>
          <Item>

          <div className='Image_container'>
            <img src={service014} alt='service014' />
            </div>

        

         
          </Item>
        </Grid>


       
        
        
      </Grid>
    </Box>
  );
}