import React from 'react';
import Login from './login';
import { Link } from 'react-router-dom';
import '../styles/main-header.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



class Header extends React.Component{



    render(){
        return(
            <div className="header-wrapper">
                <div className="title">
                    <h1>Crooked Number Fantasy Baseball</h1>
                </div>
                <button className="login-button" ><Link to='/login'>Login</Link></button>
            </div>
            
        )
    }
}

export default Header;