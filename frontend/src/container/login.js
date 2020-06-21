import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';
import * as actions from '../services/auth';
import { get as getToken } from "../utility/authTokenHandler";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loginSucces: false

        }
    }


    onLoginClick = async (email, password) => {
        const status = await actions.Login({
            email,
            password
        });

        if (status) {
            setInterval(() => {
                if (getToken() !== '') {
                    this.setState({ loginSucces: true })
                }
            }, 1000);

        }
    }
    render() {
        if (this.state.loginSucces) {
            return <Redirect to="/newsListing" />
        }
        return (
            <>
                <h3 style={{ marginLeft: '38%', }}>Please Login using registered email</h3>
                <div style={{ marginTop: '3%', marginLeft: '40%' }}>



                    <form noValidate autoComplete="off" >
                        <div></div>
                        <TextField
                            label="Enter Email"
                            variant="filled"
                            value={this.state.email}
                            onChange={e => { this.setState({ email: e.target.value }) }}
                        />
                        <div style={{ marginTop: '2%' }}></div>
                        <TextField
                            label="Enter Password"
                            variant="filled"
                            value={this.state.password}
                            onChange={e => { this.setState({ password: e.target.value }) }}
                            type="password"
                            
                        />
                        <div style={{ marginTop: '2%' }}>
                            <Button style={{ marginLeft: '6%' }} variant="outlined" color="secondary" onClick={() => this.onLoginClick(this.state.email, this.state.password)} >
                                Sign In
                                        </Button>
                        </div>
                        <div style={{ marginTop: '2%', marginLeft: '7%' }}>
                            <a href="/signup">Signup</a>
                        </div>
                    </form>


                </div>

            </>
        )
    }


}


export default Login;