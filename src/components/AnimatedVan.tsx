interface AnimatedVanProps {
  className?: string;
}

export default function AnimatedVan({ className = "" }: AnimatedVanProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Bakgrunn: myk sirkel-glød */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[85%] h-[60%] rounded-full bg-forest-200/40 blur-3xl" />
      </div>

      {/* Vei-linje */}
      <svg
        aria-hidden
        className="absolute bottom-[18%] left-0 right-0 w-full"
        viewBox="0 0 400 4"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="2"
          x2="400"
          y2="2"
          stroke="var(--color-forest-800)"
          strokeWidth="0.5"
          strokeDasharray="6 4"
          opacity="0.25"
        />
      </svg>

      {/* Van wrapper — animeres inn */}
      <div className="relative z-10 van-animate">
        <svg
          viewBox="0 0 400 220"
          className="w-full h-auto"
          aria-label="Rensespesialisten-varebil"
          role="img"
        >
          <defs>
            <linearGradient id="van-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2e6b35" />
              <stop offset="100%" stopColor="#1f4525" />
            </linearGradient>
            <linearGradient id="van-front" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3f8447" />
              <stop offset="100%" stopColor="#25552c" />
            </linearGradient>
            <linearGradient id="window-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dcedde" />
              <stop offset="100%" stopColor="#8abf91" />
            </linearGradient>
            <radialGradient id="headlight" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#fff6d8" />
              <stop offset="100%" stopColor="#d9a441" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Skygge */}
          <ellipse
            cx="200"
            cy="190"
            rx="150"
            ry="8"
            fill="#0f1d14"
            opacity="0.15"
          />

          {/* Lykt-glød */}
          <circle cx="340" cy="140" r="26" fill="url(#headlight)" />

          {/* Karosseri — hoveddel */}
          <path
            d="M 50 90
               L 50 170
               Q 50 180 60 180
               L 330 180
               Q 340 180 340 170
               L 340 150
               L 355 150
               L 355 120
               L 340 120
               L 340 100
               Q 340 90 330 90
               L 235 90
               L 220 60
               Q 215 55 208 55
               L 70 55
               Q 60 55 58 65
               Z"
            fill="url(#van-body)"
            stroke="#0d2314"
            strokeWidth="2"
          />

          {/* Front / motorhjelm */}
          <path
            d="M 235 90
               L 340 90
               Q 350 90 350 100
               L 350 145
               L 340 145
               L 340 95
               L 235 95
               Z"
            fill="url(#van-front)"
            opacity="0.6"
          />

          {/* Forrute */}
          <path
            d="M 235 90
               L 220 62
               Q 217 58 212 58
               L 150 58
               Q 144 58 143 64
               L 143 88
               Q 143 90 146 90
               Z"
            fill="url(#window-grad)"
            stroke="#0d2314"
            strokeWidth="1.5"
            opacity="0.95"
          />

          {/* Siderute bak */}
          <rect
            x="75"
            y="68"
            width="60"
            height="22"
            rx="2"
            fill="url(#window-grad)"
            stroke="#0d2314"
            strokeWidth="1.5"
            opacity="0.95"
          />

          {/* Dør-linje */}
          <line
            x1="140"
            y1="95"
            x2="140"
            y2="175"
            stroke="#0d2314"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle cx="135" cy="135" r="1.8" fill="#0d2314" />

          {/* Logo-panel på siden */}
          <rect
            x="155"
            y="105"
            width="170"
            height="55"
            rx="3"
            fill="#fdfcf7"
            stroke="#d9a441"
            strokeWidth="1.5"
          />

          {/* Tekst på siden */}
          <text
            x="240"
            y="128"
            textAnchor="middle"
            fontFamily="Playfair Display, Georgia, serif"
            fontSize="15"
            fontWeight="800"
            fill="#1f4525"
            letterSpacing="0.5"
          >
            RENSESPESIALISTEN
          </text>
          <line
            x1="180"
            y1="135"
            x2="300"
            y2="135"
            stroke="#d9a441"
            strokeWidth="0.8"
          />
          <text
            x="240"
            y="150"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="8"
            fontWeight="500"
            fill="#2e6b35"
            letterSpacing="1.5"
          >
            MØBLER · TEPPER · BILINTERIØR
          </text>

          {/* Amber aksent-linje langs siden */}
          <rect x="55" y="172" width="280" height="3" fill="#d9a441" />

          {/* Front-lykt */}
          <ellipse cx="348" cy="140" rx="5" ry="6" fill="#fff6d8" stroke="#d9a441" strokeWidth="1" />

          {/* Grill */}
          <rect x="342" y="150" width="12" height="18" rx="1" fill="#0d2314" opacity="0.6" />

          {/* Speil */}
          <path
            d="M 225 90 L 233 80 L 237 84 L 229 94 Z"
            fill="#25552c"
            stroke="#0d2314"
            strokeWidth="1"
          />

          {/* Hjul — bakre */}
          <g>
            <circle cx="100" cy="180" r="22" fill="#0f1d14" />
            <circle cx="100" cy="180" r="16" fill="#1f2937" className="van-wheel" />
            <circle cx="100" cy="180" r="14" fill="none" stroke="#4b5563" strokeWidth="1" />
            {/* Felg-eiker */}
            <g className="van-wheel" style={{ transformOrigin: "100px 180px" }}>
              <line x1="100" y1="168" x2="100" y2="192" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="88" y1="180" x2="112" y2="180" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="91.5" y1="171.5" x2="108.5" y2="188.5" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="91.5" y1="188.5" x2="108.5" y2="171.5" stroke="#6b7280" strokeWidth="1.5" />
            </g>
            <circle cx="100" cy="180" r="3" fill="#9ca3af" />
          </g>

          {/* Hjul — fremre */}
          <g>
            <circle cx="300" cy="180" r="22" fill="#0f1d14" />
            <circle cx="300" cy="180" r="16" fill="#1f2937" />
            <circle cx="300" cy="180" r="14" fill="none" stroke="#4b5563" strokeWidth="1" />
            <g className="van-wheel" style={{ transformOrigin: "300px 180px" }}>
              <line x1="300" y1="168" x2="300" y2="192" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="288" y1="180" x2="312" y2="180" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="291.5" y1="171.5" x2="308.5" y2="188.5" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="291.5" y1="188.5" x2="308.5" y2="171.5" stroke="#6b7280" strokeWidth="1.5" />
            </g>
            <circle cx="300" cy="180" r="3" fill="#9ca3af" />
          </g>
        </svg>
      </div>

      {/* Damp/dampskyer fra utstyret */}
      <div
        aria-hidden
        className="absolute left-[20%] top-[15%] w-3 h-3 rounded-full bg-forest-100"
        style={{ animation: "steam-rise 3s ease-out infinite", animationDelay: "0.5s" }}
      />
      <div
        aria-hidden
        className="absolute left-[25%] top-[20%] w-2 h-2 rounded-full bg-forest-100"
        style={{ animation: "steam-rise 3s ease-out infinite", animationDelay: "1.2s" }}
      />
      <div
        aria-hidden
        className="absolute left-[15%] top-[25%] w-2.5 h-2.5 rounded-full bg-forest-100"
        style={{ animation: "steam-rise 3s ease-out infinite", animationDelay: "1.8s" }}
      />
    </div>
  );
}
