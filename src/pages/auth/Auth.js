import React from "react";
import { connect } from "react-redux";
import {
  handleUserName,
  handleUserPassword,
  handleUserEmail,
  handleUserPhone,
  handleFormSubmit,
} from "../../action/RegisterAction";
import "./auth.css";

const Auth = (props) => {
  const handleName = (e) => {
    props.handleUserName(e.target.value);
  };
  const handlePassword = (e) => {
    props.handleUserPassword(e.target.value);
  };
  const handleEmail = (e) => {
    props.handleUserEmail(e.target.value);
  };
  const handlePhone = (e) => {
    props.handleUserPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/product");
    console.log(props, "devesh");
  };

  return (
    <div className='body'>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <label>Username</label>
        <input
          type='text'
          placeholder='User name '
          value={props.userName}
          onChange={(e) => handleName(e)}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Password'
          value={props.password}
          onChange={(e) => handlePassword(e)}
        />
        <label>Email</label>
        <input
          type='email'
          placeholder='Email'
          value={props.email}
          onChange={(e) => handleEmail(e)}
        />
        <label>Phone no</label>
        <input
          type='text'
          placeholder='phone no'
          value={props.phone}
          onChange={(e) => handlePhone(e)}
        />

        <button className='Register_Button'>Register</button>
      </form>
    </div>
  );
};
function mapStateToProps({ RegisterReducer }) {
  const { userName, password, email, phone, userList } = RegisterReducer;

  return {
    userName,
    password,
    email,
    phone,
    userList,
  };
}

export default connect(mapStateToProps, {
  handleUserName,
  handleUserPassword,
  handleUserEmail,
  handleUserPhone,
  handleFormSubmit,
})(Auth);
