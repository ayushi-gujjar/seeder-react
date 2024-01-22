import React from 'react'
import Image from '../../atoms/Image/Image'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import testicon from './../../../Images/icon-round.png';

const IconText = ({ isLeft, isRight, imageStyle, icon, textStyle, label, varinet, onNavChange }: any) => {

    const onClickIconText = () => {
        if (onNavChange) onNavChange(label);
    }

    return (
        <button
            style={{ display: 'flex', backgroundColor: 'transparent' , border : 'none' }}
            tabIndex={0}
            onClick={onClickIconText}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    onClickIconText();
                }
            }}
        >
            {isLeft ? <Image imageStyle={imageStyle} src={icon} alt="image" /> : ''}
            <TypographyComp varient={varinet} value={label} textStyle={textStyle} />
            {isRight ? <Image imageStyle={imageStyle} src={testicon} alt="image" /> : ''}
        </button>
    )
}

export default IconText
