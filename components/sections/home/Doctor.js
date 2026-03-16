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

              <p style={{ color: "black" }}>
                Rao Kamran Ali, MD is a double board-certified physician in Pain
                Management and Physical Medicine & Rehabilitation (PM&R). He is
                the CEO of Premier Pain Centers and Advanced Care Center,
                providing advanced, patient-focused care for individuals
                searching for a trusted pain management doctor in Dallas, TX and
                surrounding communities.
              </p>
              <p style={{ color: "black" }}>
                Patients across Dallas, Richardson, North Richland Hills (NRH),
                Fort Worth, Lancaster, and Hillsboro visit Dr. Rao K. Ali for a
                thorough evaluation and personalized treatment plans focused on
                long-term relief and improved function. As an experienced
                interventional pain specialist in Dallas, Dr. Rao Ali treats
                chronic and acute pain conditions using minimally invasive,
                evidence-based approaches designed to help patients return to
                daily activities with more comfort and confidence.
              </p>
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
