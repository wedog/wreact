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
                                    Short Biography
                                </h2>
                            </header>
                            <div className="main-container">
                                <p>In a document, each element is represented as a rectangular box. Determining the size,
                                    properties — like its color, background, borders aspect — and the position of these
                                    boxes is the goal of the rendering engine.In CSS, each of these rectangular boxes is
                                    described using the standard box model. This model describes the space of the content
                                    taken by an element. Each box has four edges: the margin edge, border edge, padding edge,
                                    and content edge.</p>
                                <p>The CSS3 Flexible Box, or flexbox, is a layout mode intended to accommodate different
                                    screen sizes and different display devices. For many applications, the flexible box model
                                    is easier than the block model since it does not use floats, nor do the flex container's
                                    margins collapse with the margins of its contents.</p>
                                <p>The parent element in which flex items are contained. A flex container is defined using
                                    the flex or inline-flex values of the display property.</p>
                                <p>Each child of a flex container becomes a flex item. Text directly contained in a flex
                                    container is wrapped in an anonymous flex item.</p>
                                <p>
                                    Every flexible box layout follows two axes. The main axis is the axis along which the flex
                                    items follow each other. The cross axis is the axis perpendicular to the main axis.
                                </p>
                                <ul>
                                    <li>The flex-direction property establishes the main axis.</li>
                                    <li>The justify-content property defines how flex items are laid out along the main axis on the current line.</li>
                                    <li>The align-items property defines the default for how flex items are laid out along the cross axis on the current line.</li>
                                    <li>The align-self property defines how a single flex item is aligned on the cross axis, and overrides the default established by align-items.</li>
                                </ul>
                                <p>
                                    The main start/main end and cross start/cross end sides of the flex container describe
                                    the origin and terminus of the flow of flex items. They follow the main axis and cross axis of the flex container in the vector established by the writing-mode (left-to-right, right-to-left, etc.).
                                </p>
                                <ul>
                                    <li>The order property assigns elements to ordinal groups and determines which elements appear first.</li>
                                    <li>The flex-flow property shorthands the flex-direction and flex-wrap properties to lay out the flex items.</li>
                                </ul>
                                <p>
                                    Flex items can be laid out on either a single line or on several lines according to
                                    the flex-wrap property, which controls the direction of the cross axis and the direction
                                    in which new lines are stacked.
                                </p>
                                <p>
                                    The flex items' agnostic equivalents of height and width are main size and cross size,
                                    which respectively follow the main axis and cross axis of the flex container.
                                </p>
                                <ul>
                                    <li>The min-height and min-width properties initial value is 0.</li>
                                    <li>The flex property shorthands the flex-grow, flex-shrink, and flex-basis properties
                                        to establish the flexibility of the flex items.</li>
                                </ul>
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