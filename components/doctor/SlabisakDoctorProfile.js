"use client";
import { useState } from "react";

const profileData = {
  education: [
    {
      label: "Medical School",
      detail: "University of Texas Health Science Center, San Antonio, Texas",
      year: "1998",
    },
    {
      label: "Internship",
      detail: "University of Texas Health Science Center, San Antonio",
      year: null,
    },
    {
      label: "Residency",
      detail:
        "University of Texas Health Science Center, San Antonio - Orthopedic Surgery",
      year: null,
    },
    {
      label: "Fellowship",
      detail:
        "South Texas Spinal Clinic, San Antonio - Orthopedic Spine Surgery",
      year: null,
    },
  ],
  languages: ["English", "Spanish"],
};

export default function DoctorProfile() {
  const [hoveredEdu, setHoveredEdu] = useState(null);

  return (
    <>
      <style>{`
        .dp-card {
          box-shadow: 0 4px 30px rgb(255, 8, 5, 0.5);
          padding: 20px;
        }

        .edu-heading {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 700;
          color: rgb(255, 8, 5);
          line-height: 1.2;
          letter-spacing: -0.02em;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255,8,5,0.15);
          position: relative;
        }

        .edu-heading::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 3rem;
          height: 2px;
          background: rgb(255,8,5);
        }

        /* ── EDUCATION GRID: 2 columns ── */
        .edu-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 600px) {
          .edu-list {
            grid-template-columns: 1fr;
          }
        }

        .edu-item {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0 0.75rem;
          padding: 0.85rem 1rem;
          border: 1px solid transparent;
          border-radius: 2px;
          transition: border-color 0.25s, background 0.25s;
          cursor: default;
          background: #fafafa;
        }

        .edu-item:hover {
          border-color: rgba(255,8,5,0.25);
          background: rgba(255,8,5,0.04);
        }

        .edu-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgb(255,8,5);
          margin-top: 0.45rem;
          flex-shrink: 0;
          transition: transform 0.25s;
          box-shadow: 0 0 6px rgba(255,8,5,0.4);
        }

        .edu-item:hover .edu-dot {
          transform: scale(1.5);
        }

        .edu-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: rgb(255, 8, 5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.2rem;
        }

        .edu-detail {
          font-size: 0.92rem;
          font-weight: 400;
          color: black;
          line-height: 1.45;
        }

        .edu-year {
          display: inline-block;
          margin-left: 0.5rem;
          font-size: 0.75rem;
          color: rgb(255,8,5);
          background: rgba(255,8,5,0.08);
          padding: 0.1rem 0.45rem;
          border-radius: 2px;
          vertical-align: middle;
          font-weight: 500;
        }

        /* ── LANGUAGES ── */
        .lang-heading {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 700;
          color: rgb(255, 8, 5);
          margin-bottom: 1rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid rgba(255,8,5,0.15);
          position: relative;
        }

        .lang-heading::after {
          content: '';
          position: absolute;
          left: 0; bottom: -1px;
          width: 2.5rem; height: 2px;
          background: rgb(255,8,5);
        }

        .lang-list {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .lang-badge {
          padding: 0.35rem 1.1rem;
          border: 1px solid rgba(255,8,5,0.35);
          border-radius: 2px;
          font-size: 0.88rem;
          font-weight: 500;
          color: black;
          background: rgba(255,8,5,0.04);
          letter-spacing: 0.04em;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }

        .lang-badge:hover {
          background: rgba(255,8,5,0.12);
          color: rgb(255,8,5);
          border-color: rgba(255,8,5,0.7);
        }
      `}</style>

      <div className="container">
        <div className="dp-card">
          {/* Education & Training */}
          <h2 className="edu-heading">Education &amp; Training</h2>
          <ul className="edu-list">
            {profileData.education.map((item, i) => (
              <li key={i} className="edu-item">
                <span className="edu-dot" />
                <div>
                  <div className="edu-label">{item.label}</div>
                  <div className="edu-detail">
                    {item.detail}
                    {item.year && <span className="edu-year">{item.year}</span>}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Languages */}
          <h2 className="lang-heading">Languages</h2>
          <div className="lang-list">
            {profileData.languages.map((lang, i) => (
              <span key={i} className="lang-badge">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
