import React from "react";
import '../../assets/SharedAssets/FilledButton.css';

function FilledButton({text, url}) {

  return (
    <button className="btn-filled">
      <a href={url}>{text}</a>
    </button>
  );
};
export default FilledButton;
