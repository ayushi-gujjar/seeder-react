import React from 'react'
import Image from '../../atoms/Image/Image'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import IconText from '../IconText/IconText'
import './PaymentsCard.css'
import CircleGraph from '../../../util/CircleGraph'

const PaymentsCard = ({ image, iconTextStyle, heading, tag, isGraph }: any) => {
    return (
        <div className='cash-card'>
            {
                tag.isTag ? <div className='tag'>
                    <TypographyComp {...tag} />
                </div> : null
            }
            <div className='calender-img'>
                {isGraph ? <div style={{marginTop : '10px'}}> <CircleGraph percentage={3} /></div> : <Image {...image} />}
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

export default PaymentsCard
