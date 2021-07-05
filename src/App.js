import React from 'react';
// import {initialState} from './reducers'; 
// import {reducer} from  './reducers/';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {buyFeature, removeFeature} from './actions/index'


 const App = ({state, buyFeature, removeFeature}) => {                        //if you type props here, you need to add props to all your states
  //  const {state, buyFeature, removeFeature }

  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures removeFeature= {removeFeature} car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyFeature = {buyFeature} additionalFeatures = {state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps =(state) =>{     
  return{
    state:state     // you can retrun keys of the properties like title: state.title
  }                 //you can just write state
}

export default connect(mapStateToProps, {buyFeature, removeFeature}) (App);
// export default App;