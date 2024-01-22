import React from 'react'
import './SideBarBox.css'
import { useLocation } from 'react-router-dom';
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';

const SideBarBox = ({ textIconStyle, headers, onNavChange }: any) => {

    const { pathname } = useLocation();

    const headersVal = headers.map((el: any) => {
        if (pathname === el.path) {
            el.isActive = true;
            el.class = 'navitem-active'
        } else {
            el.isActive = false;
            el.class = 'navitem'
        }
        return el;
    })


    const btn: any = {
        color: 'success',
        variant: 'contained',
        enable: false,
        isStartIcon: true,
    }

    return (
        <div>
            {headersVal.map((item: any) => (
                <div key={`slider${item.value}`} >
                    <ButtonComp onNavChange={onNavChange.onNavigation} class={item.isActive ? 'navitem-active' : 'navitem'} label={item.value} startIcon={item.img} {...btn} />
                    {/* <IconText onNavChange={onNavChange.onNavigation} label={item.value} icon={item.img} {...textIconStyle}></IconText> */}
                </div>
            ))}
        </div>
    )
}

export default SideBarBox
