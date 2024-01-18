import React from 'react'
import ButtonComp from '../../atoms/ButtonComp/ButtonComp'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import Card from '../../molecules/Card/Card'
import { useLocation, useNavigate } from 'react-router-dom'

const temp = {
    height: '220px',
    borderRadius: '12px',
    backgroundColor: '#201F24',
    padding: '32px'
}

const h1Style = {
    color: '#E8E7F0',
    width: '170px'
}

const btnValue: any = {
    label: 'New Cash Kick',
    color: 'secondary',
    variant: 'contained',
    class: 'newCashKick'
}



const QuickAccess = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const onNewCashKick = (key: string) => {
        navigate('/newcashkick');
    }

    return (
        <div>
            <Card {...temp} >
                <TypographyComp varient={'h2'} value='Launch a new Cash Kick' textStyle={h1Style} />
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '300px', marginTop: '12px' }}>
                    <TypographyComp varient={'body1'} value='You have upto' textStyle={{ color: '#A5A5A6' }} />
                    <TypographyComp varient={'caption'} value='$709,546.00' textStyle={{ color: '#C9C8CC', marginLeft: '4px' }} />
                    <TypographyComp varient={'body1'} value='available' textStyle={{ color: '#A5A5A6', marginLeft: '4px' }} />
                    <TypographyComp varient={'body1'} value='for a new cash advance' textStyle={{ color: '#A5A5A6' }} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <ButtonComp onNavChange={onNewCashKick} {...btnValue} />
                </div>
            </Card>
        </div>
    )
}

export default QuickAccess


