import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try
        {
            await auth.signInWithEmailAndPassword(email, password);    
            this.setState({email : '', password : ''})
        }
        catch(e)
        {
            console.log(e);
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        this.setState({ [name] : value })
    }

    render()
    {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your Email and password</span>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormInput 
                        required
                        type='email'
                        name='email'
                        label='EMAIL'
                        value={this.state.email}
                        handleChange={(e) => this.handleChange(e)}
                    />
                    <FormInput 
                        required
                        type='password'
                        name='password'
                        label='PASSWORD'
                        value={this.state.password}
                        handleChange={(e) => this.handleChange(e)}
                    />
                    <div className='button'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' isGoogleSignIn={true} onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;