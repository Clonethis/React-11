const axios = require("axios").default;
const KEY = "AIzaSyBlrrUHaY82oZxNNYnw2lQybqQDfggC1rs";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    // querry -> search item fro 'SearchBar.js'
    q: "",
  },
});
