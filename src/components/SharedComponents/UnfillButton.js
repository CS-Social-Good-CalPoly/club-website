import React from "react";
import '../assets/SharedAssets/UnfillButton.css';

function UnfillButton(props) {

  return (
    <button className="btn-unfill">
      <a href={props.url}>{props.text}</a>  
    </button>
  );
};
export default UnfillButton;