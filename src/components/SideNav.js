import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideNavIcon from './SideNavIcon'
import '../App.css'

export class SideNav extends Component {
  render() {
    return (
        <div className="sidenav">
            <div>
                <Link to="/">
                    <SideNavIcon
                        text="Home"
                        className="fa fa-home"
                     />
                </Link>
                <Link to="/education">
                <SideNavIcon
                    text="About"
                    className="fa fa-user"
                 />
                </Link>
                <Link to="/skills">
                <SideNavIcon
                    text="Skills"
                    className="fa fa-cog"
                 />
                </Link>
                <Link to="/contact">
                <SideNavIcon
                    text="Contact"
                    className="fa fa-envelope"
                 />
                </Link>
            </div>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/sanjog-shrestha-84a61aa4/"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/sanjoggit"><i className="fa fa-github"></i></a>
            </div>
        </div>
    )
  }
}

export default SideNav
