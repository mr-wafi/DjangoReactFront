import React from "react";
import Overlay from "./Overlay";
import PageLoader from "./PageLoader";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import GoogleFontLoader from "react-google-font-loader";
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends React.Component {
  state = {
    bodyClass: "theme-red ls-closed",
    displayOverlay: "none",
  };
  onBarClick = () => {
    if (this.state.bodyClass === "theme-red ls-closed overly-open") {
      this.setState({ bodyClass: "theme-red ls-closed" });
      this.setState({ displayOverlay: "none" });
    } else if (this.state.bodyClass === "theme-red ls-closed") {
      this.setState({ bodyClass: "theme-red ls-closed overly-open" });
      this.setState({ displayOverlay: "block" });
    }
  };

  componentDidMount() {
    var inputall = document.querySelectorAll("input");
    inputall.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentNode.className = "form-line focused";
      });
    });

    var inputall = document.querySelectorAll("input");
    inputall.forEach((input) => {
      input.addEventListener("blur", function () {
        this.parentNode.className = "form-line";
      });
    });
  }

  render() {
    if (window.screen.width > 1150) {
      document.getElementById("root").className = "theme-red";
    } else {
      document.getElementById("root").className = this.state.bodyClass;
    }

    var Page = this.props.page;

    return (
      <React.Fragment>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, 700],
            },
          ]}
          subsets={["latin", "cyrillic-ext"]}
        />
        <GoogleFontLoader
          fonts={[
            {
              font: "Material+Icons",
            },
          ]}
        />

        <Overlay />
        <Navbar onBarClick={this.onBarClick} />
        <Sidebar activepage={this.props.activepage} />
        <Page {...this.props} />
      </React.Fragment>
    );
  }
}

export default MainComponent;
