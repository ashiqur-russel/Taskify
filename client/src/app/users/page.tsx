"use client";

import React from 'react'
import {
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarFilterButton,
  } from "@mui/x-data-grid";
import { useAppSelector } from '../redux';

const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarExport />
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );

const dataGridClassNames = "your-custom-class-names"; 
const dataGridSxStyles = (isDarkMode: boolean) => ({
  '& .MuiDataGrid-root': {
    backgroundColor: isDarkMode ? '#333' : '#fff',
  },
});


const columns: GridColDef[] = [
    { field: 'userId', headerName: 'ID', width: 90 },
    { field: 'userName', headerName: 'Name', width: 150 },
    { field: 'userEmail', headerName: 'Email', width: 200 },
    { field: 'userDepartment', headerName: 'Department', width: 200 },
    { field: 'userTeam', headerName: 'Team', width: 200 },
    { field: 'userTeam1', headerName: 'Team1', width: 200 },
    // Add more columns as needed
  ];
  

const User = () => {
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    return (
        <div className="flex w-full flex-col p-8">
          <div style={{ height: 650, width: "100%" }}>
            <DataGrid
              rows={[]}
              columns={columns}
              getRowId={(row) => row.userId}
              pagination
              slots={{
                toolbar: CustomToolbar,
              }}
              className={dataGridClassNames}
              sx={dataGridSxStyles(isDarkMode)}
            />
          </div>
        </div>
         );
}

export default User
