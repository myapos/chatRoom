import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Loader from 'react-loader-spinner';
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
    const options = {
      defaultSortName: 'name',
    };

    const {
      loggedUsers: { users },
    } = this.props;

    const mappedUsers = [];
    if (users && Object.keys(users).length) {
      for (const key in users) {
        if (users.hasOwnProperty(key)) {
          users[key].id = key;
          mappedUsers.push(users[key]);
        }
      }
    }

    // prettier-ignore
    return (
      <div className="listOfUsersWrapper">
        <div className="header">Logged in users</div>
        {mappedUsers.length ? (
          <BootstrapTable
            data={mappedUsers}
            striped
            hover
            condensed
            options={options}>
            <TableHeaderColumn
              dataField="id"
              dataSort
              hidden
              isKey>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="firstname" dataSort>
              First Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField="lastname" dataSort>
              Last Name
            </TableHeaderColumn>
          </BootstrapTable>
        ) : <div className="spinner">
          <Loader
            type="ThreeDots"
            color="darkgray"
            height="50"
            width="50" />
        </div> }
      </div>
    );
  }
}

ListOfUsers.propTypes = {
  listOfUsers: PropTypes.object,
  loggedUsers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
export default connect(
  state => state,
  actions
)(ListOfUsers);
