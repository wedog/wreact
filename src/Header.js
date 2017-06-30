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
                                        <a href="#">About</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="navbar-right">
                                <ul className="navbar-menu">
                                    <li>
                                        <a href="https://github.com/wedog" target="_blank">
                                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(-1);">
                                            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="navbar-middle">
                            <a href="https://github.com/wedog" target="_blank">
                                <img src={wedog}/>
                            </a>
                            <h2>Yong.Liu</h2>
                            <h3>Front end development engineer </h3>
                        </div>
                        <div className="navbar-bottom">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="javascript:void(-1);">
                                            home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(-1);">
                                            note
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(-1);">
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