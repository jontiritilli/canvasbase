import React, { Component } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

class NetlifyAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  componentDidMount() {
    netlifyIdentity.on('login', () => this.afterLogIn());
    netlifyIdentity.on('logout', () => this.setState({ loggedIn: false }));
  }

  handleLogInClick() {
    this.netlifyIdentity.open();
  }

  handleLogOutClick() {
    this.netlifyIdentity.logout();
  }

  afterLogIn() {
    this.netlifyIdentity.close();
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    const user = netlifyIdentity.currentUser();
    if (!user) {
      return (
        <button type="submit" onClick={this.handleLogInClick}>
          {'Sign up | Log in'}
        </button>
      );
    }
    return (
      <button type="submit" onClick={this.handleLogOutClick}>
        {'Log out'}
        { user.email }
      </button>
    );
  }
}

export default NetlifyAuth;
