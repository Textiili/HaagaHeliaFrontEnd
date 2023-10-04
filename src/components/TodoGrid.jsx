import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";

export default function TodoGrid(props) {

    const gridRef = useRef();

    const columns = [
        { headerName: 'Description', field: "description", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Date', field: "date", sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Priority', field: "priority", sortable: true, filter: true, floatingFilter: true,
        cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'} }
    ];

    const deleteSelected = () => {
        if (gridRef.current.getSelectedNodes().length == 0) {
         alert("Valitse rivi ensin!");
        } else {
            const removeIndex = parseInt(gridRef.current.getSelectedNodes()[0].id);
            props.deleteTodo(removeIndex);
        }
    }
        
    return (
    <>
    <button onClick={deleteSelected}>Poisto</button>
    <div className="ag-theme-material" style={{height: 400, width: 600}}>
    <AgGridReact 
        rowSelection="single" 
        columnDefs={columns} 
        rowData={props.todos} 
        onGridReady={ params => gridRef.current = params.api}/>
    </div>
    </>
    );
}