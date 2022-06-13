import searchIcon from '../images/search.png'
import './consumer-table.scss'
import TableData from '../../jsonData.json'

import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import actionIcon from '../images/lock.png'

function ConsumerTableData() {
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
                <button >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
                </button>
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
                    paginationPageSize = {6}
                >
                </AgGridReact>
            </div>
        </div>
    );
}

export default ConsumerTableData;