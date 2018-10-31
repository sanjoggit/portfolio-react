import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import ProfileImage from '../assets/images/linkedin.jpg'
import ReactRevealText from 'react-reveal-text'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../App.css'


export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            showText: false,
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                showText: true
            })
        }, 500);
    }
    render() {
        return (
            <section>
                <Row>
                    <Col sm="6">
                    <div className="profile-content">
                        <div>
                            <h2><ReactRevealText show={this.state.showText}>Hello,</ReactRevealText></h2>
                            <h1><ReactRevealText show={this.state.showText}>I am Sanjog Shrestha</ReactRevealText></h1>
                            <h3> <ReactRevealText show={this.state.showText}>Front-End Developer</ReactRevealText></h3>
                        </div>
                    </div>
                    </Col>
                    <Col sm="6">
                    <div className="profile-image">
                    <ReactCSSTransitionGroup
                        transitionName="fadeImage"
                        transitionAppear={true}
                        transitionAppearTimeout={3000}
                        transitionEnterTimeout={3000}
                        transitionLeaveTimeout={3000}
                    >
                        <img src={ProfileImage} alt="profile"/>
                    </ReactCSSTransitionGroup>
                    </div>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default Home
