import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor()
    {
        super();
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword)
        {
            return;
        }

        try
        {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        }
        catch(error)
        {
            console.log(error);
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        this.setState({ [name] : value })
    }

    render()
    {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <form onSubmit={e => this.handleSubmit(e)} className='sign-up-form'>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={e => this.handleChange(e)}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        onChange={e => this.handleChange(e)}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={e => this.handleChange(e)}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={e => this.handleChange(e)}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;