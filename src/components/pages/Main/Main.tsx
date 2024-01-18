import { Grid } from '@mui/material';
import React from 'react';
import Header from '../../organisms/Header/Header';
import NavBar from '../../organisms/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import CashAccelerationPage from '../CashAccelarationPage/CashAccelarationPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NewCashkickPage from '../NewCashKick/NewCashkick';

const Main = () => {
    const navigate = useNavigate();
    const onNavigate = (key: string) => {

        // Use the navigate function to change the route
        if (key === 'Home') {
            navigate('/home');
        } else if (key === 'Cash Accleration') {
            navigate('/cash-acceleration');
        }
    };

    return (
            <div className="main">
                <Grid container>
                    <Grid item xs={2} md={2} >
                        <NavBar onNavigation={onNavigate} />
                    </Grid>
                    <Grid item xs={11} md={9} style={{padding : '20px'}}>
                        <Header />
                        <div>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/home" element={<HomePage />} />
                                <Route path="/cash-acceleration" element={<CashAccelerationPage />} />
                                <Route path="/newcashkick" element={<NewCashkickPage />} />
                            </Routes>
                        </div>
                    </Grid>
                </Grid>
            </div>
    );
};

export default Main;
