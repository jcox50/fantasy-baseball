import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/mainpage.css';


class Mainpage extends React.Component{
    render(){
        return(
            <div>
            
                <div className="main-body">
                    <div className="background-image">
                        <div className="header-wrapper">
                            <div className="title">
                                <h1>Crooked Number Fantasy Baseball</h1>
                            </div>
                            <button className="login-button" ><Link to='/login'>Login</Link></button>
                        </div>
                        
                      
                    </div>
                </div>

            </div>
            
        )
    }

}

export default Mainpage;