import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import TableComp from '../../organisms/TableComp/TableComp';
import QuickAccess from '../../organisms/QuickAccess/QuickAccess';
import testicon from './../../../Images/icon-round.png';
import calender from './../../../Images/calendar.png';
import download from './../../../Images/document-download.png';
import percent from './../../../Images/percentage-square.png';
import { getContracts, getCashKicks } from './../../../api/api';
import Image from '../../atoms/Image/Image';
import IconText from '../../molecules/IconText/IconText';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';
import './CashAccelerationComp.css'


const tableHeaders = ['Name', 'Status', 'Type', 'Per Payment', 'Total Financed', 'Total Available'];
const myCashKicksTableHeaders = ['Name', 'Status', 'Maturity', 'Total recieved', 'Total financed'];
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

const CashCardData = (image: any, iconTextStyle: any, heading: any) => {
    return (
        <div>
            <div className='calender-img'>
                <Image {...image} />
            </div>
            <div style={{ marginTop: '24px' }}>
                <IconText  {...iconTextStyle} />
            </div>
            <div style={{ marginTop: '8px' }} >
                <TypographyComp {...heading} />
            </div>
        </div>
    )

}

const CashAccelerationComp = () => {

    const [myCashKicks, setMyCashKicks] = useState<any>([]);
    const [myContracts, setMyContracts] = useState<any>([]);
    const [activeTab, setActiveTab] = useState<string>('MY_CONTRACTS')
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [tabData, setTabData] = useState<any>([])

    const onTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'MY_CONTRACTS') {
            setTabData(myContracts)
        } else {
            setTabData(myCashKicks)
        }
    }

    useEffect(() => {
        const fetchConttracts = async () => {
            try {
                const response = await getContracts();
                setMyContracts(response);
                setTabData(response);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        const fetchCashLicks = async () => {
            try {
                const response = await getCashKicks();
                setMyCashKicks(response);

            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setLoading(false);
                console.log(loading);
            }
        };

        fetchCashLicks();
        fetchConttracts();

    }, [activeTab])
    console.log(error)
    console.log(tabData)

   


    return (
        <Paper elevation={0} style={{ position: 'relative', padding: '16px', backgroundColor: 'transparent' }}>
            <Grid container justifyContent='space-between' spacing={0}>
                <Grid item xs={12} sm={8} md={8} style={{ backgroundColor: '#201F24', padding: '20px', borderRadius: '12px', paddingTop: '50px', paddingLeft: '60px' }}>
                    <Grid container direction='row' alignItems="center">
                        <Grid item xs={4} md={4} sm={4}>
                            {CashCardData({ src: calender, alt: 'calneder' }, cardOne.iconTextStyle, cardOne.heading)}
                        </Grid>
                        <Grid item xs={4} md={4} sm={4}>
                            {CashCardData({ src: download, alt: 'download' }, cardOne.iconTextStyle, cardOne.heading)}
                        </Grid>
                        <Grid item xs={4} md={4} sm={4}>
                            {CashCardData({ src: percent, alt: 'percent' }, cardOne.iconTextStyle, cardOne.heading)}
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
                    <TableComp onTabChane={onTabChange} activeTab={activeTab} tableHeaders={activeTab === 'MY_CONTRACTS' ? tableHeaders : myCashKicksTableHeaders}
                        rows={activeTab === 'MY_CONTRACTS' ? myContracts : myCashKicks} page={activeTab === 'MY_CONTRACTS' ? 'MY_CONTACTS' : 'MY_CASH_KICK'}
                        isCheckBox={false} headerData={{ isTab: true, isBtn: true }} headerValue={'Your Payments'} />
                </Grid>
            </Grid>
        </Paper>

    )
}

export default CashAccelerationComp
