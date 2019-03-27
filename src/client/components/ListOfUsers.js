import React from 'react';

const ListOfUsers = ({ listOfUsers }) => {
  console.log('listOfUsers', listOfUsers);

  return (
    <div className="listOfUsersWrapper">
      <div className="header">
        list of users
      </div>
      <div className="listOfUsers">
        {
          listOfUsers.map(user => (
            <div key={user.id} className="userRow" >
              <div className="user status"> {user.status} </div>
              <div className="user"> {user.firstname} </div>
              <div className="user"> {user.lastname} </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ListOfUsers;
