import React from "react";
import '../../assets/SharedAssets/UnfilledButton.css';

function UnfilledButton(props) {

  return (
    <button className="btn-unfilled">
      <a href={props.url}>{props.text}</a>  
    </button>
  );
};
export default UnfilledButton;