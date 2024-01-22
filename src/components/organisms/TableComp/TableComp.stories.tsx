import type { Meta, StoryObj } from '@storybook/react';
import TableComp from './TableComp';

const meta = {
    title: 'Organisms/TableComp',
    component: TableComp,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

export default meta;
type Story = StoryObj<typeof meta>;




export const homeTable: Story = {
    args: {
        tableHeaders: ['Due Date', 'Status', 'Expected Amount', 'OutStanding'],
        page: 'HOME',
        rows: [
            { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' },
            { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' },
            { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' },
            { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' },
            { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' }
        ],
        headerData: {
            isTab: false,
            isBtn: false,
        },
        headerValue: 'Your Payments'
    }
}

export const myContactsTable: Story = {
    args: {
        tableHeaders: ['Name', 'Status', 'Type', 'Per Payment', 'Total Financed', 'Total Available'],
        page: 'MY_CONTACTS',
        rows: [
            { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' },
            { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' },
            { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' },
            { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' },
            { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' }
        ],
        height: '100px',
        width: '100px',
        borderRadius: '12px',
        backgroundColor: 'gray',
        padding: '10px',
        headerData: {
            isTab: false,
            isBtn: false,
        }
    }
}

export const newCashKickTable: Story = {
    args: {
        tableHeaders: ['checkbox', 'Name', 'Type', 'Per Payment', 'Team Length', 'Payment'],
        page: 'NEW_CASH_KICK',
        isCheckBox: true,
        rows: [
            { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '11', fee: '12.0' }, payment: '$126,722.64' },
            { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
            { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
            { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
            { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' }
        ],
        height: '100px',
        width: '100px',
        borderRadius: '12px',
        backgroundColor: 'gray',
        padding: '10px',
        headerData: {
            isTab: false,
            isBtn: false,
        }
    }
}


export const newCashKickTableView: Story = {
    args: {
        tableHeaders: ['Name', 'Type', 'Per Payment', 'Team Length', 'Payment'],
        isCheckBox: false,
        page: 'NEW_CASH_KICK',
        rows: [
            { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '11', fee: '12.0' }, payment: '$126,722.64' },
            { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
            { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
            { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
            { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' }
        ],
        height: '100px',
        width: '100px',
        borderRadius: '12px',
        backgroundColor: 'gray',
        padding: '10px',
        headerData: {
            isTab: false,
            isBtn: false,
        }
    }
}

export const myCashKicksTable: Story = {
    args: {
        tableHeaders: ['Name', 'Status', 'Maturity', 'Total recieved', 'Total financed'],
        isCheckBox: false,
        page: 'MY_CASH_KICK',
        rows: [
            { name: 'My First Advanced', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
            { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
            { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
            { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
            { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' }
        ],
        height: '100px',
        width: '100px',
        borderRadius: '12px',
        backgroundColor: 'gray',
        padding: '10px',
        headerData: {
            isTab: false,
            isBtn: false,
        }
    }
}


