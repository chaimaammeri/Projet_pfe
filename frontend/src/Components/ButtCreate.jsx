import React from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const ButtCreate = () => {
    return (
        <div>
              <Button variant="contained" color="secondary" startIcon={<SendIcon/>} type="submit" name="agent-search" defaultValue="CREATE" style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >CREATE</Button>

        </div>
    );
}

export default ButtCreate;