import React from 'react';
import './ManageAccount.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const ManageAccount = () => (
    <div className='manage-account'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default ManageAccount;