/**
 * Created by ly_wu on 2017/6/28.
 */
import React, { Component } from 'react';
import './Content.css';

class Content extends Component{
    render(){
        return (
            <div>
                <main className="site-main">
                    <div className="main-wrapper">
                        <div className="main">
                            <header>
                                <h2>
                                    Ctegory: Experience
                                </h2>
                            </header>
                            <div className="main-container">
                                <article>

                                </article>
                            </div>
                        </div>
                        <div className="main-side">
                            <section>
                                <h2 className="side-title">experience positions</h2>
                                <article className="side-article">
                                    <h3>
                                        <span> 2014 - present </span>
                                        Front end engineer
                                    </h3>
                                    <div>
                                        <p>Web<br/>Front end development engineer </p>
                                    </div>
                                </article>
                                <article className="side-article">
                                    <h3>
                                        <span> 2012 - 2014 </span>
                                        A engineer
                                    </h3>
                                    <div>
                                        <p>JavaWeb<br/>Java Web Development Engineer </p>
                                    </div>
                                </article>
                                <article className="side-article">
                                    <h3>
                                        <span> 2011 - 2012 </span>
                                        Practical experience
                                    </h3>
                                    <div>
                                        <p>Internship<br/>Internship at a IT company </p>
                                    </div>
                                </article>
                                <article className="side-article">
                                    <h3>
                                        <span> 2008 - 2011 </span>
                                        In the school
                                    </h3>
                                    <div>
                                        <p>A student<br/>Learning software engineering</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Content;