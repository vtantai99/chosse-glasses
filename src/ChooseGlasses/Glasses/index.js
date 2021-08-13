import React, { Component } from "react";
import "./style.css";

class Glasses extends Component {
  show = () => {
    console.log("item");
  };
  elementData = () => {
    return this.props.data.map((item, index) => {
      return (
        <div className="col-md-4 mb-2" key={index}>
          <div
            className="glasses__item"
            onClick={() => this.props.getGlasses(item)}
          >
            <img
              src={item.url}
              alt="glass"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="col-md-6">
        <div className="glasses">
          <h3 className="text-center display-4 mb-2">Virtual Glasses</h3>
          <div className="row">{this.elementData()}</div>
        </div>
      </div>
    );
  }
}

export default Glasses;
