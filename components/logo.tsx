import Link from "next/link";

export const Logo = () => (
  <Link
    href="/"
    aria-label="Home page"
    className="group hover:[&>svg]:[filter:drop-shadow(0_0_8px_rgba(99,102,241,0.3))]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 120"
      className="w-60 h-auto transition-all duration-300"
    >
      <defs>
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#1B56FD" }} />
          <stop offset="25%" style={{ stopColor: "#8b5cf6" }} />
          <stop offset="50%" style={{ stopColor: "#66d9ed" }} />
          <stop offset="75%" style={{ stopColor: "#f59e0b" }} />
          <stop offset="100%" style={{ stopColor: "#1B56FD" }} />

          <animate
            attributeName="x1"
            values="0%;100%;0%"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="100%;200%;100%"
            dur="4s"
            repeatCount="indefinite"
          />
        </linearGradient>

        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <style>
          {`
            @keyframes pulse {
              0%, 100% { opacity: 0.8; transform: scale(1); }
              50% { opacity: 0.4; transform: scale(1.2); }
            }
            .animate-pulse {
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
          `}
        </style>
      </defs>

      <g transform="translate(20, 80)" filter="url(#neon-glow)">
        <text
          x="0"
          y="0"
          fill="url(#mainGradient)"
          fontSize="50"
          fontFamily="'Poppins', system-ui, sans-serif"
          fontWeight="600"
          letterSpacing="-1px"
        >
          demoladev
        </text>
      </g>

      <g className="particles" opacity="0.8" transform="translate(140, 0)">
        <circle
          cx="50"
          cy="30"
          r="2"
          fill="#8b5cf6"
          className="animate-pulse"
        />
        <circle
          cx="120"
          cy="50"
          r="1.5"
          fill="#6366f1"
          className="animate-pulse"
          style={{ animationDelay: "0.2s" }}
        />
        <circle
          cx="200"
          cy="70"
          r="1.8"
          fill="#8b5cf6"
          className="animate-pulse"
          style={{ animationDelay: "0.4s" }}
        />
        <circle
          cx="280"
          cy="40"
          r="1.3"
          fill="#66d9ed"
          className="animate-pulse"
          style={{ animationDelay: "0.6s" }}
        />
      </g>
    </svg>
  </Link>
);
