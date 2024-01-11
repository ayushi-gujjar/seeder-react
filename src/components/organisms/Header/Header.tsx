import React from 'react'
import Image from '../../atoms/Image/Image';
import avatar from './../../../../public/Images/avatar.png';
import arrow from './../../../../public/Images/arrow-bottom.png';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';

const Header = () => {
    return (
        <div style={{display: 'flex' , justifyContent :'space-between' , width : '900px'}}>
            <div>
                <TypographyComp varient={'h2'} value={'Good afternoon ✋'} textStyle={{color : '#E8E7F0'}}></TypographyComp>
                <TypographyComp varient={'h3'} value={'April 02, 2021'} textStyle={{color : '#A5A5A6', marginTop : '5px'}}></TypographyComp>

            </div>
            <div style={{display : 'flex' , justifyContent : 'end'}}>
                <Image imageStyle={{ height: '32px', width: '32px' }} src={avatar} alt='percentage'></Image>
                <Image imageStyle={{ height: '16px', width: '16px', marginTop : '6px' }} src={arrow} alt='percentage'></Image>
            </div>
        </div>
    )
}

export default Header
