import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";

import { addFeature, subtractFeature } from "./actions/featureActions";

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.subtractFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} subtractFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          addFeature={buyItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.featureReducer.additionalPrice,
    car: state.featureReducer.car,
    additionalFeatures: state.featureReducer.additionalFeatures
  };
};

export default connect(mapStateToProps, { addFeature, subtractFeature })(App);
