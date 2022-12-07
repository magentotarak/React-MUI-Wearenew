import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DataObjectSharpIcon from '@mui/icons-material/DataObjectSharp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Servicedetails = () => {
  return (
    <>
      

      <Box >
      <Grid container columns={12}>
        <Grid item sm={4} xs={12}>
          <Item>
            <div className='servicecase'>
<DataObjectSharpIcon/>
            <h4 className="dlab-title">Web Development</h4>
            <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.</p>

            </div>
          </Item>
        </Grid>
         <Grid item sm={4} xs={12}>
          <Item>
         
          <div className='servicecase'>
          <ShoppingBagIcon/>
            <h4 className="dlab-title">Web Development</h4>
            <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.</p>
            </div>
          </Item>
        </Grid>
         <Grid item sm={4} xs={12}>
          <Item>

          <div className='servicecase'>
          <SupportAgentIcon/>
            <h4 className="dlab-title">Web Development</h4>
            <p>Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.</p>
            </div>

          </Item>
        </Grid>
         <Grid item sm={4} xs={12}>
          <Item>4</Item>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Item>5</Item>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Item>6</Item>
        </Grid>
      </Grid>
    </Box>


    </>
  )
}

export default Servicedetails
