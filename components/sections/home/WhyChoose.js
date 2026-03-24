"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    id: 1,
    title: "Experienced Surgical Team",
    desc: "Advanced techniques are used by experienced specialists to deliver precision, safety, and consistent surgical outcomes.",
    icon: "/assets/img/expertise.png",
  },
  {
    id: 2,
    title: "Advanced Technology",
    desc: "Modern equipment supports accurate diagnosis and minimally invasive procedures for better recovery.",
    icon: "/assets/img/advanced-facilities.png",
  },
  {
    id: 3,
    title: "Patient-Focused Approach",
    desc: "Every treatment plan is designed based on condition severity and individual recovery goals.",
    icon: "/assets/img/convenience.png",
  },
  {
    id: 4,
    title: "Comprehensive Care",
    desc: "From consultation to recovery, each step is carefully managed for smooth patient experience.",
    icon: "/assets/img/comprehensive-care.png",
  },
  {
    id: 5,
    title: "Outcome-Driven Results",
    desc: "Focus remains on restoring function, reducing pain, and improving long-term mobility.",
    icon: "/assets/img/outcome-driven-results.png",
  },
];

function FeatureCard({ feature, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="why-card"
      style={{
        flex: "1 1 260px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.65s ease ${index * 0.18}s, transform 0.65s ease ${index * 0.18}s`,
        position: "relative",
        borderRadius: "4px",
        cursor: "default",
      }}
    >
      {/* vertical separator (desktop) */}
      {index < features.length - 1 && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "1px",
            height: "120px",
            background: "rgba(255,255,255,0.2)",
          }}
          className="card-sep"
        />
      )}

      {/* icon circle */}
      <div
        className="icon-circle"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "32px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(4px)",
          transition:
            "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* {feature.icon} */}
        <img style={{ width: "50px", height: "50px" }} src={feature.icon} />
      </div>

      {/* title */}
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "800",
          color: "#ffffff",
        }}
      >
        {feature.title}
      </h3>

      {/* desc */}
      <p
        className="mb-3"
        style={{
          fontSize: "15px",
          fontWeight: "300",
          lineHeight: "1.8",
          color: "white",
          margin: 0,
          maxWidth: "300px",
        }}
      >
        {feature.desc}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTitleVisible(true);
      },
      { threshold: 0.2 },
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .why-section {
          position: relative;
          overflow: hidden;
          background: #ff0805;
      
        }

        .why-heading-wrap {
          text-align: center;
        }

        .why-heading {
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 550;
          color: white;
        }


        .why-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
        }

        /* hover lift on icon */
        .why-card:hover .icon-circle {
          transform: translateY(-6px) scale(1.06);
          background: rgba(255,255,255,0.15) !important;
          border-color: rgba(255,255,255,0.6) !important;
        }

        @media (max-width: 900px) {
          .why-cards { flex-direction: column; }
          .why-card { padding: 36px 24px !important; }
          .card-sep { display: none; }
          /* horizontal separator for mobile */
          .why-card:not(:last-child) {
            border-bottom: 1px solid rgba(255,255,255,0.15);
          }
        }

        @media (max-width: 480px) {
          .icon-circle { width: 90px !important; height: 90px !important; }
        }
      `}</style>
      <div className="containers my-4s">
        <div className="why-section">
          {/* heading */}
          <div
            ref={titleRef}
            className="why-heading-wrap"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(-20px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
            }}
          >
            <h2 className="why-heading pt-3">
              Why Choose AdvancedCare Surgery Center
            </h2>
          </div>

          {/* cards */}
          <div className="why-cards">
            {features.map((f, i) => (
              <FeatureCard key={f.id} feature={f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
