import React, { Component, createRef } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  state = {
    formData: {
      name: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER"
    }
  }

  onChangeData = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      formData: { ...this.state.formData, [name]: value }
    },
      () => { console.log(this.state.formData); }
    )
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addUser(this.state.formData);
    console.log(this.closeRef);
    this.closeRef.current.click();
  }
  closeRef = React.createRef();
  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeRef}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.onChangeData} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.onChangeData} >
                    <option value="USER">USER</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatch = dispatch => {
  return {
    addUser: (user) => {
      const action = {
        type: "ADD_USER",
        payload: user
      }
      dispatch(action);
    }
  }
}
export default connect(null, mapDispatch)(Modal);
