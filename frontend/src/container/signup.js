import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import * as actions from '../services/auth';
import * as notification from "../utility/notification";
import { Redirect } from "react-router-dom";




class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            signUpSucces: false

        }
    }

    onSignUp = async (name, email, password, confirmPassword) => {

        if (password !== confirmPassword) {
            return notification.Error('Confirm password did not matched');
        }

        if (!email || !name || !password || !confirmPassword) {
            return notification.Error('Please fill all details');
        }

        const { status } = await actions.SignUp({
            email,
            password,
            name
        });

        if (status) {
            notification.Success('Saved Succesfully');
            this.setState({ signUpSucces: true })
        }
    }

    render() {
        if (this.state.signUpSucces) {
            return <Redirect to="/signin" />
        }

        return (
            <>
                <h3 style={{ marginLeft: '38%', }}>Please fill details for registration</h3>
                <div style={{ marginTop: '3%', marginLeft: '40%' }}>
                    <form noValidate autoComplete="off" >
                        <TextField
                            label="Enter Name"
                            variant="filled"
                            id="standard-basic"
                            value={this.state.name ? this.state.name : ''}
                            onChange={e => { this.setState({ name: e.target.value }) }}
                        />
                        <div style={{ marginTop: '2%' }}></div>
                        <TextField
                            label="Enter Email"
                            variant="filled"
                            id="standard-basic"
                            value={this.state.email ? this.state.email : ''}
                            onChange={e => { this.setState({ email: e.target.value }) }}
                        />
                        <div style={{ marginTop: '2%' }}></div>
                        <TextField
                            label="Enter Password"
                            variant="filled"
                            id="filled-basic"
                            value={this.state.password ? this.state.password : ''}
                            onChange={e => { this.setState({ password: e.target.value }) }}
                            type="password"
                        />
                        <div style={{ marginTop: '2%' }}></div>
                        <TextField
                            label="Confirm Password"
                            variant="filled"
                            id="filled-basic"
                            value={this.state.confirmPassword ? this.state.confirmPassword : ''}
                            onChange={e => { this.setState({ confirmPassword: e.target.value }) }}
                            type="password"
                        />
                        <div style={{ marginTop: '2%' }}></div>
                        <div>
                            <Button style={{ marginLeft: '6%' }} variant="outlined" color="secondary" onClick={() => this.onSignUp(this.state.name, this.state.email, this.state.password, this.state.confirmPassword)}>
                                Sign Up
                                    </Button>
                        </div>
                        <div style={{ marginTop: '2%' }}></div>
                        <div style={{ marginLeft: '8%' }}>
                            <a href="/signin">SignIn</a>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Signup;