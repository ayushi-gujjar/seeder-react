import React from 'react'
import Image from '../../atoms/Image/Image'
import SideBarBox from '../../molecules/SideBarBox/SideBarBox'
import logo from './../../../../public/Images/logo.png'
import home from './../../../../public/Images/home.png';
import coin from './../../../../public/Images/coin.png';
import flash from './../../../../public/Images/flash.png';
import IconText from '../../molecules/IconText/IconText';

const headerList = [
    { value: "Home", img: home, isActie: false },
    { value: "Cash Accleration", img: coin, isActive: true }
]

const sideBarData = {
    headers: headerList,
    textIconStyle: {
        imageStyle: {
            height: '16px',
            width: '16px',
            marginLeft: '8px',
            marginRight: '8px'
        },
        isLeft: true,
        isRight: false,
        // icon: home,
        textStyle: {
            color: '#E8E7F0'
        },
        varinet: 'body2'
    }
}
const footer = {
    imageStyle: {
        height: '16px',
        width: '16px',
        marginLeft: '8px',
        marginRight: '8px'
    },
    isLeft: true,
    isRight: false,
    icon: flash,
    textStyle: {
        color: '#A5A5A6'
    },
    label: "Watch How to",
    varinet: 'body2'
}

const NavBar = () => {
    return (
        <div style={{ height: '768px', width: '250px' }}>
            <Image src={logo} alt={'logo'}></Image>
            <div style={{marginTop : '30px'}}>
                <SideBarBox {...sideBarData}></SideBarBox>
            </div>
            <div style={{ marginTop: '500px',padding : '18px', height : '18px' , width : '200px' }}>
                <IconText {...footer}></IconText>
            </div>
        </div>
    )
}

export default NavBar


// .active {
//     background-color: #2D2D30;
//     color: #E8E7F0 !important;
// }

// .nav-item {
//     padding: 18px;
//     height: 18px;
//     width: 200px;
//     border-radius: 12px;
// }