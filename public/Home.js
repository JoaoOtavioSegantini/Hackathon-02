import React from "react";

function Icon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="25"
      fill="none"
      viewBox="0 0 20 25"
    >
      <path
        fill={color || "#040C18"}
        fillOpacity={color ? "1" : "0.49"}
        d="M8 17v-6h4v6h5V9h3L10 0 0 9h3v8h5z"
      ></path>
    </svg>
  );
}

export default Icon;
