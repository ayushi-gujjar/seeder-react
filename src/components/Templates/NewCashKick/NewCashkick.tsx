import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';
import leftarrow from './../../../Images/arrow-left.png';
import TableComp from '../../organisms/TableComp/TableComp';
import SummaryCard from '../../organisms/SummaryCard/SummaryCard';
import { useNavigate } from 'react-router-dom';
import { getNewCashKickContracts } from './../../../api/api';

const back: any = {
    label: 'Back',
    color: 'success',
    variant: 'contained',
    class: 'backBtn',
    enable: false,
    isStartIcon: true,
    startIcon: leftarrow
}
const tableHeaders: any = ['checkbox', 'Name', 'Type', 'Per Payment', 'Team Length', 'Payment'];

const NewCashkick = () => {
    const [data, setData] = useState([]);

   const onReviewCard = () => {
    console.log("in new cash kick template");
   }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getNewCashKickContracts();
                console.log(response)
                setData(response);
            } catch (error) {
                // setError(error);
            } finally {
            }
        };

        fetchData();
    }, []);


    const navigate = useNavigate();
    const onBack = (key: string) => {
        navigate('/cash-acceleration');
    }
    return (
        <div >
            <Grid container marginTop={'30px'} padding={'10px'}>
                <Grid item xs={12} md={12} sm={12}>
                    <ButtonComp onNavChange={onBack} {...back} />
                </Grid>
                <Grid item container direction={'row'} marginTop={'20px'} columnSpacing={3} style={{ marginTop: '30px' }}>
                    <Grid item xs={12} md={8} sm={8} style={{ backgroundColor: '#28272B', padding: '20px', borderRadius: '12px' }}>
                        <TableComp tableHeaders={tableHeaders} rows={data} page='NEW_CASH_KICK' isCheckBox={true} headerData={{ isTab: false, isBtn: false }} headerValue={'Your Contracts'} />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4} marginLeft={'0px'}>
                        <SummaryCard onReview={onReviewCard} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default NewCashkick
