import React from 'react'
import TitleList from './TitleList'

class List3 extends React.Component {
  state = {
    titles: [
      "Eloquent JavaScript, Second Edition",
      "A Modern Introduction to Programming",
      "Learning JavaScript Design Patterns",
      "A JavaScript and jQuery Developer's Guide",
      "Speaking JavaScript",
      "An In-Depth Guide for Programmers",
      "Programming JavaScript Applications",
      "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
      "Understanding ECMAScript 6",
      "The Definitive Guide for JavaScript Developers",
      "You Don't Know JS",
      "ES6 & Beyond",
      "Git Pocket Guide",
      "Designing Evolvable Web APIs with ASP.NET"
    ],
    searchTerm: '',
    addTerm: ''
  }

  editYourSearch = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  finalSearch = () => {
    return this.state.titles.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  

  editAddTerm=(event)=>{
    this.setState(
      {addTerm:event.target.value}
    )
  }

  addTitle=()=>{
    this.setState(
      {
        titles:[...this.state.titles,this.addTerm]
      }
    )

  }


  render() {
    return (
      <div>
        <h3>Searchfor your book here</h3>

        <br/>

        <input type='text' value={this.state.searchTerm} onChange={this.editYourSearch} placeholder='Search for a name!' />
        <br></br><br></br>

        <TitleList titles={this.finalSearch()} />
        <br />
        <br />
        <br />

      <form >
        <label>
          Add Title:<input type="text" value={this.state.addTerm} onChange={this.editAddTerm} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form >
        <label>
          Delete Title:<input type="text" value={this.state.addTerm} onChange={this.editAddTerm} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form >
        <label>
          Check Availability:<input type="text" value={this.state.addTerm} onChange={this.editAddTerm} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      </div>




    );
  }
}



export default List3