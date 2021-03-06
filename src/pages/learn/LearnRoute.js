import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./style.scss";
import WebBrief from "./components/Brief";
import Step from "./components/Step";

class LearnRoute extends PureComponent {
  render() {
    return (
      <div className="learn-route-panel">
        <WebBrief />
        <Step />
      </div>
    )
  }
}

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

export default connect(
  mapState,
  mapDispatch
)(LearnRoute);
