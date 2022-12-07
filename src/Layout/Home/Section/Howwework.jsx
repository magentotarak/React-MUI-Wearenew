import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Howwework() {
    return (
        <div className='howwork_wrapper'>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
        
                    <Grid container className='Gridouter'>
                        <Grid item sm={4} xs={12}>
                            <Item>
                                <div className="step-wrapper">
                                    <h2 className="step-title color1">Strategy</h2>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12} >
                            <Item className='middlegrid'>
                                <span className='designicon'><DesignServicesIcon /></span>
                                <div className='sectiondevider'></div>
                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Item><p className="step-text">We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.</p></Item>
                        </Grid>
                    </Grid>
                    <Grid container className='Gridouter'>
                        <Grid item sm={4} xs={12}>
                            <Item>

                            <p className="step-text">We define your competition and target audience. 
                            Discover what is working in your online industry, then design your website accordingly.</p>
                               

                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12} >
                            <Item className='middlegrid'>
                                <span className='designicon'><BrushOutlinedIcon /></span>
                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Item>
                            <div className="step-wrapper">
                                    <h2 className="step-title color1">Design</h2>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container className='Gridouter'>
                        <Grid item sm={4} xs={12}>
                            <Item>
                                <div className="step-wrapper">
                                    <h2 className="step-title color1">Development</h2>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12} >
                            <Item className='middlegrid'>
                                <span className='designicon'><DesignServicesIcon /></span>
                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Item><p className="step-text">We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.</p></Item>
                        </Grid>
                    </Grid>
                    <Grid container className='Gridouter'>
                        <Grid item sm={4} xs={12}>
                            <Item>

                            <p className="step-text">We define your competition and target audience. 
                            Discover what is working in your online industry, then design your website accordingly.</p>
                               

                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12} >
                            <Item className='middlegrid'>
                                <span className='designicon'><DesignServicesIcon /></span>
                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Item>
                            <div className="step-wrapper">
                                    <h2 className="step-title color1">Testing and Launch</h2>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>

                    <Grid container className='Gridouter'>
                        <Grid item sm={4} xs={12}>
                            <Item>
                            <div className="step-wrapper">
                                    <h2 className="step-title color1">Support</h2>
                                </div>
                           
                               

                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12} >
                            <Item className='middlegrid'>
                                <span className='designicon'><DesignServicesIcon /></span>
                            </Item>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Item>
                            <p className="step-text">We define your competition and target audience. 
                            Discover what is working in your online industry, then design your website accordingly.</p>
                            </Item>
                        </Grid>
                    </Grid>
                    
                </Box>
            </Container>
            
        </div>
      
    );
}