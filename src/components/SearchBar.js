import React from "react";
import { Segment } from "semantic-ui-react";
export default class SearchBar extends React.Component {
  // everything must be arrow function otherwise it cannot use this.state/this.prop...
  state = { term: "" };
  //   dunno where 'event' is taken from
  //   need arrow function due to 'this' means 'SearchBar' this and not 'onSetState' this
  onSetState = (event) => {
    //   term is supposed to be like this.state.term...
    // this writes out every letter that I wrote
    // console.log("Term of search bar state", this.state.term);
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    // preventing browser from default behaviour
    event.preventDefault();
    // when onForm.. is called it taps into props and calls fc from App.js -> pretty neat
    this.props.onFormSubmit(this.state.term);
    // TODO  for future comoponent
  };
  render() {
    return (
      <div className="search-bar ui segment">
        {/* onFormSubmit for making stuff work */}
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="" className="search">
              Video search
              <input
                type="text"
                value={this.state.term}
                // on change it might automatically pass data to  tthis.onSetState
                onChange={this.onSetState}
                // alternative to previous stuff
                // onChange={(e) => this.setState({ term: e.target.value })}
                className="text"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
