import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'
import InputComp from '../../atoms/InputComp/InputComp';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';

const inputCompStyle = {
    value: 'My first advance',
    inputStyle: {
        border: '1px solid',
        borderRadious: '12px',
        width: '100%'
    },
    isStartAdornment: false,
    isEndAdornment: false,
    startIcon: 'smile'
}

const DialogComp = () => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                },
                style: { backgroundColor: '#262529', borderRadius: '12px', color: 'white', width: '740px', height: '330px', padding: '10px' }
            }}
        >
            <DialogTitle>
                <TypographyComp varient={'h1'} value={'Name your cash kick'} textStyle={{ color: '#E8E7F0' }} />
                <TypographyComp varient={'h3'} value={'Add a name to identify your cash kick'} textStyle={{ color: '#A5A5A6', marginTop: '5px' }} />

            </DialogTitle>
            <DialogContent style={{ marginTop: '20px' }}>
                <TypographyComp varient={'body1'} value={'Cash kick name'} textStyle={{ color: '#B4A9FF' }} />
                <div style={{ width: '100%', marginTop: '10px' }}>
                    <InputComp  {...inputCompStyle} />
                </div>
            </DialogContent>
            <DialogActions>
                <ButtonComp label='Cancel' color='secondary' variant='contained' class='cancelBtn' />
                <ButtonComp label='Create Cash Kick' color='secondary' variant='contained' class='createCashKick' />
            </DialogActions>
        </Dialog>
    )
}

export default DialogComp

