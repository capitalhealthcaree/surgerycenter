"use client";

import { useEffect, useRef, useState } from "react";

/* ─── shared hook (defined FIRST so all components can use it) ─── */
function useVisible(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── data ─── */
const steps = [
  {
    num: "01",
    title: "Compassionate & Expert Care",
    desc: "Our team of dedicated healthcare professionals combines years of experience with a genuine commitment to providing the highest standard of patient care.",
  },
  {
    num: "02",
    title: "Patient-Centered Approach",
    desc: "Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions, and guide you through every step.",
  },
  {
    num: "03",
    title: "Personalized Treatment Plans",
    desc: "We understand that every patient is unique, and their healthcare needs may vary. That's why we create individualized treatment plans tailored just for you.",
  },
];

/* ─── StepItem sub-component ─── */
function StepItem({ step, index }) {
  const [ref, visible] = useVisible(0.15);

  return (
    <div
      ref={ref}
      className="step-item"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-24px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div className="step-num">{step.num}</div>
      <div className="step-body">
        <h3 className="step-title">{step.title}</h3>
        <p className="step-desc">{step.desc}</p>
        <div className="step-divider" />
      </div>
    </div>
  );
}

/* ─── main export ─── */
export default function WhyChooseUsTwo() {
  const [headRef, headVis] = useVisible(0.2);
  const [imgRef, imgVis] = useVisible(0.1);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .wcu2-inner {
          max-width: 1260px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 620px;
          align-items: stretch;
        }

        /* ── LEFT ── */
        .wcu2-left {
          padding: 72px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .wcu2-h2 {
          font-size: clamp(24px, 2.8vw, 40px);
          font-weight: 800;
          color: #070606;
          line-height: 1.18;
          margin: 0 0 52px 0;
          max-width: 440px;
        }

        /* steps */
        .steps-list {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .steps-list::before {
          content: '';
          position: absolute;
          left: 23px;
          top: 44px;
          bottom: 44px;
          width: 2px;
          background: linear-gradient(to bottom, #ff0805 0%, rgba(255,8,5,0.15) 100%);
          z-index: 0;
        }
        .step-item {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 20px;
          padding-bottom: 36px;
          position: relative;
          z-index: 1;
        }
        .step-item:last-child { padding-bottom: 0; }

        .step-num {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #ff0805;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 500;
          color: #ff0805;
          flex-shrink: 0;
          transition: background 0.3s ease, color 0.3s ease;
          z-index: 2;
        }
        .step-item:hover .step-num {
          background: #ff0805;
          color: #fff;
        }
        .step-body { padding-top: 8px; }
        .step-title {
          font-size: 18px;
          font-weight: 700;
          color: #070606;
          margin: 0 0 10px 0;
          line-height: 1.3;
          transition: color 0.25s;
        }
        .step-item:hover .step-title { color: #ff0805; }
        .step-desc {
          font-size: 14.5px;
          font-weight: 300;
          line-height: 1.75;
          color: #666;
          margin: 0 0 24px 0;
          max-width: 420px;
        }
        .step-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(7,6,6,0.1) 0%, transparent 100%);
          max-width: 420px;
        }
        .step-item:last-child .step-divider { display: none; }

        /* ── RIGHT IMAGE ── */
        .wcu2-right {
          position: relative;
          overflow: hidden;
        }
        .wcu2-right img {
          width: 100%;
          height: 100%;
          min-height: 560px;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.6s ease;
        }
        .wcu2-right:hover img { transform: scale(1.03); }
        .wcu2-right::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 5px;
          background: #ff0805;
          z-index: 2;
        }
        .wcu2-right::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 140px;
          background: linear-gradient(to top, rgba(7,6,6,0.5) 0%, transparent 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .wcu2-inner { grid-template-columns: 1fr; }
          .wcu2-right { order: -1; height: 360px; }
          .wcu2-right img { min-height: 360px; }
          .wcu2-left { padding: 52px 32px; }
        }
        @media (max-width: 480px) {
          .wcu2-left { padding: 40px 20px; }
          .wcu2-h2 { font-size: 22px; margin-bottom: 36px; }
          .wcu2-right { height: 280px; }
          .wcu2-right img { min-height: 280px; }
          .step-title { font-size: 16px; }
        }
      `}</style>

      <div className="container my-4">
        <div className="wcu2-inner">
          {/* LEFT */}
          <div className="wcu2-left">
            <div
              ref={headRef}
              style={{
                opacity: headVis ? 1 : 0,
                transform: headVis ? "translateY(0)" : "translateY(-16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <h2 className="wcu2-h2">
                Trust Our Expert Surgeons To Deliver Exceptional Results
              </h2>
            </div>

            <div className="steps-list">
              {steps.map((s, i) => (
                <StepItem key={s.num} step={s} index={i} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            ref={imgRef}
            className="wcu2-right"
            style={{
              opacity: imgVis ? 1 : 0,
              transform: imgVis ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85"
              alt="Expert Surgeon at Encore Surgery Center"
            />
          </div>
        </div>
      </div>
    </>
  );
}
