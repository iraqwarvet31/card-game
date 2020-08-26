import React from "react";

import Card from './Card'

class Login extends React.Component {

    handleSignIn = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        
    }

    render() {

        return (
            <div>
                <form onSubmit={ this.handleSignIn }>
                    <h3>Please enter your username and press Play</h3>
                    <input type="text" ref="username" placeholder="enter username" />
                    <input type="submit" value="Login" />
                </form>
            </div>  
        ) 
    }
}

export default Login