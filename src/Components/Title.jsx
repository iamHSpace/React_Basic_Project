import React, { Component } from 'react'

class Name extends Component {
    render() {
        return (
            <div style={{padding:0,fontFamily:"cursive", color:"blue"}}>
                {this.props.name}
            </div>
        )
    }
}

export default Name