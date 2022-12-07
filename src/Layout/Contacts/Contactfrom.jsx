import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

export const ContactUs = () => {

   
    const form = useRef();
    const [fullnameName, setFirstName] = useState('');
    const [custemail, setCustemail] = useState('');
    const [custmsg, setCustmsg] = useState('');
    const sendEmail = (event) => {
        event.preventDefault();
        setFirstName('');
        setCustemail('');
        setCustmsg('');

        emailjs.sendForm('service_mztp2nk', 'template_h8y1jgo', form.current, 'da-4cejb1i5HTElHf')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>

           


            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
               
                 ref={form} onSubmit={sendEmail} 
            >
                <div>
               
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        value={fullnameName}
                        type="text"
                        name="user_name" 
                        onChange={event => setFirstName(event.target.value)}
                        
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        value={custemail}
                        type="email"
                        name="user_email"
                        onChange={event => setCustemail(event.target.value)}
                    />
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={8}
                        placeholder="Minimum 3 rows"
                        name="message" 
                        value={custmsg}
                        onChange={event => setCustmsg(event.target.value)}

                    />




<Button  type="submit" value="Send" >
        Send
      </Button>
     
           
                </div>
                

            </Box>

        </>
    );
};