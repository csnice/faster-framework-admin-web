import React, { Component } from 'react';

export default class Dashboard extends Component {
  static displayName = 'Dashboard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1>
        欢迎登录后台管理系统。
      </h1>
    );
  }
}
