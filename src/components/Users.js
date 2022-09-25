import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUsersData } from '../store/actions/users/users.action';
import { DataGrid } from '@mui/x-data-grid';

function Users({loadUsers,users,loading}) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 100},
    { field: 'firstName', headerName: 'First Name', width: 140 },
    { field: 'secondName', headerName: 'Second Name', width: 140 },
    { field: 'email', headerName: 'Email Address', width: 140 },
    { field: 'userName', headerName: 'Username', width: 140 },
    { field: 'mobile', headerName: 'Mobile', width: 140 },
    { field: 'dob', headerName: 'DOB', width: 140 },
    { field: 'email_Verified', headerName: 'Email Verified', width: 140 },
    { field: 'createdAt', headerName: 'Created At', width: 140 },
    { field: 'updatedAt', headerName: 'Updated At', width: 140 },
  ]
  useEffect(() => {
    loadUsers();
  }, [loadUsers])
  return (
    <div style={{ height: 600, width: '100%' }}>
      <h1>List of Users ({users.length}) </h1>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5,10,20]}
        checkboxSelection={false}
        disableSelectionOnClick
        loading={loading}
      />
    </div>
  )
}

const mapStateToProps = ({users}) =>{
  return {
    loading: users.loading,
    users: users.users,
    error: users.error
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    loadUsers: () => dispatch(loadUsersData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)