import React, { useEffect, useState } from 'react'
import TypographyComp from '../../atoms/TypographyComp/TypographyComp'
import IconText from '../../molecules/IconText/IconText'
import roundicon from './../../../Images/icon-round.png';
import { Grid, Typography } from '@mui/material';
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';
import SliderComp from '../../atoms/SliderComp/SliderComp';
import Card from '../../molecules/Card/Card';
import { formatCurrency } from './../../../util/NumberFormatUtil';

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

const InfoRow = ({ label, value, v1, v2 }: any) => (
    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'20px'}>
        <Grid item xs={12} sm={6}>
            <TypographyComp varient={v1} value={label} textStyle={{ color: "#A5A5A6" }} />
        </Grid>
        <Grid item xs={12} sm={6} textAlign={'end'}>
            <TypographyComp varient={v2} value={value} textStyle={{ color: '#E8E7F0' }} />
        </Grid>
    </Grid>
);

const SummaryCard = (props: any) => {
    const calculatePercentage = (amount: any, percentage: any) => {
        return (percentage / 100) * amount;
    };

    const [total, setTotal] = useState<any>(null)
    const [rateVal , setRateVal] = useState<any>(0);

    useEffect(() => {
        const { selectedContracts } = props;
        const calculateTotal = () => {
            const sum = selectedContracts.reduce((accumulator: any, data: any) => {
                return accumulator + data.payment;
            }, 0);
            setTotal(sum);
            const rate = calculatePercentage(sum,12);
            setRateVal(rate);
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
                    <InfoRow label='Term' value='12 months' v1={'body1'} v2={'body1'} />

                    <InfoRow label='Selected contracts' value={props.selectedContracts?.length ? props?.selectedContracts?.length : '0'} v1={'body1'} v2={'body1'} />

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
                                <span style={{ color: '#B4A9FF' }}>{`${formatCurrency(total)}`}</span>,{' '}
                                <span style={{ color: '#E8E7F0' }}>selected of</span>{' '}
                                <span style={{ color: '#A5A5A6' }}>{formatCurrency(500000)}</span>
                            </Typography>
                        </Grid>
                    </Grid>
                    <InfoRow label='Pay back amount' value={formatCurrency(total)} v1={'body1'} v2={'body1'} />
                    <InfoRow label='Rate %' value={formatCurrency(rateVal)} v1={'body1'} v2={'body1'} />
                    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'20px'}>
                        <Grid item xs={12} sm={12}>
                            <div style={{ borderTop: '1px solid rgb(55 55 56)', marginTop: '10px' }}></div>
                        </Grid>
                    </Grid>
                    <InfoRow label='Total Payable' value={formatCurrency(total- rateVal)} v1={'h3'} v2={'h3'} />
                    <Grid item container direction="row" justifyContent={'space-between'} marginTop={'20px'}>
                        <Grid item xs={12} sm={12}>
                            <ButtonComp onNavChange={props.onReview} variant='contained' color='secondary' class='reniewYourCredit' label={props.isReview ? 'Submit Your Credit' : 'Review Your Card'} enable={total <= 0} />
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </Card>
    )
}

export default SummaryCard
