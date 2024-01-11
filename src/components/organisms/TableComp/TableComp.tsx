import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TableComp.css';
import { Typography } from '@mui/material';
import TypographyComp from '../../atoms/TypographyComp/TypographyComp';
import IconText from '../../molecules/IconText/IconText';
import roundicon from './../../../../public/Images/icon-round.png';
import refresh from './../../../../public/Images/refresh-2.png';
import ButtonComp from '../../atoms/ButtonComp/ButtonComp';


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
    label: "Cash acceleration",
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

const tabBtn = {
    label: 'My Contracts',
    color: 'primary',
    variant: 'contained',
    class: 'tabBtn'
}

interface headerMode {
    tabs : boolean,
    leftHead : boolean,
    rightHead : boolean
}

const TableComp = ({ tableHeaders, headerMode }: any) => {

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                <IconText  {...tableHeader} />
                <IconText  {...tableHeader2} />
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <ButtonComp label='My Contracts' color='primary' variant='contained' class='tab-active' />
                <div style={{ marginLeft: '10px' }}>
                    <ButtonComp label='My Cash Kicks' color='primary' variant='contained' class='tabBtn' />
                </div>
            </div>
            <TableContainer component={Paper} sx={{ overflow: 'hidden', boxShadow: 'none !important', borderRadius: 0, backgroundColor: '#201F24', marginTop: '30px' }}>
                <Table sx={{ minWidth: 950, borderRadius: '15px' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#262529', color: '#A5A5A6' }}>
                            {tableHeaders.map((item: any, i: number) => (
                                <TableCell key={i} sx={{ backgroundColor: '#262529', color: '#A5A5A6', border: 'none !important', borderRadius: `${i == 0 ? '8px 0px 0px 8px' : '0px 8px 8px 0px'}` }}>{item} </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                                    <TypographyComp varient='body2' value={'Contract 1'} textStyle={{ color: '#E8E7F0' }} />
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                                    <div style={{ display: 'flex' }}>
                                        <TypographyComp varient='body2' value={'Available'} textStyle={{ color: '#E8E7F0', backgroundColor: '#2D2D30', padding: '5px', borderRadius: '4px' }} />
                                    </div>
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                                    <TypographyComp varient='body2' value={'Monthly'} textStyle={{ color: '#A5A5A6' }} />
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                                    <TypographyComp varient='body2' value={'$12,000.25'} textStyle={{ color: '#A5A5A6' }} />
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                                    <TypographyComp varient='body2' value={'-'} textStyle={{ color: '#A5A5A6' }} />
                                </TableCell>
                                <TableCell sx={{ backgroundColor: '#201F24', color: '#E8E7F0', borderRadius: 0, border: 'none !important' }}>
                                    <TypographyComp varient='body2' value={'$126,722.64'} textStyle={{ color: '#A5A5A6' }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}

export default TableComp



