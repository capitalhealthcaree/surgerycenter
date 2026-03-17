"use client";

const doctors = [
  {
    name: "Rao K. Ali MD",
    role: "Board Certified Interventional Pain Management",
    img: "/assets/img/team/rao-k-ali.png",
  },
  {
    name: "Christopher P Creighton MD",
    role: "Board Certified Interventional Pain Management",
    img: "/assets/img/team/dr-christopher-creighton.png",
  },
];

export default function MeetDoctors() {
  return (
    <>
      <style>{`
        /* ── Minimal custom styles — only what Bootstrap can't do ── */

        .md-section {
          background: #070606;
          position: relative;
          overflow: hidden;
        }

        /* Diagonal stripe texture */
        .md-section::before {
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

        /* Animations */
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .md-fade-down { animation: fadeDown 0.65s ease 0.1s both; }

        .md-card-anim:nth-child(1) { animation: fadeUp 0.6s ease 0.1s both; }
        .md-card-anim:nth-child(2) { animation: fadeUp 0.6s ease 0.22s both; }
        .md-card-anim:nth-child(3) { animation: fadeUp 0.6s ease 0.34s both; }
        .md-card-anim:nth-child(4) { animation: fadeUp 0.6s ease 0.46s both; }

        /* Card styling */
        .md-card {
          background: #0e0d0d;
          border: 1px solid rgba(255,8,5,0.35) !important;
          box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,8,5,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .md-card:hover {
          box-shadow: 0 32px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,8,5,0.25);
        }

        /* Red top bar on card */
        .md-card-bar {
          height: 4px;
          background: linear-gradient(90deg, #ff0805 0%, rgba(255,8,5,0.3) 100%);
        }

        /* Image wrapper */
        .md-img-wrap {
          position: relative;
          width: 100%;
          padding-top: 105%;
          overflow: hidden;
          background: #1a1818;
        }
        .md-img-wrap img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s ease;
        }
        .md-card:hover .md-img-wrap img { transform: scale(1.04); }

        /* Gradient overlay on image */
        .md-img-wrap::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 55%;
          background: linear-gradient(to top, #0e0d0d 0%, transparent 100%);
          z-index: 1;
        }

        /* View Profile button */
        .md-btn {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #ff0805 !important;
          border: 1px solid rgba(255,8,5,0.4);
          background: rgba(255,8,5,0.06);
          transition: background 0.25s, border-color 0.25s;
          text-decoration: none;
        }
        .md-btn:hover {
          background: rgba(255,8,5,0.14);
          border-color: rgba(255,8,5,0.7);
        }

        /* Mobile tweaks */
        @media (max-width: 576px) {
          .md-img-wrap { padding-top: 115%; }
        }
      `}</style>

      <section className="md-section py-4">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center mb-4 md-fade-down">
            <div className="col-12 col-md-8 text-center">
              <h2 className="fw-bold text-white fs-1 mb-2">
                Meet our Surgical{" "}
                <em className="fst-normal" style={{ color: "#ff0805" }}>
                  Specialties
                </em>{" "}
                in Dallas
              </h2>
              <p className="text-white mb-0" style={{ fontSize: "16px" }}>
                Meet our experienced and dedicated team of professionals — pain
                physicians and Surgical Specialties in Dallas, ready to serve
                you with excellence and compassion.
              </p>
            </div>
          </div>

          {/* ── Doctor Cards Grid ── */}
          <div className="row justify-content-center g-4">
            {doctors.map((doc, i) => (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3 md-card-anim"
                key={i}
              >
                <div className="md-card rounded-3 overflow-hidden h-100">
                  {/* Red top accent bar */}
                  <div className="md-card-bar" />

                  {/* Doctor Image */}
                  <div className="md-img-wrap">
                    <img src={doc.img} alt={doc.name} />
                  </div>

                  <div className="p-3 p-md-4 position-relative">
                    {/* Doctor Name */}
                    <h5
                      className="fw-bold mb-2"
                      style={{
                        color: "#ff0805",
                        fontSize: "16px",
                        lineHeight: 1.3,
                      }}
                    >
                      {doc.name}
                    </h5>

                    {/* Role */}
                    <p
                      className="mb-3 fw-light"
                      style={{
                        fontSize: "12.5px",
                        color: "white",
                        lineHeight: 1.6,
                      }}
                    >
                      {doc.role}
                    </p>

                    {/* CTA Button */}
                    <a
                      href="#"
                      className="md-btn d-inline-flex align-items-center gap-2 px-3 py-2 rounded-1"
                    >
                      View Profile
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
