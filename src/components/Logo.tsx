import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="K" transform="translate(35.000000, 35.000000)">
          <path
            fill="currentColor"
            d="M12.144 34V20.752L0.624 0.495999H5.232L14.16 16.624H14.304L23.232 0.495999H27.84L16.176 20.608V34H12.144Z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
