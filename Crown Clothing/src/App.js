import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import ManageAccount from './pages/ManageAccount/ManageAccount.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component 
{
    constructor()
    {
        super();
        this.state = {
            currentUser : null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount()
    {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth)
            {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({ 
                        currentUser : {
                            id : snapshot.id,
                            ...snapshot.data()
                        } 
                    })
                },console.log(this.state))
                
            }
            else
            {
                this.setState({ currentUser : userAuth })
            }
        })
    }

    componentWillUnmount()
    {
        this.unsubscribeFromAuth();
    }

    render()
    {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={ManageAccount}/>
                </Switch>
            </div>
        );
    }
}

export default App;