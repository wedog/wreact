/**
 * Created by ly_wu on 2017/6/28.
 */
import React, { Component } from 'react';
import './Header.css';
import wedog from './images/wedog.jpg';

class Header extends Component{
    render(){
        return (
            <header className="site-header">
                <div className="header-sides">
                    <div className="navbar">
                        <div className="navbar-top">
                            <nav className="navbar-left">
                                <ul className="navbar-menu">
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="navbar-right">
                                <ul className="navbar-menu">
                                    <li>
                                        <a href="https://github.com/wedog" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="navbar-middle">
                            <a href="https://github.com/wedog" target="_blank" rel="noopener noreferrer">
                                <img src={wedog} alt="wedog"/>
                            </a>
                            <h2>Yong.Liu</h2>
                            <h3>Front end development engineer </h3>
                        </div>
                        <div className="navbar-bottom">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="">
                                            home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            note
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            any
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;