import { connect } from 'react-redux';
import { searchByTerm } from '../actions';
import SearchBar from '../components/SearchBar';

const mapDispatchToProps = dispatch => {
  return {
    onSearchByTerm: term => {
      dispatch(searchByTerm(term));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);