import searchIcon from '../images/search.png'
import './user-table.scss'
import TableData from '../../jsonData.json'

import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import actionIcon from '../images/lock.png'
import {Link} from 'react-router-dom'



function UserTableData() {
    const [gridApi, setGridApi] = useState(null);

    const columnDefs = [
        { field: 'ID', checkboxSelection: true },
        { field: 'FirstName' },
        { field: 'LastName' },
        { field: 'EmailId' },
        { field: 'Phone' },
        { field: 'ServiceAmount' },
        { field: 'LastActivity' },
        {
            headerName: 'Action', cellRendererFramework: (params) => <div className='actionIcon'>
                <Link to='./edit-user' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                </Link>
            </div>
        }
    ]

    const defaultColDef = {
        sortable: true,
    }

    function onGridReady(params) {
        setGridApi(params.api);
    }
    const onFilterTextChange = (e) => {
        gridApi.setQuickFilter(e.target.value)
    }

    return (
        <div>
            <div className='tableSearchContainer'>
                <img src={searchIcon} />
                <input type='search' placeholder='search....' onChange={onFilterTextChange} />
            </div>
            <div className="ag-theme-alpine" style={{ height: 410, width: 1020 }}>
                <AgGridReact
                    onGridReady={onGridReady}
                    animateRows={true}
                    rowData={TableData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={6}
                >
                </AgGridReact>
            </div>
        </div>
    );
}

export default UserTableData;