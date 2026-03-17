"use client";

const procedures = [
  {
    title: "Minimally Invasive Spine Surgery",
    desc: "Advanced techniques with smaller incisions, less pain, and faster recovery times.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" />
        <line x1="6" y1="12" x2="18" y2="12" />
      </svg>
    ),
  },
  {
    title: "Spinal Fusion",
    desc: "Stabilization procedure joining two or more vertebrae to eliminate painful motion.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
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
    title: "Laminectomy",
    desc: "Decompression surgery removing bone to relieve pressure on spinal nerves.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3c-4 0-7 2.5-7 6 0 2 1 3.5 2.5 4.5L9 20h6l1.5-6.5C18 12.5 19 11 19 9c0-3.5-3-6-7-6z" />
        <line x1="9" y1="20" x2="15" y2="20" />
      </svg>
    ),
  },
  {
    title: "Discectomy",
    desc: "Removal of herniated disc material pressing on nerves causing pain.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
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
    title: "Kyphoplasty",
    desc: "Minimally invasive procedure to restore vertebral height and relieve fracture pain.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2c-2 0-4 1-4 3s2 3 4 3 4-1 4-3-2-3-4-3z" />
        <path d="M8 8v10a4 4 0 0 0 8 0V8" />
      </svg>
    ),
  },
  {
    title: "Vertebroplasty",
    desc: "Injection of bone cement to stabilize painful vertebral compression fractures.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
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
    title: "Foraminotomy",
    desc: "Enlarging the neural foramen to relieve pressure on compressed nerve roots.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
      </svg>
    ),
  },
  {
    title: "Spinal Decompression",
    desc: "Procedures to relieve pressure on the spinal cord and nerve roots.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M5 8l7-6 7 6M5 16l7 6 7-6" />
      </svg>
    ),
  },
  {
    title: "Artificial Disc Replacement",
    desc: "Motion-preserving alternative to fusion using advanced artificial discs.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
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
    title: "Revision Spine Surgery",
    desc: "Expert corrective procedures for patients requiring additional spine surgery.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff0805"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function SurgicalProcedures() {
  return (
    <>
      <style>{`
        .sp-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .sp-header h2 {
        font-size: clamp(28px, 4vw, 46px);
          font-weight: 550;
          color: white;
          letter-spacing: 2px;
          margin-bottom: 16px;
          line-height: 1;
        }

        .sp-header h2 span {
          color: #ff0805;
        }

        .sp-header p {
          color: white;
          font-size: 16px;
        }

        .sp-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .sp-card {
          background: #111010;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 15px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, background 0.3s;
          cursor: default;
        }

        .sp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #ff0805;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .sp-card:hover::before {
          transform: scaleX(1);
        }

        .sp-card:hover {
          border-color: rgba(255, 8, 5, 0.25);
          background: #161414;
          transform: translateY(-4px);
        }

        .sp-icon-wrap {
          width: 58px;
          height: 58px;
          background: rgba(255, 8, 5, 0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 8, 5, 0.15);
          transition: background 0.3s;
        }

        .sp-card:hover .sp-icon-wrap {
          background: rgba(255, 8, 5, 0.14);
        }

        .sp-card h3 {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .sp-card p {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .sp-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 700px) {
          .sp-grid { grid-template-columns: repeat(1, 1fr); }
        }

        @media (max-width: 420px) {
          .sp-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="containers my-4">
        <div
          className="p-4"
          style={{
            backgroundColor: "#070606",
          }}
        >
          <div className="sp-header">
            <h2>
              Surgical <span>Procedures</span>
            </h2>
            <p>
              State-of-the-art surgical techniques designed to minimize recovery
              time and maximize patient outcomes.
            </p>
          </div>

          <div className="sp-grid">
            {procedures.map((item, i) => (
              <div className="sp-card" key={i}>
                <div className="sp-icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p style={{ color: "white" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
