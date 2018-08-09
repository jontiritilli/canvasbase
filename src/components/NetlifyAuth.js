import React, { Component } from 'react';
import { Button } from 'reactstrap';
import netlifyIdentity from 'netlify-identity-widget';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    netlifyIdentity.on('login', () => this.afterLogIn());
    netlifyIdentity.on('logout', () => this.setState({ loggedIn: false }));
  }

  handleLogin() {
    netlifyIdentity.open();
  }

  handleLogout() {
    netlifyIdentity.logout();
  }

  afterLogIn() {
    netlifyIdentity.close();
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    const user = netlifyIdentity.currentUser();
    if (!user) {
      return (
        <Button type="submit" onClick={this.handleLogin}>
          Sign Up | Log In
        </Button>
      );
    }
    return (
      <Button type="submit" onClick={this.handleLogout}>
        Log Out
      </Button>
    );
  }
}

export default Login;
