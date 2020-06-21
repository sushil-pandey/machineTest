
import React, { Component } from 'react';

import NewsCard from "../component/newsPreview";
import Grid from '@material-ui/core/Grid';
import * as newsActions from '../services/news';
import { Redirect } from "react-router-dom";

const useStyles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    height: '100%'
  },
  paper: {
    height: 140,
    width: 100,
  },
  addbutton: {
    position: 'fixed',
    right: '10px',
    top: '10px',
    bottom: '30px',
  }
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newsList: [],
      onCreateFlag: false,
    }
  }
  componentDidMount() {
    newsActions.getNews().then(data => { console.log(data); this.setState({ newsList: data }); });
  }

  onCreateNews = () => {
    this.setState({ onCreateFlag: true })
  }
  render() {
    if (this.state.onCreateFlag) {
      return <Redirect to="/create" />
    }
    return (
      <>
        <button style={{ marginLeft: '70%', marginTop: '2%', position: 'fixed' }} onClick={this.onCreateNews} className="button"><span>Create</span></button>
        <div style={{ marginTop: '5%', marginLeft: '30%' }}>
          {/* <Grid container className={useStyles.root} spacing={2}>
            <Grid item xs={4}>
              <Grid container justify="center" spacing={2}> */}
                {
                  this.state.newsList.length === 0 ?
                    (<h4>Please click on create button to creat news</h4>)
                    :
                    (
                      this.state.newsList.map(news => <Grid spacing={2}>
                        <NewsCard {...news} />
                      </Grid>
                      )
                    )
                }
              {/* </Grid>
            </Grid>

          </Grid> */}

        </div>

      </>
    )
  }
}


export default Home;