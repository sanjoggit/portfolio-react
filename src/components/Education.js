import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import ReactRevealText from 'react-reveal-text'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {ReactComponent  as GraduationIcon} from '../assets/images/graduation-cap-solid.svg'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css'

export class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({showText: true})
        }, 100);
    }
    render() {
        return (
            <section>
                <Row>
                    <Col sm="6">
                        <div className="about-me">
                            <div>
                                <ReactCSSTransitionGroup
                                    transitionName="fadeImage"
                                    transitionAppear={true}
                                    transitionAppearTimeout={3000}
                                    transitionEnterTimeout={3000}
                                    transitionLeaveTimeout={3000}>
                                    <h2>About Me</h2>
                                </ReactCSSTransitionGroup>

                                <h5>
                                    <ReactRevealText show={this.state.showText}>I am about to graduate as a MSc. in
                                        Computer Science from Åbo Akademi and also I am a front-end developer focused on
                                        scalable JavaScript applications. My specialization is in front-end frameworks
                                        and libraries for building scalable web sites and apps. I excels in JavaScript
                                        (ES5 & ES6), React/Redux & Node.js & HTML5/CSS3, Responsive page design,
                                        Bootstrap.</ReactRevealText>
                                </h5>

                            </div>

                        </div>
                    </Col>
                    <Col sm="6">
                    <h2 className="edu-title">Education</h2>
                    <hr/>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            date={<span className="date-right">2015-present</span>}
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: 'white' }}
                            icon={<GraduationIcon />}
                        >
                        <h4 className="vertical-timeline-element-title">Åbo Akademi</h4>
                        <p className="vertical-timeline-element-subtitle">Msc in Computer Science</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<span className="date-left">2009-2015</span>}
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: 'white' }}
                            icon={<GraduationIcon />}
                        >
                        <h4 className="vertical-timeline-element-title">Turku University of Applied Science</h4>
                        <p className="vertical-timeline-element-subtitle">B.E in Information Technology</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default Education
