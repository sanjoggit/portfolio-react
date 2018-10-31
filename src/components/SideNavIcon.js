import React, {Component} from 'react'

export class SideNavIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }
    mouseEnter = (e) => {
        e.preventDefault()
        this.setState({hover: true})
    }
    mouseLeave = () => {
        this.setState({hover: false})
    }
    render() {
        const {text, className} = this.props
        return (
            <div>
                <i
                    className={this.state.hover
                    ? ''
                    :className}
                    onMouseEnter={this.mouseEnter}
                    onMouseLeave={this.mouseLeave}>
                    {this.state.hover
                        ? <span className="nav-text">{text}</span>
                        : ""}
                </i>
            </div>
        )
    }
}

export default SideNavIcon
