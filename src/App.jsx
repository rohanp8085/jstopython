import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FadeLoader} from 'react-spinners'

const App = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    
    
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    p: 8,
    

  };
   
  const [keywords , setKeywords] = useState("")
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setKeywords("")
  }

  
const fetchKeywords = async(text) =>{
  handleOpen()
  
   const options = {
    
      method : 'POST',
      headers : {
           'Content-type': 'application/json',
           Authorization : `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
      },
      body : JSON.stringify({
        model: 'text-davinci-003',
        prompt: 
        ' javascript to python: \n\n' +
         text + 
         '', 
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0, 
        frequency_penalty: 0.8,
        presence_penalty: 0.0, 
        
      })
    
   };

   try {
    const response =  await fetch(import.meta.env.VITE_OPENAI_URL , options)
    const data = await response.json()
    setKeywords(data.choices[0].text)
    
   } catch (error) {
     console.log(error);
   }

};

  return (
  <>
   <Navbar/>
   <Form  fetchKeywords={fetchKeywords}/>
   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <Typography bgcolor={"#36d7b7"} position={"absolute"} p={1}  right={0}top={0} align='center' width={400} id="modal-modal-title" variant="h6" component="h2">
          JavaScript to Python
          </Typography>
         {
          keywords ? (
            <Typography  align='center' id="modal-modal-description" sx={{ mt: 1 }}>
            {keywords}
            </Typography>
          ) : (
           <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center"}} > <FadeLoader  color="#36d7b7" /></Typography>         )
         }
        </Box>
      </Modal>
     
   </>
  )
}

export default App
