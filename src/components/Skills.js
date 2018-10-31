import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {ReactComponent as HelsinkiLogo} from '../assets/images/helsinki-logo-white.svg'
import {ReactComponent as IntegrifyLogo} from '../assets/images/integrify.svg'
import {ReactComponent as IctPorttiLogo} from '../assets/images/portti.svg'
import {ReactComponent as GlmLogo} from '../assets/images/glm.svg'
import HtmlIcon from '../assets/images/html.png'
import JsxIcon from '../assets/images/react.png'
import CssIcon from '../assets/images/css.png'
import SassIcon from '../assets/images/sass.png'
import BootstrapIcon from '../assets/images/bootstrap.png'
import SemanticIcon from '../assets/images/semantic.png'
import JsScriptIcon from '../assets/images/js.png'
import ReactIcon from '../assets/images/react.png'
import ReduxIcon from '../assets/images/redux.png'
import NodeIcon from '../assets/images/node.png'
import GitIcon from '../assets/images/github.png'
import PsIcon from '../assets/images/photoshop.png'
import TWorkIcon from '../assets/images/teamwork.png'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {Card, CardHeader, CardBody} from 'reactstrap';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css'


export class SkillExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({show: true})
        }, 1000);
    }
    render() {
        return (
            <section>
                <Row>
                    <Col sm="6">
                        <div>
                            <ReactCSSTransitionGroup
                                transitionName="fadeImage"
                                transitionAppear={true}
                                transitionAppearTimeout={3000}
                                transitionEnterTimeout={3000}
                                transitionLeaveTimeout={3000}>
                                <h2 className="skill-title">SKills</h2>
                                <hr/>
                            </ReactCSSTransitionGroup>
                            
                            <ReactCSSTransitionGroup
                                        transitionName="slideRight1"
                                        transitionAppear={true}
                                        transitionAppearTimeout={3000}
                                        transitionEnterTimeout={3000}
                                        transitionLeaveTimeout={3000}
                            >
                                <Card>
                                    <CardHeader>HTML</CardHeader>
                                    <CardBody>
                                        <figure>
                                            <img src={HtmlIcon} alt="html icon"/>
                                            <figcaption>HTML5</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={JsxIcon} alt="jsx icon"/>
                                            <figcaption>JSX</figcaption>
                                        </figure>
                                    </CardBody>
                                </Card>
                            </ReactCSSTransitionGroup>
                            <ReactCSSTransitionGroup
                                        transitionName="slideRight2"
                                        transitionAppear={true}
                                        transitionAppearTimeout={3000}
                                        transitionEnterTimeout={3000}
                                        transitionLeaveTimeout={3000}
                            >
                                <Card>
                                    <CardHeader>CSS</CardHeader>
                                    <CardBody>
                                        <figure>
                                            <img src={CssIcon} alt="css icon"/>
                                            <figcaption>CSS3</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={SassIcon} alt="sass icon"/>
                                            <figcaption>Sass</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={BootstrapIcon} alt="bootstrap icon"/>
                                            <figcaption>Bootstrap</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={SemanticIcon} alt="semantic icon"/>
                                            <figcaption>Semantic-ui</figcaption>
                                        </figure>
                                    </CardBody>
                                </Card>
                            </ReactCSSTransitionGroup>
                            <ReactCSSTransitionGroup
                                        transitionName="slideRight3"
                                        transitionAppear={true}
                                        transitionAppearTimeout={3000}
                                        transitionEnterTimeout={3000}
                                        transitionLeaveTimeout={3000}
                            >
                                <Card>
                                    <CardHeader>Javascript</CardHeader>
                                    <CardBody>
                                        <figure>
                                            <img src={JsScriptIcon} alt="java script icon"/>
                                            <figcaption>JavaScript</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={ReactIcon} alt="react icon"/>
                                            <figcaption>React</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={ReduxIcon} alt="redux icon"/>
                                            <figcaption>Redux</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={NodeIcon} alt="node icon"/>
                                            <figcaption>Node</figcaption>
                                        </figure>
                                    </CardBody>
                                </Card>
                            </ReactCSSTransitionGroup>
                            <ReactCSSTransitionGroup
                                        transitionName="slideRight4"
                                        transitionAppear={true}
                                        transitionAppearTimeout={3000}
                                        transitionEnterTimeout={3000}
                                        transitionLeaveTimeout={3000}
                            >
                                <Card>
                                    <CardHeader>Other Skills</CardHeader>
                                    <CardBody>
                                        <figure>
                                            <img src={GitIcon} alt="github icon"/>
                                            <figcaption>Github</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={PsIcon} alt="photoshop icon"/>
                                            <figcaption>Photoshop</figcaption>
                                        </figure>
                                        <figure>
                                            <img src={TWorkIcon} alt="team work icon"/>
                                            <figcaption>Teamwork</figcaption>
                                        </figure>
                                    </CardBody>
                                </Card>
                            </ReactCSSTransitionGroup>
                        </div>
                    </Col>
                    <Col sm="6">
                        <h2 className="edu-title">Experience</h2>
                        <hr/>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date={< span className = "date-right" >09/2018 - present < /span>}
                                iconStyle={{
                                background: 'rgb(233, 30, 99)',
                                color: 'white'
                            }}
                                icon={< HelsinkiLogo />}>
                                <h4 className="vertical-timeline-element-title">City of Helsinki</h4>
                                <hr /> 
                                <p className="vertical-timeline-element-subtitle">Front-end Developer</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date={< span className = "date-left" > 12/2017 - 05/2018 < /span>}
                                iconStyle={{
                                background: 'rgb(233, 30, 99)',
                                color: 'white'
                            }}
                                icon={< IntegrifyLogo />}>
                                <h4 className="vertical-timeline-element-title">Integrify</h4>
                                <hr />
                                <p className="vertical-timeline-element-subtitle">Trainee/Front-end Developer</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date={< span className = "date-right" >10/2014-05/2015 < /span>}
                                iconStyle={{
                                background: 'rgb(233, 30, 99)',
                                color: 'white'
                            }}
                                icon={< GlmLogo />}>
                                <h4 className="vertical-timeline-element-title">Green Living Movement</h4>
                                <hr />
                                <p className="vertical-timeline-element-subtitle">Web Developer(Intern)</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date={< span className = "date-left" > 06/2014 - 08/2014 < /span>}
                                iconStyle={{
                                background: 'rgb(233, 30, 99)',
                                color: 'white'
                            }}
                                icon={< IctPorttiLogo />}>
                                <h4 className="vertical-timeline-element-title">ICT-portti</h4>
                                <hr />
                                <p className="vertical-timeline-element-subtitle">Web Developer(Intern)</p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default SkillExperience
