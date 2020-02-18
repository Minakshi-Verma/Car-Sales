import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


 const App = () => {
 
//   //Step-1 move state as initialState to reducer/index.js, ALSO set up your reducer there
//     const state = {
//     additionalPrice: 0,
//     car: {
//       price: 26395,
//       name: '2019 Ford Mustang',
//       image:
//         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//       features: []
//     },
//     additionalFeatures: [
//       { id: 1, name: 'V-6 engine', price: 1500 },
//       { id: 2, name: 'Racing detail package', price: 1500 },
//       { id: 3, name: 'Premium sound system', price: 500 },
//       { id: 4, name: 'Rear spoiler', price: 250 }
//     ]
//   };
//----------------------------
//  step-2 These are actions so move them separate file that houses actions

// const removeFeature = item => {
//   // dispatch an action here to remove an item
// };

// const buyItem = item => {
//   // dipsatch an action here to add an item
// };

 //---------------
//step 3 Basic imports for all redux applications
//import {createStore} from 'redux';
//import {Provider} from 'react-redux';
// import {reducer} from  './reducers'

//step 4 create the store in root file
//step 5 wrap your <app/> in <Provider></Provider> in index.js root file
  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
