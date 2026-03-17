"use client";

export default function HeroBanner() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes pulseBorder {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,8,5,0.4); }
          50%       { box-shadow: 0 0 0 12px rgba(255,8,5,0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }

        /* ── base ── */
        .hero {
          width: 100%;
          background: #070606;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -50deg,
            transparent,
            transparent 80px,
            rgba(255,8,5,0.025) 80px,
            rgba(255,8,5,0.025) 81px
          );
          z-index: 0;
        }

        /* ── grid ── */
        .hero-grid {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          // padding: 0 64px;
          align-items: center;
        }

        /* ── LEFT TEXT ── */
        .hero-left {
          padding: 56px 56px 56px 0;
          display: flex;
          flex-direction: column;
        }

        .hero-h1 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 900;
          line-height: 1.07;
          color: #ffffff;
          margin: 0;
          opacity: 0;
          animation: fadeRight 0.7s ease 0.3s forwards;
        }
        .hero-h1 .red-word {
          color: #ff0805;
          position: relative;
        }

        .hero-desc {
          font-size: 16px;
          color: white;
          margin: 20px 0 36px 0;
          max-width: 650px;
          opacity: 0;
          animation: fadeRight 0.7s ease 0.65s forwards;
        }

        /* buttons */
        .btn-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          opacity: 0;
          animation: fadeUp 0.65s ease 0.85s forwards;
        }
        .btn-red {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 30px;
          background: #ff0805;
          color: #fff;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 2px solid #ff0805;
          border-radius: 3px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          animation: pulseBorder 2.8s ease 1.8s infinite;
        }
        .btn-red:hover {
          background: #cc0603;
          border-color: #cc0603;
          transform: translateY(-3px);
          color: #fff;
          box-shadow: 0 12px 36px rgba(255,8,5,0.45);
        }

        /* ── DESKTOP stat strip ── */
        .stat-strip {
          display: flex;
          gap: 0;
          margin-top: 44px;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 28px;
          opacity: 0;
          animation: fadeUp 0.65s ease 1.05s forwards;
        }
        .stat-block {
          flex: 1;
          padding-right: 28px;
          position: relative;
        }
        .stat-block:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0; top: 4px; bottom: 4px;
          width: 1px;
          background: rgba(255,255,255,0.1);
        }
        .stat-block:not(:first-child) {
          padding-left: 28px;
          padding-right: 0;
        }
        .stat-num {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        /* ── RIGHT IMAGE ── */
        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 0 48px 40px;
          opacity: 0;
          animation: fadeLeft 0.8s ease 0.35s forwards;
        }
        .img-wrap {
          position: relative;
          width: 100%;
          max-width: 510px;
        }
      
        .img-main {
          position: relative;
          z-index: 1;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06);
          animation: floatY 6s ease-in-out 1.4s infinite;
        }
        .img-main img {
          width: 100%;
          height: 550px;
          object-fit: cover;
          display: block;
          filter: brightness(0.92) contrast(1.05);
          transition: transform 0.5s ease, filter 0.5s ease;
        }
        .img-main:hover img {
          transform: scale(1.04);
          filter: brightness(1) contrast(1.05);
        }
        .img-main::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(255,8,5,0.1) 0%, transparent 45%, rgba(7,6,6,0.35) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* ══════════════════════════════
           MOBILE
        ══════════════════════════════ */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 0 22px;
          }
          .hero-left {
            padding: 36px 0 40px 0;
            order: 2;
          }
          .hero-right {
            padding: 44px 0 0 0;
            order: 1;
          }
          .img-main img { height: 450px; }
          .hero-desc { max-width: 100%; margin: 16px 0 28px 0; }
          .btn-wrap { flex-direction: column; }
          .btn-red { justify-content: center; }

          /* ── Mobile stats: attractive card grid ── */
          .stat-strip {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-top: 28px;
            border-top: none;
            padding-top: 0;
          }
          .stat-block {
            padding: 16px 10px !important;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,8,5,0.22);
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0;
            position: relative;
            overflow: hidden;
            transition: background 0.25s, border-color 0.25s;
          }
          .stat-block:hover {
            background: rgba(255,8,5,0.1);
            border-color: rgba(255,8,5,0.5);
          }
          /* red top bar accent */
          .stat-block::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, #ff0805, rgba(255,8,5,0.4));
            border-radius: 0;
          }
          /* hide the vertical divider line */
          .stat-block::after { display: none !important; }

          .stat-num {
            font-size: 20px;
          }
        }

        @media (max-width: 500px) {
          .hero-grid { padding: 0 16px; }
          .hero-h1 { font-size: 28px; }
          .img-main img { height: 240px; }
          .stat-strip { gap: 8px; }
          .stat-num { font-size: 10px; }
          .stat-block { padding: 14px 8px !important; border-radius: 10px; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-grid">
          {/* ─── LEFT ─── */}
          <div className="hero-left">
            <h1 className="hero-h1">
              Advanced Spine Surgery for{" "}
              <span className="red-word">Long-Term Pain</span> Relief
              {/* <span className="red-word"> Head &amp; Neck </span>
              Conditions */}
            </h1>

            <p className="hero-desc">
              Back and neck pain can limit your daily activities and overall
              well-being. The expert surgical team at AdvancedCare Surgery
              Center focuses on accurate diagnosis, minimally invasive spine
              procedures, and personalized recovery plans to support safe
              healing and lasting results.
            </p>

            <div className="btn-wrap">
              <a href="/appointment" className="btn-red">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Schedule Appointment
              </a>
            </div>

            <div className="stat-strip">
              <div className="stat-block">
                <span className="stat-num">Experienced Spine Specialists</span>
              </div>
              <div className="stat-block">
                <span className="stat-num">Advanced Surgical Technology</span>
              </div>
              <div className="stat-block">
                <span className="stat-num">Patient-Focused Care</span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="hero-right">
            <div className="img-wrap">
              <div className="img-main">
                <img
                  src="/assets/img/banner.png"
                  alt="ENT Head & Neck Specialist"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
