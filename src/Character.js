import React from 'react'
import './App.css'
export default class CharacterCard extends React.Component {
    render() {
        return (
            <div className='card'>{this.props.value}</div>
        )
    }
}   