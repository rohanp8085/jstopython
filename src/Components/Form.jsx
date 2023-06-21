import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const Form = ({fetchKeywords}) => {

  const [text , setText] = useState("")

    const handleSubmit = (e) =>{
     e.preventDefault()
     fetchKeywords(text)
    
    };

  return (
    <>
    <Container   sx={{p:10,color:"white"}}>
        <Typography variant='h4'align='center' fontWeight={"bold"} >keyword Extractor App</Typography>
        <Typography  align='center' variant='body1'> Paste your text here to Get keywords</Typography>
        <Box mt={5} component={"form"} onSubmit={(e)=>handleSubmit(e)}>
        <TextField className='input'
          id="outlined-multiline-static"
          
          label="Paste your Text here"
          multiline
          rows={10}
          fullWidth
          required
          value={text}
          onChange={(e)=>setText(e.target.value)}
          
          
        />
       <Button id='button' type='submit' fullWidth sx={{mt:2,bgcolor:"#36d7b7 "}} variant="contained" endIcon={<SaveAltIcon />} >
          Submit
       </Button>
        </Box>
    </Container>
    </>
  )
}

export default Form
