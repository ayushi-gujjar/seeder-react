import React, { useEffect, useState } from 'react'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import IconText from '../../molecules/IconText/IconText'
import roundicon from './../../../Images/icon-round.png';
import { Grid, Typography } from '@mui/material';
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';
import SliderComp from '../../atoms/SliderComp/SliderComp';
import Card from '../../molecules/Card/Card';

const heading = {
    imageStyle: {
        height: '24px',
        width: '22px',
        marginTop: '5px',
        marginLeft: '8px',
        marginRight: '8px'
    },
    isLeft: false,
    isRight: true,
    icon: roundicon,
    textStyle: {
        color: '#E8E7F0'
    },
    label: "Summary",
    varinet: 'h2'
}


const cardStyle = {
    width: '310px',
    borderRadius: '12px',
    backgroundColor: '#262529',
    padding: '30px'
}

const SummaryCard = (props: any) => {

    const [total, setTotal] = useState<any>(null)

    const onReviewYourCredit = () => {
        console.log("onReview your credit clicked");
    }

    useEffect(() => {
        const { selectedContracts } = props;
        const calculateTotal = () => {
            const sum = selectedContracts.reduce((accumulator: any, data: any) => {
                return accumulator + data.payment;
            }, 0);
            setTotal(sum);
        }


        calculateTotal();

    }, [props]);

    return (
        <Card {...cardStyle}>
            <div style={{ width: '300px', height: '513px' }}>
                <Grid container>
                    <Grid item container direction="row" justifyContent={'space-between'}>
                        <Grid item xs={12} sm={12}>
                            <IconText {...heading} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'20px'}>
                        <Grid item xs={12} sm={6}>
                            <TypographyComp varient={'body1'} value={'Term'} textStyle={{ color: '#A5A5A6' }} />
                        </Grid>
                        <Grid item xs={12} sm={6} textAlign={'end'}>
                            <TypographyComp varient={'body1'} value={'12 months'} textStyle={{ color: '#E8E7F0' }} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'10px'}>
                        <Grid item xs={12} sm={6}>
                            <TypographyComp varient={'body1'} value={'Selected contracts'} textStyle={{ color: '#A5A5A6' }} />
                        </Grid>
                        <Grid item xs={12} sm={6} textAlign={'end'}>
                            <TypographyComp varient={'body1'} value={'0'} textStyle={{ color: '#E8E7F0' }} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent={'space-between'} style={{ marginTop: '20px' }}>
                        <Grid item xs={12} sm={6}>
                            <TypographyComp varient={'body1'} value={'Slider to autoselect'} textStyle={{ color: '#A5A5A6' }} />
                        </Grid>
                        <Grid item xs={12} sm={6} textAlign={'end'}>
                            <ButtonComp label='Reset' color='secondary' variant='contained' class='resetBtn' enable={false} ></ButtonComp>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent={'space-between'} style={{ marginTop: '10px', padding: '10px' }}>
                        <Grid item xs={12} sm={12}>
                            <SliderComp totalAmount={total} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Typography variant='body1'>
                                <span style={{ color: '#B4A9FF' }}>{`$${total}`}</span>,{' '}
                                <span style={{ color: '#E8E7F0' }}>selected of</span>{' '}
                                <span style={{ color: '#A5A5A6' }}>$880,000.0</span>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'20px'}>
                        <Grid item xs={12} sm={6}>
                            <TypographyComp varient={'body1'} value={'Pay back amount'} textStyle={{ color: '#A5A5A6' }} />
                        </Grid>
                        <Grid item xs={12} sm={6} textAlign={'end'}>
                            <TypographyComp varient={'body1'} value={'$0.00'} textStyle={{ color: '#E8E7F0' }} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'10px'}>
                        <Grid item xs={12} sm={6}>
                            <TypographyComp varient={'body1'} value={'Rate %'} textStyle={{ color: '#A5A5A6' }} />
                        </Grid>
                        <Grid item xs={12} sm={6} textAlign={'end'}>
                            <TypographyComp varient={'body1'} value={'$0.00'} textStyle={{ color: '#E8E7F0' }} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'20px'}>
                        <Grid item xs={12} sm={12}>
                            <div style={{ borderTop: '1px solid rgb(55 55 56)', marginTop: '10px' }}></div>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'20px'}>
                        <Grid item xs={12} sm={6}>
                            <TypographyComp varient={'h3'} value={'Total Payable'} textStyle={{ color: '#A5A5A6' }} />
                        </Grid>
                        <Grid item xs={12} sm={6} textAlign={'end'}>
                            <TypographyComp varient={'h3'} value={'$0.00'} textStyle={{ color: '#E8E7F0' }} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'20px'}>
                        <Grid item xs={12} sm={12}>
                            <ButtonComp onNavChange={props.onReview} variant='contained' color='secondary' class='reniewYourCredit' label={props.isReview ? 'Submit Your Credit' : 'Review Your Card'} enable={total > 0 ? false : true} />
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </Card>
    )
}

export default SummaryCard
