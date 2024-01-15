import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TableComp.css';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';
import IconText from '../../molecules/IconText/IconText';
import roundicon from './../../../Images/icon-round.png';
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';
import refresh from './../../../Images/refresh-2.png';
import cheque from './../../../Images/Cheque.png';
import Image from './../../atoms/Image/Image'
import CheckboxComp from '../../atoms/CheckboxComp/CheckboxComp';

const tableHeader = {
    imageStyle: {
        height: '22px',
        width: '20px',
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
    varinet: 'h2'
}

const tableHeader2 = {
    imageStyle: {
        height: '22px',
        width: '20px',
        marginLeft: '8px',
        marginRight: '8px'
    },
    isLeft: true,
    isRight: false,
    icon: refresh,
    textStyle: {
        color: '#B4A9FF'
    },
    label: "Sync Now",
    varinet: 'caption'
}

const generateTableBody = (data: any, page: 'HOME' | 'MY_CONTACTS' | 'NEW_CASH_KICK' | 'MY_CASH_KICK', isCheckBox: boolean) => {
    if (!data || data.length === 0) {
        return (
            <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: 'rgb(40, 39, 43)' }}>
                    <TableCell colSpan={6}>
                        <Image src={cheque} alt='No Record Found' imageStyle={{ position: 'relative', left: '40%', marginTop: '65px' }} />
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }

    if (page === 'HOME') {
        return (
            homeTableBoday(data)
        )
    }
    if (page === 'MY_CONTACTS') {
        return (
            myContacts(data)
        )
    }
    if (page === 'NEW_CASH_KICK') {
        return (
            newCashKickTableBody(data, isCheckBox)
        )
    }
    if (page === 'MY_CASH_KICK') {
        return (
            myCashKickTableBody(data)
        )
    }
};

const myContacts = (data: any) => {
    return (
        <TableBody>
            {data.map(({ name, status, type, perPayment, totalFinanced, totalAvailable }: any, index: number) => (
                <TableRow
                    key={name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: 'rgb(40, 39, 43)' }}>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={name ? name : '-'} textStyle={{ color: '#E8E7F0' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <div style={{ display: 'flex' }}>
                            <TypographyComp varient='body2' value={status ? status : '-'} textStyle={{ color: '#E8E7F0', backgroundColor: '#2D2D30', padding: '5px', borderRadius: '4px' }} />
                        </div>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={type ? type : '-'} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={perPayment ? perPayment : '-'} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={totalFinanced ? totalFinanced : '-'} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={totalAvailable ? totalAvailable : '-'} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

const homeTableBoday = (data: any) => {
    return (
        <TableBody style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {data.map((row: any, index: number) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: 'rgb(40, 39, 43)' }}>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <div >
                            <TypographyComp varient='body2' value={row.dueDate.date} textStyle={{ color: '#E8E7F0' }} />
                            <TypographyComp varient='subtitle2' value={`${row.dueDate.days} day(s) from now`} textStyle={{ color: '#A5A5A6' }} />

                        </div>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <div style={{ display: 'flex' }}>
                            <TypographyComp varient='body2' value={row.status} textStyle={{ color: '#E8E7F0', backgroundColor: '#2D2D30', padding: '5px', borderRadius: '4px' }} />
                        </div>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={row.expectedAmount} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={row.outstanding} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

const newCashKickTableBody = (data: any, ischeckbox: boolean) => {
    return (
        <TableBody>
            {data.map(({ isSelected, name, type, perPayment, teamLength, payment }: any, index: number) => (
                <TableRow
                    key={name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: 'rgb(40, 39, 43)' }}>
                    {/* <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <CheckboxComp isMargin={false} />

                    </TableCell> */}
                    {ischeckbox ? (
                        <>
                            <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                                <CheckboxComp isMargin={false} />
                            </TableCell>
                        </>
                    ) : null}

                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={name ? name : '-'} textStyle={{ color: '#E8E7F0' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={type ? type : '-'} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={perPayment ? perPayment : '-'} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <div>
                            <TypographyComp varient='body2' value={teamLength.months ? `${teamLength.months} Months` : '-'} textStyle={{ color: '#A5A5A6' }} />
                            <TypographyComp varient='caption2' value={teamLength.fee ? `${teamLength.fee}% fee` : '-'} textStyle={{ color: '#A5A5A6' }} />
                        </div>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={payment ? payment : '-'} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

const myCashKickTableBody = (data: any) => {
    return (
        <TableBody>
            {data.map(({ name, status, maturity, totalReceived, totalFinanced }: any, index: number) => (
                <TableRow
                    key={name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: 'rgb(40, 39, 43)' }}>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={name ? name : '-'} textStyle={{ color: '#E8E7F0' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <div style={{ display: 'flex' }}>
                            <TypographyComp varient='body2' value={status ? status : '-'} textStyle={{ color: '#E8E7F0', backgroundColor: '#2D2D30', padding: '5px', borderRadius: '4px' }} />
                        </div>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={maturity ? maturity : '-'} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <div>
                            <TypographyComp varient='body2' value={totalReceived.amount ? `${totalReceived.amount} Months` : '-'} textStyle={{ color: '#A5A5A6' }} />
                            <TypographyComp varient='caption2' value={totalReceived.fee ? `${totalReceived.fee}% fee` : '-'} textStyle={{ color: '#A5A5A6' }} />
                        </div>
                    </TableCell>
                    <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                        <TypographyComp varient='body2' value={totalFinanced ? totalFinanced : '-'} textStyle={{ color: '#A5A5A6' }} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}


const TableComp = ({ tableHeaders, page, rows, isCheckBox, headerData, headerValue }: any) => {
    console.log(tableHeader);
    const { isTab, isBtn } = headerData;
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                <IconText label={headerValue} {...tableHeader} />
                {isBtn ? <IconText  {...tableHeader2} /> : ''}

            </div>
            {isTab ?
                <div style={{ display: 'flex', marginTop: '5px' }}>
                    <ButtonComp label='My Contracts' color='primary' variant='contained' class='tab-active' />
                    <div style={{ marginLeft: '10px' }}>
                        <ButtonComp label='My Cash Kicks' color='primary' variant='contained' class='tabBtn' />
                    </div>
                </div> : ''}
            <TableContainer component={Paper} sx={{ overflow: 'hidden', boxShadow: 'none !important', borderRadius: 0, backgroundColor: 'rgb(40, 39, 43)', marginTop: '30px', overflowY: 'scroll', height: '365px' }}>
                <Table sx={{ minWidth: 950, borderRadius: '15px' }} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#262529', color: '#A5A5A6' }}>
                            {tableHeaders.map((item: any, i: number) => (
                                <React.Fragment key={i}>
                                    {item === 'checkbox' ? (
                                        <CheckboxComp isMargin={true} />
                                    ) : (
                                        <TableCell key={i} sx={{ backgroundColor: '#262529', color: '#A5A5A6', border: 'none !important', borderRadius: `${i === 0 ? '8px 0px 0px 8px' : '0px 8px 8px 0px'}` }}>
                                            {item}
                                        </TableCell>
                                    )}
                                </React.Fragment>
                            ))}
                        </TableRow>
                    </TableHead>
                    {
                        generateTableBody(rows, page, isCheckBox)
                    }
                </Table>
            </TableContainer>
        </div >
    )
}

export default TableComp



