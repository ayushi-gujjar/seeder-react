import React from 'react';
import Header from '../../organisms/Header/Header'
import NavBar from '../../organisms/NavBar/NavBar'
// import './Home.css'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import TableComp from '../../organisms/TableComp/TableComp';
import QuickAccess from '../../organisms/QuickAccess/QuickAccess';
import CashCard from '../../molecules/CashCard/CashCard';
import testicon from './../../../Images/icon-round.png';
import calender from './../../../Images/calendar.png';
import download from './../../../Images/document-download.png';
import percent from './../../../Images/percentage-square.png';


const tableHeaders = ['Name', 'Status', 'Type', 'Per Payment', 'Total Financed', 'Total Available'];

const cardOne = {
    heading: {
        varient: 'h2',
        value: '12 months',
        textStyle: {
            color: '#E8E7F0'
        }
    },
    iconTextStyle: {
        imageStyle: {
            height: '16px',
            width: '16px',
            marginTop: '5px',
            marginLeft: '8px',
            marginRight: '8px'
        },
        isLeft: false,
        isRight: true,
        icon: testicon,
        textStyle: {
            color: '#C9C8CC'
        },
        label: "Team Cap",
        varient: 'body1'
    }
}

const CashAccelerationComp = () => {
    return (
        <div className='main'>
            <Grid container>
                <Grid item xs={3} style={{ flexBasis: '18%' }}>
                    <NavBar />
                </Grid>
                <Grid item xs={9} style={{ padding: '10px', flexBasis: '81%', maxWidth: '80%' }}>
                    <Header />
                    <Paper elevation={3} style={{ position: 'relative', padding: '16px', backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <Grid container spacing={4}>
                            {/* Left side */}
                            <Grid item xs={8} container style={{
                                backgroundColor: '#201F24', padding: '40px', borderRadius: '12px', marginLeft: '15px',
                                justifyContent: 'space-around', height: '285px', marginTop: '15px'
                            }}>
                                <CashCard image={{ src: calender, alt: 'calneder' }} {...cardOne} />
                                <CashCard image={{ src: download, alt: 'download' }} {...cardOne} />
                                <CashCard image={{ src: percent, alt: 'percent' }} {...cardOne} />
                            </Grid>
                            {/* Right side */}
                            <Grid item xs={3} container>
                                <QuickAccess />
                            </Grid>
                        </Grid>
                    </Paper>
                    <div style={{ marginTop: '30px', backgroundColor: '#28272B', padding: '20px', borderRadius: '12px', marginLeft: '15px' }}>
                        <TableComp tableHeaders={tableHeaders} rows={[]} page='HOME' isCheckBox={false} headerData={{ isTab: true, isBtn: true }} headerValue={'Cash accleration'} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CashAccelerationComp
