import React from 'react';

import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends React.Component {
  state= {
    video:[],
    selectedVideo: null,
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
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
         
    }
  render(){
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}> 
            <Grid item xs={12}> 
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}> 
              <VideoDetail /> 
            </Grid>
            <Grid item xs={4}> 
              <VideoList />  
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      );
    }
  }


export default App;
