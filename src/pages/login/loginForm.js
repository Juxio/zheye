import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { actionCreators } from "./store";

class LoginForm extends PureComponent {
  state = {
    account: "",
    password: ""
  };

  handleACTChange = e => {
    this.setState({ account: e.target.value });
  };

  handlePSWChange = e => {
    this.setState({ password: e.target.value });
  };

  handleOnKeyDown = e => {
    if (e.which === 13) {
      const { account, password } = this.state;
      this.props.handleLogin(account, password);
    }
  };

  render() {
    const { account, password } = this.state;
    const isAccAndPWDNull = account === "" || password === "";
    return (
      <div className="login-form" onKeyDown={this.handleOnKeyDown}>
        <div className="login-input-area">
          <Input placeholder="你的用户名" onChange={this.handleACTChange} />
          <Input
            placeholder="密码"
            type="password"
            onChange={this.handlePSWChange}
          />
        </div>
        <Button
          type="primary"
          shape="round"
          disabled={isAccAndPWDNull}
          onClick={() => {
            this.props.handleLogin(account, password);
          }}
        >
          登陆
        </Button>
      </div>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({
  handleLogin: (acc, pwd) => {
    dispatch(actionCreators.login(acc, pwd));
  }
});

export default connect(
  mapState,
  mapDispatch
)(LoginForm);
