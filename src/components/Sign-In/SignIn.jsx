import React from 'react';

import './SignIn.scss';

import FormInput from '../Form-Input/FormInput';
import CustomButton from '../Custom-Button/CustomButton';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div id='sign-in'>
                <h2>Sign In</h2>
                <span>Sign in with your email and password</span>

                <form id='sign-in-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required
                        label='Email' 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required 
                        label='Password'
                        handleChange={this.handleChange}
                    />

                    <CustomButton type='submit'> Login </CustomButton>
                </form>
            </div>
    )}
}

export default SignIn;