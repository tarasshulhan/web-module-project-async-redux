import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchError, getPerson } from './../actions';

const Person = (props) => {

  return (
    <>
      <div>
        <h2>Say Hi to: {props.firstName} {props.lastName}</h2>
        <img src={props.pic}/>
      </div>
    </>
  );
};

export default Person;