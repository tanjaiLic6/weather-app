import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React from "react";




export  class Loading extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Watch"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000} //3 secs
        style={{textAlign: "center", marginTop:'20%'}}

      />
    );
  }
}