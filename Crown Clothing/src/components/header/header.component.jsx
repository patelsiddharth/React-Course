import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop'> SHOP </Link>
            <Link to='/contact'> CONTACT </Link>
            {
                currentUser ? 
                    <a className='signOut' onClick={() => auth.signOut()}>Sign Out</a> 
                    : 
                    <Link to='/signin'>Sign In</Link>
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);