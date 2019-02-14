import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: ""

      //done: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    /*
    if (this.state.done) {
      return <Redirect to="/" />;
    }
    */
  }

  render() {
    return (
      <div className="container center">
        <form onSubmit={this.onSubmit}>
          <h5 className="grey-text text-darken-3">Register</h5>

          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              onChange={this.onChange}
              value={this.state.username}
              type="text"
              name="username"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              onChange={this.onChange}
              value={this.state.email}
              type="text"
              name="email"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password}
              type="password"
              name="password"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="control-label">Confirm Password</label>
            <input
              onChange={this.onChange}
              value={this.state.passwordConfirmation}
              type="password"
              name="passwordConfirmation"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button className="btn blue lighten-1 z-depth-0">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;