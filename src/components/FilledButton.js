import React from "react";
import '../assets/FilledButton.css';

function FilledButton(props) {

  return (
    <button className="btn-filled">
      <a href={props.url}>{props.text}</a>  
    </button>
  );
};
export default FilledButton;