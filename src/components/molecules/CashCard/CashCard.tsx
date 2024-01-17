import React from 'react'
import Image from '../../atoms/Image/Image'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import IconText from '../IconText/IconText'
import './CashCard.css'
const CashCard = ({ iconTextStyle, image, heading }: any) => {
    return (
        <div>
            <div className='calender-img'>
                <Image {...image} />
            </div>
            <div style={{ marginTop: '24px' }}>
                <IconText  {...iconTextStyle} />
            </div>
            <div style={{ marginTop: '8px' }} >
                <TypographyComp {...heading} />
            </div>
        </div>
    )
}

export default CashCard
