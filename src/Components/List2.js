import React from 'react';

class List2 extends React.Component {
    constructor(props) {
        super();
        this.state = { name: "himanshu",
    temp:"xyz" }
        // this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        this.setState({temp:event.target.value})
    }
    handleSubmit=(event)=>{
        this.setState({name:this.state.temp})
    }

    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
        <h2>{this.state.temp}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:<input type="text" name="name" onChange={this.handleChange}/>   
                    </label>
                    <input type="submit" value="Click to submit" />
                </form>
            </div>
        )
    }

}
export default List2







