import React from 'react';

export function LogoIcon({ className, size = 32 }) {
  // Spacing layout matching the user's logo design:
  // 7 horizontal tracks converging into a single point on the right
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* squares (nodes) */}
      <rect x="10" y="7" width="6" height="6" fill="currentColor" />
      <rect x="24" y="19" width="6" height="6" fill="currentColor" />
      <rect x="38" y="31" width="6" height="6" fill="currentColor" />
      <rect x="52" y="43" width="6" height="6" fill="currentColor" />
      <rect x="38" y="55" width="6" height="6" fill="currentColor" />
      <rect x="24" y="67" width="6" height="6" fill="currentColor" />
      <rect x="10" y="79" width="6" height="6" fill="currentColor" />

      {/* circuit paths converging */}
      <path
        d="M 16 10 H 36 C 80 10, 120 46, 170 46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 30 22 H 50 C 90 22, 125 46, 170 46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 44 34 H 64 C 100 34, 130 46, 170 46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 58 46 H 170"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 44 58 H 64 C 100 58, 130 46, 170 46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 30 70 H 50 C 90 70, 125 46, 170 46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 16 82 H 36 C 80 82, 120 46, 170 46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default LogoIcon;
