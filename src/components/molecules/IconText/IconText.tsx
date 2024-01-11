import { Grid } from '@mui/material'
import React from 'react'
import Image from '../../atoms/Image/Image'
import InputComp from '../../atoms/InputComp/InputComp'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import testicon from './../../../../public/Images/icon-round.png';

const textStyle = {
    color: '#E8E7F0'
}

const imageStyle = {
    height: '24px',
    width: '22px',
    marginTop: '5px',
    marginLeft: '8px',
    marginRight: '8px'
}



const IconText = ({ isLeft, isRight, imageStyle, icon, textStyle, label, varinet }: any) => {
    return (
        <div>
            <div style={{ display: 'flex' }} className='display-flex'>
                {isLeft ? <Image imageStyle={imageStyle} src={icon} alt="image" /> : ''}
                <TypographyComp varient={varinet} value={label} textStyle={textStyle} />
                {isRight ? <Image imageStyle={imageStyle} src={testicon} alt="image" /> : ''}
            </div>
        </div>
    )
}

export default IconText
