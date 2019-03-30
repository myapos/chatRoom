import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import actions from '../store/actions';
import '../css/bootstrap.min.css';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ListOfUsers extends Component {
  // console.log('listOfUsers', listOfUsers);

  componentDidMount () {
    console.log('did mount');
  }
  render () {
    // debugger;
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

    const options = {
      defaultSortName: 'name',
    };

    const {
      loggedUsers: { users },
    } = this.props;

    console.log('logged Users:', users);

    const mappedUsers = [];
    if (users && Object.keys(users).length) {
      for (const key in users) {
        mappedUsers.push(users[key]);
      }
    }

    return (
      <div className="listOfUsersWrapper">
        <div className="header">Logged in users</div>
        <BootstrapTable
          data={mappedUsers}
          striped
          hover
          condensed
          options={options}>
          <TableHeaderColumn dataField="id" dataSort
hidden isKey>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="firstname" dataSort>
            First Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="lastname" dataSort>
            Last Name
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

ListOfUsers.propTypes = {
  listOfUsers: PropTypes.array,
};
export default connect(
  state => state,
  actions
)(ListOfUsers);
