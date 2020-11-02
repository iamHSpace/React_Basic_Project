import React, { Component } from 'react'
import Title from './Title'

class TitleList extends Component {
    render() {
        return (
            <div>
                {this.props.titles.map(name => <Title name = {name}/>)}
            </div>
        )
    }
}
export default TitleList