import React from 'react'
import Image from '../../atoms/Image/Image';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';
import Card from '../Card/Card'
import IconText from '../IconText/IconText';
import settings from './../../../Images/setting-4.png'
import avatar from './../../../Images/avatar.png';
import logout from './../../../Images/logout.png';


const cardStyle = {
    height: '275px',
    width: '215px',
    borderRadius: '12px',
    backgroundColor: '#262529',
    padding: '32px'
}

const one = {
    imageStyle: {
        height: '16px',
        width: '16px',
        marginTop: '2px',
        marginRight: '8px'
    },
    isLeft: true,
    isRight: false,
    icon: settings,
    textStyle: {
        color: '#A5A5A6'
    },
    label: "Settings",
    varinet: 'caption2'
}

const two = {
    imageStyle: {
        height: '16px',
        width: '16px',
        marginTop: '2px',
        marginRight: '8px'
    },
    isLeft: true,
    isRight: false,
    icon: logout,
    textStyle: {
        color: '#EC977D'
    },
    label: "Log out",
    varinet: 'caption2'
}

const ProfileCard = () => {
    return (
        <div>
            <Card {...cardStyle}>
                <div style={{ display: 'flex', height: '42px', width: '210px', padding: '16px' }}>
                    <Image imageStyle={{ height: '40px', width: '40px' }} src={avatar} alt='percentage'></Image>
                    <div style={{ height: '42px', width: '126px', marginLeft: '10px' }}>
                        <TypographyComp varient={'h3'} value='Kena Cooper' textStyle={{ color: '#E8E7F0' }} />
                        <TypographyComp varient={'caption2'} value='Edir Profile' textStyle={{ color: '#B4A9FF' }} />
                    </div>
                </div>
                <div style={{borderTop : '1px solid rgb(55 55 56)'}}></div>
                <div style={{ padding: '12px' , marginTop : '10px'}}>
                    <TypographyComp varient={'caption2'} value={'Manage Subscription'} textStyle={{ color: '#A5A5A6' }}></TypographyComp>
                </div>
                <div style={{ padding: '12px' }}>
                    <TypographyComp varient={'caption2'} value={'Help'} textStyle={{ color: '#A5A5A6' }}></TypographyComp>
                </div>
                <div style={{borderTop : '1px solid rgb(55 55 56)', marginTop : '10px'}}></div>
                <div style={{ padding: '12px', marginTop : '10px' }}>
                    <IconText {...one}></IconText>

                </div>
                <div style={{ padding: '12px' }}>
                    <IconText {...two}></IconText>
                </div>
            </Card>
        </div>
    )
}

export default ProfileCard
