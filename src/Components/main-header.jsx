import React from 'react';
import Login from './login';
import { Link } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



class Header extends React.Component{



    render(){
        return(
            <div>
                <button className="login-button" ><Link to='/login'>Login</Link></button>
            </div>
            
        )
    }
}

export default Header;