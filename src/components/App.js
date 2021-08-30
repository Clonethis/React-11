import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";
export default class App extends React.Component {
  // why not 'async' before onTermSubmit
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    // precofigured axios class so can use 'get'
    const response = await youtube.get("./search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    // need to be in curly braces
    this.setState({ videos: response.data.items });
  };
  onVideoSelect = (video) => {
    console.log("bullshit on Selected Video", video);
  };
  render() {
    return (
      <div className="ui container">
        {/* just another state pass parameter(prop)*/}
        {/* When somebody submit 'Search Bar form' */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* updates on 5 */}
        Length of videos {this.state.videos.length}
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
