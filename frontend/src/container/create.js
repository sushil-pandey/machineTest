import React, { Component } from 'react';
import { TextField, TextareaAutosize, Button } from '@material-ui/core';
import { addNews, updateNews, getNews } from "../services/news";
import * as notification from "../utility/notification";
import { Redirect } from "react-router-dom";



let id = ''

class Create extends Component {
  constructor() {
    super();
    let win = window.location.pathname;
    id = win.split('/')[2];
    this.state = {
      title: '',
      description: '',
      createSuccess: false
    }
  }
  componentDidMount() {

    if (id) {
      getNews(id).then(data => {
        this.setState({ title: data.title })
        this.setState({ description: data.description })
      });
    }
  }



  onSubmit = (e, title, description) => {
    e.preventDefault();
    if (id && id > 0) {

      updateNews({
        title,
        description,
      }, id).then(createNewsResponse => {
        notification.Success('News Updated Succesfully');
        this.setState({ createSuccess: true })

      })

    } else {

      addNews({
        title,
        description,
      }).then(createNewsResponse => {
        notification.Success('News Created');
        this.setState({ createSuccess: true })
      })

    }


  }

  render() {

    if (this.state.createSuccess) {
      return <Redirect to="/newsListing" />
    }

    return (
      <div >
        <h2 style={{ marginLeft: '10%' }}>Publish News</h2>
        <form noValidate autoComplete="off" onSubmit={(e) => this.onSubmit(e, this.state.title, this.state.description)}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>


          </div>



          <div>
            <TextField
              id="filled-select-currency"
              label="News Title"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              variant="filled"
              style={{ width: '80%', marginLeft: '10%', marginTop: 20 }}
            >
            </TextField>

          </div>
          <div>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={12}
              placeholder="Description"
              value={this.state.description}
              style={{ width: '80%', marginLeft: '10%', marginTop: 20 }}
              onChange={e => this.setState({ description: e.target.value })} />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="outlined" color="secondary" type="submit">Publish News</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Create;