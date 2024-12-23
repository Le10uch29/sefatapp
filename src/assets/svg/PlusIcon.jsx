import React from 'react';

export default function PlusIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M11.6445 1.5752V22.0908"
        stroke="currentColor"
        strokeWidth="2.56445"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.38672 11.833H21.9023"
        stroke="currentColor"
        strokeWidth="2.56445"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}