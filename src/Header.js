/**
 * Created by ly_wu on 2017/6/28.
 */
import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return (
            <header className="site-header">
                <div className="header-sides">
                    <div className="navbar">
                        <div className="navbar-top"></div>
                        <div className="navbar-middle">
                            yong.liu
                        </div>
                        <div className="navbar-bottom"></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;