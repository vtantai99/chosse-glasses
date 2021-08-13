import React, { Component } from "react";
import "./style.css";
import Glasses from "../Glasses";
import Model from "../Modell";
import G1 from "../../assets/img/v1.png";
import G2 from "../../assets/img/v2.png";
import G3 from "../../assets/img/v3.png";
import G4 from "../../assets/img/v4.png";
import G5 from "../../assets/img/v5.png";
import G6 from "../../assets/img/v6.png";
import G7 from "../../assets/img/v7.png";
import G8 from "../../assets/img/v8.png";
import G9 from "../../assets/img/v9.png";
class ChooseGlasses extends Component {
  dataGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: G1,
      desc: "Mắc lắm đừng mua",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: G2,
      desc: "Cute lắm đó",
    },

    {
      id: 3,
      price: 99,
      name: "DIOR D6700HQ",
      url: G3,
      desc: "Cái này cũng mắc lắm",
    },

    {
      id: 4,
      price: 200,
      name: "DIOR D6005U",
      url: G4,
      desc: "Cái này vip lắm",
    },

    {
      id: 5,
      price: 300,
      name: "PRADA P8750",
      url: G5,
      desc: "New product in 2020",
    },

    {
      id: 6,
      price: 70,
      name: "PRADA P9700",
      url: G6,
      desc: "cùi bắp",
    },

    {
      id: 7,
      price: 750,
      name: "FENDI F8750",
      url: G7,
      desc: "cùi bắp 2",
    },

    {
      id: 8,
      price: 350,
      name: "FENDI F8500",
      url: G8,
      desc: "cùi bắp 3",
    },

    {
      id: 9,
      price: 99,
      name: "FENDI F4300",
      url: G9,
      desc: "cùi bắp 4",
    },
  ];
  state = {
    selectedGlasses: this.dataGlasses[0],
  };
  getGlasses = (glasses) => {
    this.setState({
      selectedGlasses: glasses,
    });
  };
  render() {
    return (
      <div>
        <section className="main">
          <div className="container mt-4">
            <h2 className="display-3 text-center mb-3">
              Try glasses app online
            </h2>
            <hr />
            <div className="row mt-3">
              <Glasses data={this.dataGlasses} getGlasses={this.getGlasses} />
              <Model selectedGlasses={this.state.selectedGlasses} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ChooseGlasses;
