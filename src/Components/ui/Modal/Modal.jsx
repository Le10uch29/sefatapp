import { Box, Button, Modal } from "@mui/material";
import React from "react";
import styles from './_modal.module.scss'

export function ModalUI(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70%",
        bgcolor: 'background.paper',
        
        boxShadow: 24,
        p: 4,
      };
    return(
        <>
            <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} >
        <div className={styles.Box}>
            
        </div>
  </Box>
</Modal></>
    
    )
}