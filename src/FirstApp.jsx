import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({title, name, subTitle,}) => {
  return (
      <div>
        <h1 data-testid={'test-title'}> { title } </h1>
        <h3 data-testid={'test-subtitle'}>{subTitle}</h3>
        <p>{name}</p>
      </div>
  );
};

FirstApp.propTypes = {
  title:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  subTitle:PropTypes.string.isRequired
};

FirstApp.defaultProps={
  name:'Dont have name',
  subTitle:'Dont have subtitle',
  //title:'Dont have title',
}

export default FirstApp;