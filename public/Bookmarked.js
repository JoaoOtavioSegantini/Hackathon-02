import React from "react";

function Icon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
    >
      <path
        fill={color || "#979797"}
        d="M6 4h5v8l-2.5-1.5L6 12V4zm12-2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z"
      ></path>
    </svg>
  );
}

export default Icon;
