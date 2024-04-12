import React, { Component } from "react";
import Header from "./header.js";
import NoteList from "./notelist.js";

// whenever importing remember to place a "./" before the name
// In part three const App was changed to class App extends Component
//So, if you need stateful behavior for your variable `App` in a React application,
// it would be more appropriate to define it as a class component that extends `React.Component` or `Component` and manage the state within that component. 
// Changing `const App` to `class App extends Component` would be the right approach for creating a stateful component in React.
class App extends Component {

state = {
  notes: [
    {
      id: 0,
      title: "eat",
      description: "reese peanut butter cups",
      doesMatchSearch: true
    },
    {
      id: 1,
      title: "sleep",
      description: "eight hours",
      doesMatchSearch: true
    },
    {
      id: 2,
      title: "code",
      description: "build an awesome ui",
      doesMatchSearch: true
    }
  ],
  searchText: "search for me"
  }

  render () {
    return (
      <div>
        <Header searchText={this.state.searchText}/>
        <NoteList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
