import React from 'react'
import IconText from '../IconText/IconText'
import './SideBarBox.css'

const SideBarBox = ({ textIconStyle, headers }: any) => {
    return (

        <div>
            {headers.map((item: any, i : number) => (
                <div key={i} className={`nav-item ${item.isActive ? 'active' : ''}`}>
                    <IconText label={item.value} icon={item.img} {...textIconStyle}></IconText>
                </div>
            ))}
        </div>
    )
}

export default SideBarBox
