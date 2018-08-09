import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../helpers';
import { search } from '../actions';

import '../assets/css/searchbar.css'

class SearchBar extends Component {

  handleSearch(values){
    console.log(`search submitted ${values}`);
    this.props.search(values);
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <div className='searchContainer row justify-content-md-center align-items-center'>
        <form className='col-sm-6' onSubmit={handleSubmit(this.handleSearch.bind(this))}>
          <div className='input-group mb-3'>
            <Field className='form-control' name='canvasSearch' component={renderInput} type="text" placeholder='Find a Canvas' />
            <div className='input-group-append'>
              <button className="btn btn-outline-success">Let's Go</button>
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

export default connect(null, {search})(SearchBar);
