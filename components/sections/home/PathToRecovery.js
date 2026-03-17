"use client";

const steps = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Initial Consultation",
    desc: "Comprehensive evaluation of your condition, medical history, and imaging studies to understand your unique needs.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
    title: "Diagnosis",
    desc: "Advanced diagnostic techniques to precisely identify the source of your pain and determine the best treatment approach.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Treatment Plan",
    desc: "Personalized treatment strategy tailored to your condition, ranging from conservative care to advanced surgical options.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Recovery",
    desc: "Ongoing support throughout your healing journey with comprehensive follow-up care and rehabilitation guidance.",
  },
];

export default function PathToRecovery() {
  return (
    <>
      <style>{`
        .ptr-section {
          background: #070606;
          position: relative;
          overflow: hidden;
        }

        /* Diagonal stripe texture */
        .ptr-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -50deg, transparent, transparent 80px,
            rgba(255,8,5,0.018) 80px, rgba(255,8,5,0.018) 81px
          );
          pointer-events: none;
          z-index: 0;
        }

        /* Red glow top center */
        .ptr-glow {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 320px;
          background: radial-gradient(ellipse, rgba(255,8,5,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Animations */
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ptr-fade-down { animation: fadeDown 0.65s ease 0.1s both; }

        .ptr-step:nth-child(1) { animation: fadeUp 0.6s ease 0.10s both; }
        .ptr-step:nth-child(2) { animation: fadeUp 0.6s ease 0.22s both; }
        .ptr-step:nth-child(3) { animation: fadeUp 0.6s ease 0.34s both; }
        .ptr-step:nth-child(4) { animation: fadeUp 0.6s ease 0.46s both; }

        /* Icon circle */
        .ptr-icon-wrap {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: radial-gradient(135deg, #ff0805 0%, #a80200 100%);
          box-shadow: 0 8px 30px rgba(255,8,5,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ptr-step:hover .ptr-icon-wrap {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(255,8,5,0.5);
        }

        /* Step number badge */
        .ptr-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #0e0d0d;
          border: 2px solid #ff0805;
          color: #ff0805;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        /* Connector line between steps (desktop only) */
        .ptr-connector {
          position: absolute;
          top: 45px;
          left: calc(50% + 52px);
          width: calc(100% - 104px);
          height: 1px;
          background: linear-gradient(90deg, rgba(255,8,5,0.5), rgba(255,8,5,0.1));
          z-index: 0;
        }

        /* Step card hover */
        .ptr-step {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        /* CTA Button */
        .ptr-btn {
          background: #ff0805;
          color: #fff !important;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.5px;
          border: none;
          padding: 16px 48px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 8px 28px rgba(255,8,5,0.4);
          animation: fadeUp 0.6s ease 0.55s both;
        }
        .ptr-btn:hover {
          background: #cc0604;
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(255,8,5,0.55);
        }

        /* Divider under icon */
        .ptr-divider {
          width: 36px;
          height: 2px;
          background: rgba(255,8,5,0.6);
          border-radius: 1px;
          margin: 14px auto 12px;
        }

        @media (max-width: 767px) {
          .ptr-connector { display: none; }
        }
      `}</style>

      <section className="ptr-section py-5">
        <div className="ptr-glow" />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          {/* ── Header ── */}
          <div className="row justify-content-center mb-5 ptr-fade-down">
            <div className="col-12 col-md-8 text-center">
              <h2
                className="fw-bold text-white mb-3"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
              >
                Your Path to{" "}
                <em className="fst-normal" style={{ color: "#ff0805" }}>
                  Recovery
                </em>
              </h2>
              <p
                className="mb-0"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                }}
              >
                From your first consultation to full recovery, we guide you
                through every step of your spine care journey.
              </p>
            </div>
          </div>

          {/* ── Steps Grid ── */}
          <div className="row justify-content-center g-4 mb-5">
            {steps.map((step, i) => (
              <div className="col-12 col-sm-6 col-lg-3 ptr-step" key={i}>
                {/* Connector line — only on lg+ between cards */}
                {i < steps.length - 1 && (
                  <div className="d-none d-lg-block ptr-connector" />
                )}

                <div className="text-center px-2">
                  {/* Icon */}
                  <div className="ptr-icon-wrap">
                    {step.icon}
                    <span className="ptr-badge">{i + 1}</span>
                  </div>

                  {/* Divider */}
                  <div className="ptr-divider" />

                  {/* Title */}
                  <h5
                    className="fw-bold text-white mb-2"
                    style={{ fontSize: "17px" }}
                  >
                    {step.title}
                  </h5>

                  {/* Description */}
                  <p
                    className="mb-0"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "13.5px",
                      lineHeight: 1.75,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA Button ── */}
          <div className="row">
            <div className="col-12 text-center">
              <a href="/appointment" className="ptr-btn">
                Start Your Journey →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
