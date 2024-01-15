import React from 'react'
import Image from '../../atoms/Image/Image';
import avatar from './../../../Images/avatar.png';
import arrow from './../../../Images/arrow-bottom.png';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';
import { Paper, Grid, Typography, Avatar } from '@mui/material';

const Header = () => {
    return (
        <Paper elevation={3} style={{ width: '100%', marginBottom: '10px', backgroundColor: 'transparent', boxShadow : 'none', marginTop : '35px' }}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <TypographyComp varient={'h2'} value={'Good afternoon ✋'} textStyle={{ color: '#E8E7F0' }}></TypographyComp>
                    <TypographyComp varient={'h3'} value={'April 02, 2021'} textStyle={{ color: '#A5A5A6', marginTop: '5px' }}></TypographyComp>
                </Grid>
                <Grid item>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Image imageStyle={{ height: '32px', width: '32px' }} src={avatar} alt='percentage'></Image>
                        <Image imageStyle={{ height: '16px', width: '16px', marginTop: '6px', marginLeft : '3px' }} src={arrow} alt='percentage'></Image>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Header
