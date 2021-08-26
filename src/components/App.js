import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
export default class App extends React.Component {
  onTermSubmit = (term) => {
    // precofigured axios class so can use 'get'
    youtube.get("./search", {
      params: {
        q: term,
      },
    });
  };
  render() {
    return (
      <div className="ui container">
        {/* just another state pass parameter(prop)*/}
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
