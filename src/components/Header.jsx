import React from "react";
import StarIcon from "@mui/icons-material/Star";

function Header() {
  return (
    <header>
      <h1>
        <StarIcon />
        Note Ninja
        <span role="img" aria-label="ninja emoji">
          🥷
        </span>
      </h1>
    </header>
  );
}

export default Header;
