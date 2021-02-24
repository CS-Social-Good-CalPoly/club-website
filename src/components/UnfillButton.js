import React from "react";
import '../assets/UnfillButton.css';

function UnfillButton(props) {

  return (
    <button className="btn-unfill">
      <a href={props.url}>{props.text}</a>  
    </button>
  );
};
export default UnfillButton;