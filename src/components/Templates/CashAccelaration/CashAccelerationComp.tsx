import React from 'react';
import { Grid, Paper } from '@material-ui/core';
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
        <Paper elevation={0} style={{ position: 'relative', padding: '16px', backgroundColor: 'transparent' }}>
            <Grid container justifyContent='space-between' spacing={0}>
                <Grid item xs={12} sm={8} md={8} style={{ backgroundColor: '#201F24', padding: '20px', borderRadius: '12px', paddingTop: '50px', paddingLeft: '60px' }}>
                    <Grid container direction='row' alignItems="center">
                        <Grid item xs={4} md={4} sm={4}>
                            <CashCard image={{ src: calender, alt: 'calneder' }} {...cardOne} />
                        </Grid>
                        <Grid item xs={4} md={4} sm={4}>
                            <CashCard image={{ src: download, alt: 'download' }} {...cardOne} />
                        </Grid>
                        <Grid item xs={4} md={4} sm={4}>
                            <CashCard image={{ src: percent, alt: 'percent' }} {...cardOne} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} md={4} container style={{ justifyContent: 'end' }}>
                    <div style={{ width: '405px' }}>
                        <QuickAccess />
                    </div>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: '30px', backgroundColor: '#28272B', padding: '20px', borderRadius: '12px' }}>
                <Grid item xs={12} md={12}>
                    <TableComp tableHeaders={tableHeaders} rows={[]} page='HOME' isCheckBox={false} headerData={{ isTab: false, isBtn: false }} headerValue={'Your Payments'} />
                </Grid>
            </Grid>
        </Paper>

    )
}

export default CashAccelerationComp
