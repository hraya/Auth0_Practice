import React, { Component } from 'react';


class Secret extends Component {
    render() { 
        return ( 
            <h1>
                THIS IS A SECRET AREA. Jump back to <a href="/">Home</a>
                <button onClick={this.props.auth.logout}>LOGOUT</button>
            </h1>
         );
    }
}
 
export default Secret;