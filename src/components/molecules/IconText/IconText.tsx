import React from 'react'
import Image from '../../atoms/Image/Image'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import testicon from './../../../Images/icon-round.png';

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



const IconText = ({ isLeft, isRight, imageStyle, icon, textStyle, label, varinet,onNavChange }: any) => {

   const onClickIconText = () => {
        console.log('here in click');
        onNavChange(label);
    }

    return (
        <div>
            <div style={{ display: 'flex' }} className='display-flex' onClick={onClickIconText}>
                {isLeft ? <Image imageStyle={imageStyle} src={icon} alt="image" /> : ''}
                <TypographyComp varient={varinet} value={label} textStyle={textStyle} />
                {isRight ? <Image imageStyle={imageStyle} src={testicon} alt="image" /> : ''}
            </div>
        </div>
    )
}

export default IconText
