import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    console.log(this.props.userList);
    const { userList } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item, key) => (
              <UserItem user={item} key={key} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = root => {
  return {
    userList: root.userState.userList
  }
}

export default connect(mapStateToProps)(Users);
