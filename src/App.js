import React, { Component } from 'react';

import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends Component {
  state= {
    video:[],
    selectedVideo: null,
  }
  componentDidMount() {
    this.handleSubmit('Soccer')
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyBEd8o6xgRVSOgUzRX0hX2_j7_c-aEPhfQ',
        q: searchTerm,
      }
      });
      this.setState({
        video: response.data.items,
        selectedVideo: response.data.items[0]
      });
         
    }
  render(){
    const {selectedVideo, videos} = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}> 
            <Grid item xs={12}> 
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}> 
              <VideoDetail video = {this.state.selectedVideo}/> 
            </Grid>
            <Grid item xs={4}> 
              <VideoList  video = {this.state.video} onVideoSelect={this.onVideoSelect} />  
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      );
    }
  }


export default App;
