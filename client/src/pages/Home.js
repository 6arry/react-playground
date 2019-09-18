import React from 'react';
import '../App.css';
import '../components/Ytsearch';
import Playlist from '../components/Playlist'
import SearchBar from '../components/SearchBar';
import Ytplayer from '../components/Ytplayer';
import { Animated } from 'react-animated-css';

const YouTube = require('simple-youtube-api');
const yt_api = require('../config/keys').YTkey;
const youtube = new YouTube(yt_api);

class Home extends React.Component {
  state = {
    ytResults: [],
    searchTerm: ''
  };

  updateSearchTerm = value => {
    console.log(value);
    this.setState({ searchTerm: value });
  };

  ytSearch = () => {
    console.log('searching...');

    youtube
      .searchVideos(this.state.searchTerm, 5)
      .then(results => {
        console.log(`The video's title is ${results[0].title}`);
        console.log(results);

        //save the ytresults to the state in an array
        //display in a div container
        //using a map over the results

        // console.log(results[0].title);
        // console.log(results[0].description);
        // console.log(results[0].id);
        // console.log(results[0].thumbnails.default.url);
      })
      .catch(console.log);
  };

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          ytSearch={this.ytSearch}
        />
        <Playlist />
        <Animated
          animationIn='bounceInLeft'
          animationOut='fadeOut'
          isVisible={true}>
          <div>
            hello world
            <h1>This is the Dashboard page!</h1>
          </div>
        </Animated>
        <Ytplayer />
      </div>
    );
  }
}

export default Home;
