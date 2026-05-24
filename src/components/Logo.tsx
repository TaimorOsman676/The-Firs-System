import * as React from "react";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="lg-mark" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e5b97c" />
          <stop offset="1" stopColor="#b07e3d" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="9" stroke="url(#lg-mark)" strokeWidth="1.4" />
      <path
        d="M11 12h18M11 12v16M20 12v16M29 28h-9"
        stroke="url(#lg-mark)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="11" cy="12" r="1.6" fill="#e5b97c" />
      <circle cx="29" cy="12" r="1.6" fill="#e5b97c" />
      <circle cx="20" cy="28" r="1.6" fill="#e5b97c" />
    </svg>
  );
}
