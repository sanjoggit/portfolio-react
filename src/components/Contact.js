import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import ReactRevealText from 'react-reveal-text'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../App.css'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({showText: true})
        }, 300);
    }
    render() {
        return (
            <section>
                <Row>
                    <Col sm="6">
                        <div className="contact-content">
                            <div>
                                <h1>
                                    <ReactRevealText show={this.state.showText}>Contact</ReactRevealText>
                                    <ReactCSSTransitionGroup
                                        transitionName="slideRight"
                                        transitionAppear={true}
                                        transitionAppearTimeout={3000}
                                        transitionEnterTimeout={3000}
                                        transitionLeaveTimeout={3000}
                                    >
                                    <hr/>
                                    </ReactCSSTransitionGroup>
                                </h1>
                                <div className="contact">
                                    <i class="fa fa-envelope-square"></i><span><ReactRevealText show={this.state.showText}>sanjogstha7@gmail.com</ReactRevealText></span>
                                </div>
                                <ReactCSSTransitionGroup
                                        transitionName="slideRight"
                                        transitionAppear={true}
                                        transitionAppearTimeout={3000}
                                        transitionEnterTimeout={3000}
                                        transitionLeaveTimeout={3000}
                                    >
                                <hr/>
                                </ReactCSSTransitionGroup>
                                <div className="contact">
                                    <i class="fa fa-phone"></i><span><ReactRevealText show={this.state.showText}>0440958339</ReactRevealText></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="6">
                        {/* placeholder for map */}
                    </Col>
                </Row>
            </section>
        )
    }
}

export default Contact
