import React, { useEffect, useState } from 'react'
import './Home.css'
import { Grid, Paper } from '@material-ui/core';
import TableComp from '../../organisms/TableComp/TableComp';
import banner from './../../../Images/banner.png';
import Image from '../../atoms/Image/Image';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';
import QuickAccess from '../../organisms/QuickAccess/QuickAccess';
import { getPayments } from './../../../api/api';
import PaymentsCard from '../../molecules/PaymentsCard/PaymentsCard';
import testicon from './../../../Images/icon-round.png';
import receipt from './../../../Images/receipt-text.png'
import CircleGraph from '../../../util/CircleGraph';

const tableHeaders = ['Due Date', 'Status', 'Expected Amount', 'OutStanding'];

const paymentCard = {
    image: {
        src: receipt,
        alt: 'receipt'
    },
    heading: {
        varient: 'h2',
        value: '$14,204.55',
        textStyle: {
            color: '#E8E7F0'
        }
    },
    tag: {
        isTag : true,
        varient: 'body2',
        value: 'Due in 30 day(s)',
        textStyle: {
            color: '#201F24'
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
        label: "Due - May 03, 2021 ",
        varient: 'body1'
    }
}

const paymentCard2 = {
    image: {
        src: receipt,
        alt: 'receipt'
    },
    heading: {
        varient: 'h2',
        value: '$170,454.55',
        textStyle: {
            color: '#E8E7F0'
        }
    },
    tag: {
        isTag : false,
        varient: 'body2',
        value: 'Outstanding amount',
        textStyle: {
            color: '#201F24'
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
        label: "Outstanding amount",
        varient: 'body1'
    }
}

const Home = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPayments();
                setData(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
                console.log(loading, 'loading');
            }
            console.log(error, 'error')
        };

        fetchData();
    }, []);

    return (
        <div className='main'>
            <Paper elevation={3} style={{ position: 'relative', paddingLeft: '16px', paddingTop: '16px', backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Grid container justifyContent='space-between'>
                    <Grid item xs={9} sm={8}>
                        <Grid container justifyContent='space-between'>
                            <Grid item xs={6} sm={6} md={6}>
                                <PaymentsCard isGraph={false} {...paymentCard} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <PaymentsCard isGraph={true} {...paymentCard2} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <QuickAccess />
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: '30px', backgroundColor: '#28272B', padding: '20px', borderRadius: '12px' }}>
                    <Grid item xs={12} md={12}>
                        <TableComp tableHeaders={tableHeaders} rows={data} page='HOME' isCheckBox={false} headerData={{ isTab: false, isBtn: false }} headerValue={'Your Payments'} />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Home

{/* <Image src={banner} alt="Big Image" imageStyle={{ width: '800px', height: '285px' }} /> */ }
{/* <div style={{ position: 'absolute', top: '20%', left: '8%', transform: 'translate(-50%, -50%)', color: '#fff', marginLeft: '-49px', width: '532px' }}>
    <TypographyComp varient={'h2'} textStyle={{ color: '#FFFFFF', marginLeft: '265px' }} value={'Congratulations you are ready to start!'} />
    <div style={{ display: 'flex', width: '590px', marginTop: '10px' }}>
        <TypographyComp varient={'body1'} textStyle={{ color: '#E8E7F0', marginLeft: '266px' }} value={'You are approved for funding. We are ready to advance you up to'} />
        <TypographyComp varient={'caption3'} textStyle={{ color: '#E8E7F0', marginLeft: '265px' }} value={'$8.8M'} />
    </div>
    <div style={{ marginTop: '20px' }}>
        <ButtonComp label='Learn More' color='secondary' variant='outlined' class='learMore' />
    </div>
</div> */}