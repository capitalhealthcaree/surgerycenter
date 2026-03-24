"use client";

const conditions = [
  {
    title: "Herniated Disc",
    desc: "Damaged disc presses nerves causing pain, numbness, and reduced mobility in affected areas.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Spinal Stenosis",
    desc: "Narrowed spinal canal compresses nerves, leading to pain, weakness, and difficulty walking.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="4" ry="2.5" />
        <ellipse cx="12" cy="12" rx="4" ry="2.5" />
        <ellipse cx="12" cy="19" rx="4" ry="2.5" />
        <line x1="12" y1="7.5" x2="12" y2="9.5" />
        <line x1="12" y1="14.5" x2="12" y2="16.5" />
      </svg>
    ),
  },
  {
    title: "Degenerative Disc Disease",
    desc: "Disc wear reduces flexibility, causing chronic pain and limited spine movement over time.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    title: "Scoliosis",
    desc: "Abnormal spine curvature affects posture, balance, and may lead to pain or breathing issues.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2c2 3-2 5 0 8s-2 5 0 8" />
        <path d="M8 4c2 3-2 5 0 8" />
        <path d="M16 12c2 3-2 5 0 8" />
      </svg>
    ),
  },
  {
    title: "Spinal Fractures",
    desc: "Broken vertebrae disrupt stability, often causing severe pain and reduced structural support.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v8l-3 4h6l-3-4" />
        <path d="M9 14l-4 6h14l-4-6" />
        <line x1="8" y1="2" x2="16" y2="2" />
      </svg>
    ),
  },
  {
    title: "Sciatica",
    desc: "Nerve compression causes radiating pain from lower back through legs, affecting daily movement.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3c0 0-4 4-4 9s4 9 4 9" />
        <path d="M8 7c0 0 4 2 4 5s-4 5-4 5" />
      </svg>
    ),
  },
  {
    title: "Failed Back Surgery",
    desc: "Persistent pain after surgery requires advanced evaluation and corrective surgical planning approaches.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="3" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Spinal Tumors",
    desc: "Abnormal growths within the spine may affect nerves, stability, and overall neurological function.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Spondylolisthesis",
    desc: "Vertebra slips forward, causing instability, nerve pressure, and lower back pain symptoms.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="8" width="8" height="5" rx="1" />
        <rect x="13" y="11" width="8" height="5" rx="1" />
        <line x1="7" y1="8" x2="7" y2="5" />
        <line x1="17" y1="11" x2="17" y2="8" />
      </svg>
    ),
  },
  {
    title: "Kyphosis",
    desc: "Excessive forward spine curvature leads to posture issues, stiffness, and functional limitations.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 4c4 0 8 2 8 8s-4 8-8 8" />
        <path d="M14 12h4" />
        <path d="M16 10l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: "Cervical Radiculopathy",
    desc: "Neck nerve compression causes pain, weakness, and tingling sensations in the arms region.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="6" r="3" />
        <path d="M12 9v6" />
        <path d="M9 15l-3 5" />
        <path d="M15 15l3 5" />
        <path d="M9 12H6" />
        <path d="M15 12h3" />
      </svg>
    ),
  },
  {
    title: "Facet Joint Syndrome",
    desc: "Joint inflammation in spine leads to localized pain, stiffness, and restricted movement.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2c-4 0-7 3-7 7 0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export default function ConditionsWetreat() {
  return (
    <>
      <style>{`
        /* ── header ── */
        .cwt-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .cwt-header h2 {
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 550;
          color: #ffffff;
          letter-spacing: 2px;
          margin-bottom: 14px;
          line-height: 1;
        }
        .cwt-header h2 em {
          color: #ff0805;
          font-style: normal;
        }
        .cwt-header p {
          color: white;
          font-size: 16px;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.75;
        }

        /* ══════════════════════
           DESKTOP GRID (≥681px)
        ══════════════════════ */
        .cwt-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          max-width: 1280px;
          margin: 0 auto;
          border: 2px solid rgba(255,255,255,0.04);
          border-radius: 20px;
          overflow: hidden;
        }

        .cwt-card {
          background: #0e0d0d;
          padding: 15px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
          border-right: 1px solid rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .cwt-card:hover { background: #141212; }
        .cwt-card:nth-child(4n) { border-right: none; }
        .cwt-card:nth-last-child(-n+4) { border-bottom: none; }

        .cwt-card-accent {
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 0;
          background: #ff0805;
          transition: height 0.4s ease;
        }
        .cwt-card:hover .cwt-card-accent { height: 100%; }

        .cwt-icon-box {
          width: 54px;
          height: 54px;
          background: #1a1818;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          color: rgba(255,255,255,0.35);
          border: 1px solid rgba(255,255,255,0.06);
          transition: color 0.3s, background 0.3s, border-color 0.3s;
        }
        .cwt-card:hover .cwt-icon-box {
          color: #ff0805;
          background: rgba(255,8,5,0.08);
          border-color: rgba(255,8,5,0.2);
        }
        .cwt-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          margin-bottom: 10px;
          line-height: 1.3;
          transition: color 0.3s;
        }
        .cwt-card:hover h3 { color: #ffffff; }
        .cwt-card p {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.7;
          margin: 0;
          transition: color 0.3s;
        }
        .cwt-card:hover p { color: rgba(255,255,255,0.55); }

        /* ── tablet ── */
        @media (max-width: 1024px) {
          .cwt-grid { grid-template-columns: repeat(3, 1fr); }
          .cwt-card:nth-child(4n) { border-right: 1px solid rgba(255,255,255,0.04); }
          .cwt-card:nth-child(3n) { border-right: none; }
          .cwt-card:nth-last-child(-n+3) { border-bottom: none; }
          .cwt-card:nth-last-child(-n+4) { border-bottom: 1px solid rgba(255,255,255,0.04); }
        }

        /* ══════════════════════
           MOBILE (≤680px)
        ══════════════════════ */
        @media (max-width: 680px) {
          .cwt-header { margin-bottom: 36px; }
          .cwt-header h2 { letter-spacing: 1px; }

          /* switch to horizontal-scroll pill list */
          .cwt-grid {
            display: flex;
            flex-direction: column;
            gap: 0;
            border-radius: 0;
            border: none;
            padding: 0 16px;
          }

          /* each card = horizontal row */
          .cwt-card {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 20px 18px;
            border-radius: 14px;
            border: 1px solid rgba(255,255,255,0.06) !important;
            margin-bottom: 10px;
            background: #0e0d0d;
            position: relative;
            overflow: hidden;
            transition: background 0.25s, border-color 0.25s, transform 0.2s;
          }
          .cwt-card:last-child { margin-bottom: 0; }
          .cwt-card:active {
            transform: scale(0.985);
          }
          .cwt-card:hover {
            background: #141212;
            border-color: rgba(255,8,5,0.3) !important;
          }

          /* red left accent always visible on mobile */
          .cwt-card-accent {
            width: 3px;
            height: 40% !important;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 0 2px 2px 0;
          }
          .cwt-card:hover .cwt-card-accent { height: 70% !important; }

          /* icon — smaller, inline */
          .cwt-icon-box {
            width: 46px;
            height: 46px;
            min-width: 46px;
            border-radius: 12px;
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .cwt-card:hover .cwt-icon-box {
            color: #ff0805;
            background: rgba(255,8,5,0.1);
            border-color: rgba(255,8,5,0.25);
          }
          .cwt-card-text { flex: 1; min-width: 0; }
          .cwt-card h3 {
            font-size: 14.5px;
            font-weight: 600;
            margin-bottom: 5px;
            color: rgba(255,255,255,0.92);
          }
          .cwt-card p {
            font-size: 12.5px;
            line-height: 1.6;
            color: white;
          }
          .cwt-card:hover p { color: white; }
        }

        @media (max-width: 380px) {
          .cwt-grid { padding: 0 12px; }
          .cwt-card { padding: 16px 14px; gap: 12px; }
          .cwt-icon-box { width: 40px; height: 40px; min-width: 40px; }
        }
      `}</style>

      <div>
        <div className="p-4" style={{ backgroundColor: "#070606" }}>
          <div className="cwt-header">
            <h2>
              Conditions We <em>Treat</em>
            </h2>
            <p>
              We treat a wide range of spine-related conditions that affect
              movement, comfort, and daily life. Each condition is carefully
              evaluated to determine the most effective surgical solution.
            </p>
          </div>

          <div className="cwt-grid">
            {conditions.map((item, i) => (
              <div className="cwt-card" key={i}>
                <div className="cwt-card-accent" />

                {/* icon */}
                <div className="cwt-icon-box">{item.icon}</div>

                {/* text — wrapped in div for mobile flex layout */}
                <div className="cwt-card-text">
                  <h3>{item.title}</h3>
                  <p style={{ color: "white" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
