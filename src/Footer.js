/**
 * Created by ly_wu on 2017/6/28.
 */
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return (
            <footer className="footer-sides">
                <div className="footer-wrapper">
                    <div>
                        <nav>
                            <ul>
                                <li className="no-before"><a href="#">home</a></li>
                                <li><a href="#">note</a></li>
                                <li><a href="#">any</a></li>
                            </ul>
                        </nav>
                        <div className="footer-copyright">
                            2017 &copy;Copyright with wdog by the&nbsp;&nbsp;
                            <a href="https://github.com/wedog" target="_blank">yong.liu</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;