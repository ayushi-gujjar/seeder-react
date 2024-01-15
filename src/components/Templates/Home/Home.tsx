import React from 'react'
import Header from '../../organisms/Header/Header'
import NavBar from '../../organisms/NavBar/NavBar'
import './Home.css'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import TableComp from '../../organisms/TableComp/TableComp';
import banner from './../../../Images/banner.png';
import Image from '../../atoms/Image/Image';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';
import QuickAccess from '../../organisms/QuickAccess/QuickAccess';

const tableHeaders = ['Due Date', 'Status', 'Expected Amount', 'OutStanding'];


const Home = () => {
    return (
        <div className='main'>
            <Grid container>
                <Grid item xs={3} style={{ flexBasis: '18%' }}>
                    <NavBar />
                </Grid>
                <Grid item xs={9} style={{ padding: '10px', flexBasis: '81%', maxWidth: '80%' }}>
                    <Header />
                    <Paper elevation={3} style={{ position: 'relative', padding: '16px', backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <Grid container>
                            {/* Left side */}
                            <Grid item xs={9} container>
                                <Image src={banner} alt="Big Image" imageStyle={{ width: '930px', height: '285px' }} />
                                <div style={{ position: 'absolute', top: '45%', left: '8%', transform: 'translate(-50%, -50%)', color: '#fff', marginLeft: '-49px', width: '532px' }}>
                                    <TypographyComp varient={'h2'} textStyle={{ color: '#FFFFFF', marginLeft: '265px' }} value={'Congratulations you are ready to start!'} />
                                    <div style={{ display: 'flex', width: '590px', marginTop: '10px' }}>
                                        <TypographyComp varient={'body1'} textStyle={{ color: '#E8E7F0', marginLeft: '266px' }} value={'You are approved for funding. We are ready to advance you up to'} />
                                        {/* <TypographyComp varient={'caption3'} textStyle={{ color: '#E8E7F0', marginLeft: '265px' }} value={'$8.8M'} /> */}
                                    </div>
                                    <div style={{ marginTop: '20px' }}>
                                        <ButtonComp label='Learn More' color='secondary' variant='outlined' class='learMore' />
                                    </div>
                                </div>
                            </Grid>
                            {/* Right side */}
                            <Grid item xs={3} container>
                                <QuickAccess />
                            </Grid>
                        </Grid>
                    </Paper>
                    <div style={{ marginTop: '30px', backgroundColor: '#28272B', padding: '20px', borderRadius: '12px', marginLeft: '15px' }}>
                        <TableComp tableHeaders={tableHeaders} rows={[]} page='HOME' isCheckBox={false} headerData={{isTab : false,isBtn : false}} headerValue={'Your Payments'} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home


// tableHeaders, page, rows, isCheckBox, headerData