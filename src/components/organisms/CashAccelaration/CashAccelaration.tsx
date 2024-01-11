import React from 'react';
import Image from '../../atoms/Image/Image'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import Card from '../../molecules/Card/Card';
import IconText from '../../molecules/IconText/IconText';

const cardStyle = {
    height: '190px',
    width: '700px',
    borderRadius: '12px',
    backgroundColor: '#201F24',
    padding: '32px',
    display: 'flex'
}

const boxStyle = {
    height: '204px',
    width: '190px',
    marginLeft: '20px'
}

const imageStyle = {
    padding: '5px',
    backgroundColor: '#28272B',
    height: '80px',
    width: '80px',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const CashAccelaration = ({ image, iconTextStyle, heading, data }: any) => {
    return (
        <Card {...cardStyle}>
            {data.map((item: any, i: number) => (
                <div style={boxStyle}>
                    <div style={imageStyle}>
                        <Image src={item.icon} {...image} />
                    </div>
                    <div style={{ marginTop: '24px' }}>
                        <IconText label={item.caption}  {...iconTextStyle} />
                    </div>
                    <div style={{ marginTop: '8px' }} >
                        <TypographyComp value={item.heading} {...heading} />
                    </div>
                </div>
            ))}
        </Card>

    )
}

export default CashAccelaration
