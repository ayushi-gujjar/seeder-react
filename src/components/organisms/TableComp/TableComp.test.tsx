import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableComp from './TableComp';

// Mock data for testing
const mockRows = [
    { name: 'My First Advanced', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
    { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
    { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
    { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
    { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' }
]

const mockTableHeaders = ['Name', 'Status', 'Maturity', 'Total recieved', 'Total financed'];

// Mock props for testing
const mockProps = {
    tableHeaders: mockTableHeaders,
    page: 'MY_CASH_KICK',
    rows: mockRows,
    isCheckBox: true,
    headerData: { isTab: false, isBtn: false },
    headerValue: 'Summary',
    checkboxInputChange: jest.fn(),
    activeTab: 'MY_CASH_KICK',
    onTabChane: jest.fn(),
};

describe('TableComp', () => {
    it('renders without crashing', () => {
        render(<TableComp {...mockProps} />);
        expect(screen.getByText('Summary')).toBeInTheDocument();
        // Add more assertions based on your component's structure
    });

    it('displays the correct number of rows', () => {
        render(<TableComp {...mockProps} />);
        const rows = screen.getAllByRole('row');
        // Subtract 1 for the table header row
        expect(rows.length - 1).toEqual(mockRows.length);
    });

    // it('calls checkboxInputChange when a checkbox is clicked', () => {
    //     render(<TableComp {...mockProps} />);
    //     const checkboxes = screen.getAllByRole('checkbox');
    //     fireEvent.click(checkboxes[0]);
    //     expect(mockProps.checkboxInputChange).toHaveBeenCalledWith(mockRows[0], true);
    // });

    // it('calls onTabChane when a tab button is clicked', () => {
    //     render(<TableComp {...mockProps} />);
    //     const myContractsTab = screen.getByText('My Contracts');
    //     fireEvent.click(myContractsTab);
    //     expect(mockProps.onTabChane).toHaveBeenCalledWith('MY_CONTRACTS');
    // });

    it('displays the "No Record Found" image when there are no rows', () => {
        render(<TableComp {...mockProps} rows={[]} />);
        expect(screen.getByAltText('No Record Found')).toBeInTheDocument();
    });

    it('displays the correct number of columns in the table header', () => {
        render(<TableComp {...mockProps} />);
        const headerCells = screen.getAllByRole('columnheader');
        expect(headerCells.length).toEqual(mockTableHeaders.length);
    });

    // it('displays the correct content in table cells', () => {
    //     render(<TableComp {...mockProps} />);
    //     const cellContent = screen.getByText('John Doe');
    //     expect(cellContent).toBeInTheDocument();
    // });

    // Add more test cases based on your component's behavior
});


// const mockTableHeadersTest = ['Header1', 'Header2', 'Header3'];


// test('renders TableComp with headers and rows', () => {
//     render(
//         <TableComp
//             tableHeaders={mockTableHeadersTest}
//             page="HOME"
//             rows={mockRows}
//             isCheckBox={false}
//             headerData={{ isTab: false, isBtn: false }}
//             headerValue="Test Table"
//             checkboxInputChange={() => { }}
//             activeTab="MY_CONTRACTS"
//             onTabChane={() => { }}
//         />
//     );

//     // Check if the table headers are rendered
//     mockTableHeadersTest.forEach((header) => {
//         expect(screen.getByText(header)).toBeInTheDocument();
//     });

//     // Check if the table rows and data are rendered
//     mockRows.forEach((row) => {
//         Object.values(row).forEach((data: any) => {
//             expect(screen.getByText(data)).toBeInTheDocument();
//         });
//     });
// });

// test('renders TableComp with checkboxes', () => {
//     render(
//         <TableComp
//             tableHeaders={mockTableHeadersTest}
//             page="NEW_CASH_KICK"
//             rows={mockRows}
//             isCheckBox={true}
//             headerData={{ isTab: false, isBtn: false }}
//             headerValue="Test Table"
//             checkboxInputChange={() => { }}
//             activeTab="MY_CONTRACTS"
//             onTabChane={() => { }}
//         />
//     );

//     // Check if checkboxes are rendered
//     const checkboxes = screen.getAllByRole('checkbox');
//     expect(checkboxes).toHaveLength(mockRows.length);
// });

test('renders TableComp with tabs', () => {
    const tableHeaders = ['Name', 'Status', 'Type', 'Per Payment', 'Total Financed', 'Total Available'];
    const rows = [
        { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' },
        { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' },
        { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' },
        { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' },
        { name: 'Contract 1', status: 'Available', type: 'Monthly', perPayment: '$12,000.23', totalFinanced: null, totalAvailable: '$126,722.64' }
    ];

    render(
        <TableComp
            tableHeaders={tableHeaders}
            page="MY_CONTACTS"
            rows={rows}
            isCheckBox={false}
            headerData={{ isTab: true, isBtn: true }}
            headerValue="Test Table"
            checkboxInputChange={() => { }}
            activeTab="MY_CONTRACTS"
            onTabChane={() => { }}
        />
    );

    // Check if tabs are rendered
    const myContractsTab = screen.getByText('My Contracts');
    const myCashKicksTab = screen.getByText('My Cash Kicks');

    expect(myContractsTab).toBeInTheDocument();
    expect(myCashKicksTab).toBeInTheDocument();

    // Check if tabs have the correct styles based on the active tab
    expect(myContractsTab).toHaveClass('tab-active');
    expect(myCashKicksTab).not.toHaveClass('tab-active');
});

test('renders TableComp with tabs active tab is cashkick', () => {
    const tableHeaders = ['Name', 'Status', 'Maturity', 'Total recieved', 'Total financed'];
    const rows = [
        { name: 'My First Advanced', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
        { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
        { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
        { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' },
        { name: 'Contract 1', status: 'Pending', maturity: 'April 03,2022', totalReceived: { amount: '$150,000', fee: '12.0' }, totalFinanced: '$170,000' }
    ];

    render(
        <TableComp
            tableHeaders={tableHeaders}
            page="MY_CASH_KICK"
            rows={rows}
            isCheckBox={false}
            headerData={{ isTab: true, isBtn: true }}
            headerValue="Test Table"
            checkboxInputChange={() => { }}
            activeTab="MY_CASHKICK"
            onTabChane={() => { }}
        />
    );

    // Check if tabs are rendered
    const myContractsTab = screen.getByText('My Contracts');
    const myCashKicksTab = screen.getByText('My Cash Kicks');

    expect(myContractsTab).toBeInTheDocument();
    expect(myCashKicksTab).toBeInTheDocument();

    // Check if tabs have the correct styles based on the active tab
    expect(myCashKicksTab).toHaveClass('tab-active');
    expect(myContractsTab).not.toHaveClass('tab-active');
});



test('renders TableComp with checkbox', () => {
    const tableHeaders = ['checkbox', 'Name', 'Type', 'Per Payment', 'Team Length', 'Payment'];
    const rows = [
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '11', fee: '12.0' }, payment: '$126,722.64' },
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' }
    ];

    render(
        <TableComp
            tableHeaders={tableHeaders}
            page="MY_CONTACTS"
            rows={rows}
            isCheckBox={true}
            headerData={{ isTab: false, isBtn: true }}
            headerValue="Test Table"
            checkboxInputChange={() => { }}
            activeTab="MY_CONTRACTS"
            onTabChane={() => { }}
        />
    );

    // Check if tabs are rendered
    const checkboxes = screen.getAllByRole('checkbox');
    // expect(checkboxes).toHaveLength(mockRows.length + 1); // +1 for the header checkbox

    // Check if the header checkbox is rendered
    // const headerCheckbox = screen.getByTestId('header-checkbox');
    // expect(headerCheckbox).toBeInTheDocument();
});

test('handles checkbox change events', () => {
    const mockCheckboxInputChange = jest.fn();

    const tableHeaders = ['checkbox', 'Name', 'Type', 'Per Payment', 'Team Length', 'Payment'];
    const rows = [
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '11', fee: '12.0' }, payment: '$126,722.64' },
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
        { isSelected: false, name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' }
    ];

    render(
        <TableComp
            tableHeaders={tableHeaders}
            page="MY_CONTACTS"
            rows={rows}
            isCheckBox={true}
            headerData={{ isTab: false, isBtn: false }}
            headerValue="Test Table"
            checkboxInputChange={mockCheckboxInputChange}
            activeTab="MY_CONTRACTS"
            onTabChane={() => { }}
        />
    );

    // Check if checkboxes are rendered
    const checkboxes = screen.getAllByRole('checkbox');

    // Simulate changing the header checkbox
    // fireEvent.click(screen.getByTestId('header-checkbox'));
    // expect(mockCheckboxInputChange).toHaveBeenCalledWith(true);

    // Simulate changing an individual checkbox
    // fireEvent.click(checkboxes[1]); // Change the first row's checkbox
    // expect(mockCheckboxInputChange).toHaveBeenCalledWith(false, mockRows[0]);

    // Add more tests as needed for other checkboxes
});


test('renders TableComp with HOME page', () => {
    const tableHeaders = ['Due Date', 'Status', 'Expected Amount', 'OutStanding'];
    const rows = [
        { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' },
        { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' },
        { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' },
        { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' },
        { dueDate: { date: 'Mar 03,2021', days: 31 }, status: 'Upcoming', expectedAmount: '-$14,204.55', outstanding: '$156,250.05' }
    ];

    render(
        <TableComp
            tableHeaders={tableHeaders}
            page="HOME"
            rows={rows}
            isCheckBox={false}
            headerData={{ isTab: false, isBtn: false }}
            headerValue="Test Table"
            checkboxInputChange={() => { }}
            activeTab="MY_CONTRACTS"
            onTabChane={() => { }}
        />
    );


    const rowValue = screen.getAllByRole('row');
    // Subtract 1 for the table header row
    expect(rowValue.length - 1).toEqual(rows.length);

});

test('renders TableComp with NEW_CASH_KICK page', () => {
    const tableHeaders = ['Name', 'Type', 'Per Payment', 'Team Length', 'Payment'];
    const rows = [
        { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '11', fee: '12.0' }, payment: '$126,722.64' },
        { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
        { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
        { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' },
        { name: 'Contract 1', type: 'Monthly', perPayment: '$12,000.23', teamLength: { months: '1', fee: '12' }, payment: '$126,722.64' }
    ];

    render(
        <TableComp
            tableHeaders={tableHeaders}
            page="NEW_CASH_KICK"
            rows={rows}
            isCheckBox={false}
            headerData={{ isTab: false, isBtn: false }}
            headerValue="Test Table"
            checkboxInputChange={() => { }}
            activeTab="MY_CONTRACTS"
            onTabChane={() => { }}
        />
    );


    const rowValue = screen.getAllByRole('row');
    // Subtract 1 for the table header row
    expect(rowValue.length - 1).toEqual(rows.length);

});