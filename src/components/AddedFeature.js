import React from 'react';

// import {removeFeature} from '../actions'



const AddedFeature = props => {
  console.log(" i am the prop", props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick ={()=>props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;





