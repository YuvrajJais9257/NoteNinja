import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <RemoveCircleIcon />
      </button>
    </div>
  );
}

export default Note;
