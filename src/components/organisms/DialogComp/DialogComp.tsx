import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InputComp from '../../atoms/InputComp/InputComp';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';
import Image from '../../atoms/Image/Image';
import success from './../../../Images/success.png';

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

const DialogComp = (props: any) => {
    const [open, setOpen] = useState(true);
    const [inputValue, setInputValue] = useState<any>(null);

    const handleClose = () => {
        setOpen(false);
        props.onDialogAction(false);
    };

    const onAction = (key: any) => {
        props.onDialogAction(key, inputValue);
    }

    const onInputChange = (value: any) => {
        setInputValue(value);
    }

    useEffect(() => {
        setOpen(props.isOpen)
    }, [props, inputValue])

    const successBody = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={success} alt='success' />
                <TypographyComp varient={'h2'} value={'Your cash kick is under review'} textStyle={{ color: '#E8E7F0' }} />
                <TypographyComp varient={'body1'} value={'It will remain on pending state until we review it internally. This can take upto 5 mins to couple of hours. Once reviewed, the cash will be transferred to your account and you’ll be notified.'}
                    textStyle={{ color: '#A5A5A6', textAlign: 'center' }} />
            </div>
        )
    }

    const otherBody = () => {
        return (
            <div>
                <TypographyComp varient={'body1'} value={'Cash kick name'} textStyle={{ color: '#B4A9FF' }} />
                <div style={{ width: '100%', marginTop: '10px' }}>
                    <InputComp inputChange={onInputChange}  {...inputCompStyle} />
                </div>
            </div>
        )
    }

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
                    handleClose();
                },
                style: { backgroundColor: '#262529', borderRadius: '12px', color: 'white', width: '760px', height: '530px', padding: '10px' }
            }}
        >
            <DialogTitle>
                <TypographyComp varient={'h1'} value={'Name your cash kick'} textStyle={{ color: '#E8E7F0' }} />
                <TypographyComp varient={'h3'} value={'Add a name to identify your cash kick'} textStyle={{ color: '#A5A5A6', marginTop: '5px' }} />

            </DialogTitle>
            <DialogContent style={{ marginTop: '20px' }}>
                {props.isSuccess ? otherBody() : successBody()}
            </DialogContent>
            <DialogActions>
                <ButtonComp onNavChange={onAction} label='Cancel' color='secondary' variant='contained' class='cancelBtn' />
                <ButtonComp onNavChange={onAction} label={props.isSuccess ? 'View Cash Kicks' : 'Create Cash Kick'} color='secondary' variant='contained' class='createCashKick' />
            </DialogActions>
        </Dialog>
    )
}

export default DialogComp

