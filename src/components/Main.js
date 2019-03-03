import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <p>
         Hello! {this.props.name} Ready to try this Auth0?!
         Do you want to get access to the secret area? <a href="/secret">Click Here!!!</a>
        </p>
        {!this.props.auth.isAuthenticated() && 
       <div>
           <p/>
           Please login first
           <p/>
           <button onClick={this.props.auth.login}>Login</button>
       </div>
        }
      </div>
    );
  }
}

export default Main;
