import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';
import leftarrow from './../../../Images/arrow-left.png';
import TableComp from '../../organisms/TableComp/TableComp';
import SummaryCard from '../../organisms/SummaryCard/SummaryCard';
import { useNavigate } from 'react-router-dom';
import { getContracts, addNewCashKick } from './../../../api/api';
import DialogComp from '../../organisms/DialogComp/DialogComp';

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
const viewTableHeaders: any = ['Name', 'Type', 'Per Payment', 'Team Length', 'Payment'];
const NewCashkick = () => {
    const [apiData, setApiData] = useState<any>([]);
    const [selectedContracts, setSelectedContracts] = useState<any>([]);
    const [isReview, setIsReview] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [successDialog, setSuccessDialog] = useState<boolean>(false)
    const [error, setError] = useState<any>(null);

    const onReviewCard = (label: string) => {
        setIsReview(true);

        if (label === 'Submit Your Credit') {
            setIsOpen(true);
        }
    }

    const dialogAction = (key: any, value?: any) => {
        console.log(value);
        if (key === 'View Cash Kicks') {
            navigate('/home');
        } else {
            const sum = selectedContracts.reduce((accumulator: any, data: any) => {
                return accumulator + data.payment;
            }, 0);

            
            let obj = {
                name: value,
                status: 'Pending',
                maturity: 'Jan 18, 2024',
                totalReceived: {
                    amount: sum,
                    fee: 12
                },
                totalFinanced: sum
            }
            console.log(obj)
            setSuccessDialog(true);
            addNewCashKick(obj)
        }
    }

    const onSelection = (data: any, checked: any) => {
        if (checked) {
            setSelectedContracts((prevSelectedContracts: any) => [...prevSelectedContracts, data]);
        } else {
            setSelectedContracts((prevSelectedContracts: any) =>
                prevSelectedContracts.filter((item: any) => item.id !== data.id)
            );
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getContracts();
                setApiData(response);
            } catch (error) {
                setError(error);
            }
            console.log(error);
        };

        fetchData();
    }, []);

    useEffect(() => {
    }, [selectedContracts, isReview, isOpen, successDialog]);

    const navigate = useNavigate();
    const onBack = (key: string) => {
        navigate('/cash-acceleration');
    }
    return (
        <div >
            <DialogComp isSuccess={successDialog} onDialogAction={dialogAction} isOpen={isOpen} />
            <Grid container marginTop={'30px'} padding={'10px'}>
                <Grid item xs={12} md={12} sm={12}>
                    <ButtonComp onNavChange={onBack} {...back} />
                </Grid>
                <Grid item container direction={'row'} marginTop={'20px'} columnSpacing={3} style={{ marginTop: '30px' }}>
                    <Grid item xs={12} md={8} sm={8} style={{ backgroundColor: '#28272B', padding: '20px', borderRadius: '12px' }}>
                        <TableComp checkboxInputChange={onSelection} tableHeaders={isReview ? viewTableHeaders : tableHeaders} rows={isReview ? selectedContracts : apiData} page='NEW_CASH_KICK' isCheckBox={!isReview} headerData={{ isTab: false, isBtn: false }} headerValue={'Your Contracts'} />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4} marginLeft={'0px'}>
                        <SummaryCard selectedContracts={selectedContracts} isReview={isReview} onReview={onReviewCard} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default NewCashkick
