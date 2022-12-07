import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function Homeslider(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            slidepic: "https://picsum.photos/id/99/2000/600",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            slidepic: "https://picsum.photos/id/67/2000/600",
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        
        <Paper className='slideriinerbox'>
            <img src={props.item.slidepic}  alt='Hero' />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
       
    )
}

export default Homeslider;