import React from 'react';
import { connect } from 'react-redux';
import Canvas from '../components/Canvas';
import { searchByImage } from '../actions';

function CanvasList({ data, onImageSelect }) {
  if(!data.length) {
    return (
      <div>
        No images
      </div>
    )
  }
  return (
    <div>
      {data.map(data => {
        return (
          <Canvas image={ data.img } onImageSelect={ onImageSelect } key={ data._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    images: state.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: id => {
      dispatch(searchByImage(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasList);