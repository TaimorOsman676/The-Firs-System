import * as React from "react";

type IconName =
  | "shield-check"
  | "briefcase"
  | "lightbulb"
  | "handshake"
  | "users"
  | "Anchor"
  | "Layers"
  | "FlaskConical"
  | "PaintBucket"
  | "Hammer"
  | "Shield"
  | "Snowflake"
  | "Ruler"
  | "Sparkles"
  | "Package"
  | "Droplets"
  | "Wrench"
  | "Phone"
  | "Mail"
  | "MapPin"
  | "Clock"
  | "ArrowRight"
  | "ArrowLeft"
  | "ChevronDown"
  | "Check"
  | "Globe"
  | "MessageCircle"
  | "Send"
  | "Menu"
  | "X"
  | "Building"
  | "Beaker"
  | "Award"
  | "Truck"
  | "FileText"
  | "Download"
  | "Search";

interface Props extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, className, ...rest }: Props) {
  const common: React.SVGAttributes<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...rest,
  };

  switch (name) {
    case "shield-check":
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M3 13h18" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.6 1 2.5v0c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v0c0-.9.3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common}>
          <path d="m11 17 2 2a1 1 0 1 0 1.4-1.4" />
          <path d="m14 16 2.6 2.6a1 1 0 1 0 1.4-1.4l-5.5-5.5" />
          <path d="M3 12V7l4-4 4 4v0" />
          <path d="M21 11V7l-4-4-4 4 1.5 1.5" />
          <path d="m3 12 4 4 5-5-2-2-3 3" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "Anchor":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="3" />
          <path d="M12 22V8" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        </svg>
      );
    case "Layers":
      return (
        <svg {...common}>
          <path d="m12 2 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      );
    case "FlaskConical":
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v6L4 20a1 1 0 0 0 .8 1.5h14.4A1 1 0 0 0 20 20l-6-11V3" />
          <path d="M7 16h10" />
        </svg>
      );
    case "PaintBucket":
      return (
        <svg {...common}>
          <path d="M19 11h-1l-7-7-7 7 7 7 7-7Z" />
          <path d="M5 2 2 5" />
          <path d="M21 16c0 1.7-1.3 3-3 3" />
        </svg>
      );
    case "Hammer":
      return (
        <svg {...common}>
          <path d="m15 12-8.5 8.5a2.1 2.1 0 1 1-3-3L12 9" />
          <path d="m17.6 6.6 2.8 2.8" />
          <path d="M14 4 22 12l-4 4-8-8 4-4Z" />
        </svg>
      );
    case "Shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10Z" />
        </svg>
      );
    case "Snowflake":
      return (
        <svg {...common}>
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="m4.93 4.93 14.14 14.14" />
          <path d="m19.07 4.93-14.14 14.14" />
        </svg>
      );
    case "Ruler":
      return (
        <svg {...common}>
          <path d="M21 6 6 21 3 18l3-3 1 1 2-2-1-1 2-2 1 1 2-2-1-1 2-2 1 1 2-2-1-1 2-2 3 3Z" />
        </svg>
      );
    case "Sparkles":
      return (
        <svg {...common}>
          <path d="m12 3 1.9 4.6L18 9.5l-4.1 1.9L12 16l-1.9-4.6L6 9.5l4.1-1.9L12 3Z" />
          <path d="M19 14l.8 1.9L22 17l-2.2.8L19 20l-.8-2L16 17l2.2-1.1L19 14Z" />
          <path d="M5 4l.6 1.5L7 6l-1.4.6L5 8l-.6-1.4L3 6l1.4-.5L5 4Z" />
        </svg>
      );
    case "Package":
      return (
        <svg {...common}>
          <path d="M3 7v10l9 5 9-5V7L12 2 3 7Z" />
          <path d="m3 7 9 5 9-5" />
          <path d="M12 22V12" />
        </svg>
      );
    case "Droplets":
      return (
        <svg {...common}>
          <path d="M7 16.3a4.5 4.5 0 1 1 6.4-6.3l3.1 4.4a4.5 4.5 0 0 1-3.7 7.1A4.5 4.5 0 0 1 7 16.3Z" />
          <path d="M12.6 6.3 14.5 4l1.9 2.3a3 3 0 1 1-4.7 0Z" />
        </svg>
      );
    case "Wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4.5 4.5 0 1 1-6.4 6.4l-5 5a2.1 2.1 0 1 0 3 3l5-5a4.5 4.5 0 0 0 6.4-6.4l-3 3-2.1-2.1 3-2.9Z" />
        </svg>
      );
    case "Phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
        </svg>
      );
    case "Mail":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 6-10 7L2 6" />
        </svg>
      );
    case "MapPin":
      return (
        <svg {...common}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "Clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "ArrowRight":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );
    case "ArrowLeft":
      return (
        <svg {...common}>
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
      );
    case "ChevronDown":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "Check":
      return (
        <svg {...common}>
          <path d="m5 12 5 5L20 7" />
        </svg>
      );
    case "Globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z" />
        </svg>
      );
    case "MessageCircle":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.4 8.4 0 0 1-9.7 8.3L3 21l1.2-8.3A8.5 8.5 0 1 1 21 11.5Z" />
        </svg>
      );
    case "Send":
      return (
        <svg {...common}>
          <path d="m22 2-7 20-4-9-9-4 20-7Z" />
          <path d="M22 2 11 13" />
        </svg>
      );
    case "Menu":
      return (
        <svg {...common}>
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </svg>
      );
    case "X":
      return (
        <svg {...common}>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      );
    case "Building":
      return (
        <svg {...common}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 6h.01M12 10h.01M12 14h.01" />
        </svg>
      );
    case "Beaker":
      return (
        <svg {...common}>
          <path d="M4 22h16" />
          <path d="M7 4v6.5L3 18a2 2 0 0 0 1.7 3h14.6A2 2 0 0 0 21 18l-4-7.5V4" />
          <path d="M5 4h14" />
        </svg>
      );
    case "Award":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="6" />
          <path d="m8.2 13.8-2 7L12 18l5.8 2.8-2-7" />
        </svg>
      );
    case "Truck":
      return (
        <svg {...common}>
          <path d="M3 6h12v9H3z" />
          <path d="M15 9h4l3 4v2h-7" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    case "FileText":
      return (
        <svg {...common}>
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      );
    case "Download":
      return (
        <svg {...common}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
    case "Search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    default:
      return null;
  }
}

export type { IconName };
