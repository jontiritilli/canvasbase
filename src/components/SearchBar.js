import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../helpers';

import '../assets/css/searchbar.css'

class SearchBar extends Component {

  handleSearchByTerm(values){
    console.log(`search submitted ${values}`);
    // this.props.searchByTerm(values);
  }

  getWindowHeight(){
    return window.screen.height * window.devicePixelRatio
  }

  getWindowWidth(){
    return window.screen.width * window.devicePixelRatio
  }

  render(){
    const { handleSubmit } = this.props;
    const windowHeight = this.getWindowHeight();
    const windowWidth = this.getWindowWidth();

    return (
      <div className='searchContainer row justify-content-md-center align-items-center'>
        <form className='col-sm-6' onSubmit={handleSubmit(this.handleSearchByTerm.bind(this))}>
          <div className='input-group mb-3'>
            <Field className='form-control' name='canvasSearch' component={renderInput} type="text" placeholder='Enter Search Term' />
            <div className='input-group-append'>
              <button className="btn btn-outline-success">Let's Go</button>
            </div>
            <div className='input-group-append'>
              <button className="btn btn-outline-warning">Random</button>
            </div>
          </div>
          <div className="row">
            <div className="input-group col-sm-6 mb-3">
              <Field className='form-control' name='windowWidth' component={renderInput} type="text" placeholder={windowWidth} />
            </div>
            <div className="input-group col-sm-6 mb-3">
              <Field className='form-control' name='windowHeight' component={renderInput} type="text" placeholder={windowHeight} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

SearchBar = reduxForm({
  form: 'search',
})(SearchBar);

export default connect(null, {})(SearchBar);
