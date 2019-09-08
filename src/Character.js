import React from 'react'
import './App.css'
export default class CharacterCard extends React.Component {

    state = {
        active: false
    }

    activate = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}   