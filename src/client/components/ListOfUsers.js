import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import '../css/bootstrap.min.css';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const ListOfUsers = () => {
  const listOfUsers = [
    {
      id: 1,
      firstname: 'myros',
      lastname: 'apostolakis',
      status: 'active',
    },
    {
      id: 2,
      firstname: 'm1',
      lastname: 'm1',
      status: 'inactive',
    },
    {
      id: 3,
      firstname: 'm2',
      lastname: 'm2',
      status: 'away',
    },
    {
      id: 4,
      firstname: 'm3',
      lastname: 'm3',
      status: 'active',
    },
  ];

  console.log('listOfUsers', listOfUsers);

  const options = {
    defaultSortName: 'name',
  };

  return (
    <div className="listOfUsersWrapper">
      <div className="header">
        Logged in users
      </div>
      <BootstrapTable
        data={listOfUsers}
        striped
        hover
        condensed
        options={options}>
        <TableHeaderColumn
          dataField="id"
          dataSort
          hidden
          isKey>ID
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="firstname"
          dataSort>First Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="lastname"
          dataSort>Last Price
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};

ListOfUsers.propTypes = {
  listOfUsers: PropTypes.array,
};
export default ListOfUsers;
