import React from 'react';

import { Grid } from '@material-ui/core';
import youtub from './api/youtub';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends React.Component {
  render(){
    return (
      <Grid justify="center" container spacing={16}>
        <Grid itemr xs={12}>
          <Grid container spacing={16}> 
            <Grid itemr xs={12}> 
              <SearchBar />
            </Grid>
            <Grid itemr xs={8}> 
              <VideoDetail /> 
            </Grid>
            <Grid itemr xs={4}> 
              <VideoList />  
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      );
    }
  }


export default App;
