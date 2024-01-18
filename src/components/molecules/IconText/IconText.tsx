import React from 'react'
import Image from '../../atoms/Image/Image'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import testicon from './../../../Images/icon-round.png';

const IconText = ({ isLeft, isRight, imageStyle, icon, textStyle, label, varinet, onNavChange }: any) => {

    const onClickIconText = () => {
        if (onNavChange) onNavChange(label);
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
