import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, deleteUser } from "../reduxFiles/actions/userActions";

export class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let userJsx =
      this.props.users && this.props.users.length > 0 ? (
        this.props.users.map((user) => (
          <div className="card col-12 col-md-6 p-2" key={user.id}>
            <h4>{user.first_name} </h4>
            <button className="btn btn-danger" onClick={() => this.props.deleteUser(user.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No users exist</p>
      );

    return (
      <div>
        <h2>Users</h2>
        <div className="container">
          <div className="row">{userJsx}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { getUsers, deleteUser })(Users);
