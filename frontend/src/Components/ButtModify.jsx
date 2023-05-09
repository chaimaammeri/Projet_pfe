import React from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const ButtModify = () => {
    return (
        <div>
            <Button variant="contained" color="secondary" startIcon={<SendIcon/>} type="submit" name="agent-search" defaultValue="Send" style={{paddingLeft: '5.5%', paddingRight: '5.5%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >MODIFY</Button>
        </div>
    );
}

export default ButtModify;