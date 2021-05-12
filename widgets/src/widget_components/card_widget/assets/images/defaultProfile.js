import React from "react";

export default function DefaultProfile() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="30" rx="6" fill="#1B1B1E" />
      <mask
        id="mask0"
        maskType="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="30">
        <rect width="30" height="30" rx="6" fill="white" />
      </mask>
      <g mask="url(#mask0)"></g>
      <circle cx="15" cy="10" r="4" fill="white" />
      <path
        d="M15 15C10.5817 15 7 18.5817 7 23C9.66667 24.1667 16.6 25.8 23 23C23 18.5817 19.4183 15 15 15Z"
        fill="white"
      />
    </svg>
  );
}
