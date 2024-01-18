import { Input, InputAdornment } from '@mui/material'
import './InputComp.css'
import smile from './../../../Images/smile.png';
import idicon from './../../../Images/direct-notification.png';
import lock from './../../../Images/lock.png';
import eye from './../../../Images/eye.png';

import React, { useEffect, useState } from 'react';

const imageValue: any = {
    'smile': smile,
    'id': idicon,
    'lock': lock,
    'eye': eye
}

const InputComp = ({ inputStyle, isStartAdornment, isEndAdornment, value, startIcon, endIcon, inputChange }: any) => {

    const [inputValue, setInputValue] = useState<any>('');
    const onInputchange = (event: any) => {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        const setData = () => {
            setInputValue(inputValue);
            inputChange(inputValue)
        }
        setData();
    }, [inputValue])

    return (
        <div>
            <Input
                placeholder={value}
                id="outlined-basic input-with-icon-adornment"
                className='input'
                onChange={onInputchange}
                value={inputValue}
                startAdornment={
                    (isStartAdornment ? <InputAdornment position="start">
                        <img src={imageValue[startIcon]} alt="Custom Icon" />
                    </InputAdornment> : '')
                }
                endAdornment={
                    (isEndAdornment ? <InputAdornment position="end">
                        <img src={imageValue[endIcon]} alt="End Icon" />
                    </InputAdornment> : '')
                }
            />
        </div>
    )
}

export default InputComp
